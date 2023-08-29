package com.gj3.hackathon.controller;

import com.fasterxml.jackson.databind.util.JSONPObject;
import com.gj3.hackathon.entities.Order;
import com.gj3.hackathon.entities.Portfolio;
import com.gj3.hackathon.entities.Stock;
import com.gj3.hackathon.services.OrderService;
import com.gj3.hackathon.services.StocksService;
import com.gj3.hackathon.services.UserService;
import org.apache.tomcat.util.json.JSONParser;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.math.BigDecimal;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URI;
import java.net.URL;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Map;
import java.util.Optional;

@Controller
@RequestMapping("/api/portfolio")
@CrossOrigin // allows requests from all domains

public class PortfolioController {
    @Autowired
    public StocksService stockService;

    @Autowired
    public UserService userService;

    @Autowired
    public OrderService orderService;


    @PostMapping("/buystock")
    public ResponseEntity<?> buyStock(@RequestBody String payload) throws IOException, InterruptedException {
        System.out.println(payload);
        JSONObject json = new JSONObject(payload);

        String ticker = json.getString("symbol");
        Integer quantity = json.getInt("shares");


        JSONObject information = getStockInfo(ticker);


        BigDecimal price = information.getBigDecimal("price");

        BigDecimal total = price.multiply(BigDecimal.valueOf(quantity));

        System.out.println("TOTAL" + total);

        Integer userId=1;

        Double cash = userService.getUserCashById(userId);


        Optional<Stock> exists = stockService.findStockByTicker(ticker);



        if(cash>=total.doubleValue()){

            cash = cash- total.doubleValue(); // new balance

            userService.updateUserCash(userId,cash);

            LocalDateTime date = LocalDateTime.now();
            Order order = new Order(null,"Buy",ticker,total.doubleValue(),quantity,date);
            orderService.createOrder(order);

            if(exists.isPresent()){
//                System.out.println("TICKER FOUND-==================================");
                Stock currentStock = exists.get();

                int oldQuantity = currentStock.getQuantity();
                double oldPrice = currentStock.getPrice();

                int newQuantity = oldQuantity + quantity;
                double newAverage = oldPrice + total.doubleValue();
                currentStock.setPrice(newAverage);
                currentStock.setQuantity(newQuantity);
                stockService.updateStock(currentStock);


            }
            else{
                Stock stock = new Stock();

                stock.setTicker(ticker);
                stock.setQuantity(quantity);
                stock.setPrice(total.doubleValue());
                stockService.updateStock(stock);

            }



            return new ResponseEntity<>("Purchased $" + total + " Of: "+ ticker, HttpStatus.OK);

        }

        else{
            return new ResponseEntity<>("Not enough cash$",HttpStatus.OK);


        }






    }

    public JSONObject getStockInfo(String ticker) throws IOException, InterruptedException {

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://yh-finance-complete.p.rapidapi.com/yhprice?ticker=" + ticker))
                .header("X-RapidAPI-Key", "f98ff6c085msh01b469893d8b771p15d458jsn6fe7ddaba497")
                .header("X-RapidAPI-Host", "yh-finance-complete.p.rapidapi.com")
                .method("GET", HttpRequest.BodyPublishers.noBody())
                .build();
        HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());

     return new JSONObject(response.body());


    }

    @GetMapping("/getOrderHistory")
    public ResponseEntity<?> orderHistory(){




        return new ResponseEntity<>(HttpStatus.OK);

    }

    @PostMapping("/sellstock")
    public ResponseEntity<?> sellStock(@RequestBody String payload) throws IOException, InterruptedException {
        JSONObject json = new JSONObject(payload);

        String ticker = json.getString("symbol");
        Integer quantity = json.getInt("shares");


        JSONObject information = getStockInfo(ticker);


        BigDecimal price = information.getBigDecimal("price");

        BigDecimal total = price.multiply(BigDecimal.valueOf(quantity));

        Integer userId=1;

        Optional<Stock> stock = stockService.findStockByTicker(ticker);


        if(stock.isPresent()){
            if(stock.get().getQuantity()>=quantity){


                Integer newQuantity = stock.get().getQuantity() - quantity;

                double pricePerShare = (stock.get().getPrice() /stock.get().getQuantity());

                System.out.println("PRICEPERSHARE" + pricePerShare);

                double cashFromSale = price.doubleValue() * quantity ; // current stock price * quantity

                System.out.println("CashFromSale" + cashFromSale);




                double currentCash = userService.getUserCashById(userId);
                System.out.println("CURRENT CASH : " + currentCash);


                double currentTotalCost = stock.get().getPrice();

                System.out.println("CURRENT TOTAL COST : " + currentTotalCost);




                double newTotalCost = currentTotalCost - cashFromSale;

                System.out.println("NEW TOTAL COST: " + newTotalCost);


                userService.updateUserCash(userId,currentCash + cashFromSale);
                Stock s = stock.get();
                s.setQuantity(newQuantity);
                s.setPrice(newTotalCost);

                LocalDateTime date = LocalDateTime.now();
                Order order = new Order(null,"Sell",ticker,total.doubleValue(),quantity,date);
                orderService.createOrder(order);


                if(newQuantity == 0){ // if 0, remove from table
                    stockService.deleteStock(stock.get());

                }
                else{
                    stockService.updateStock(s);

                }

                return new ResponseEntity<>("Sold $" + total + " Of: "+ ticker, HttpStatus.OK);

            }
            return new ResponseEntity<>("You do not own " + quantity + " shares Of: "+ ticker, HttpStatus.OK);


        }


        return new ResponseEntity<>("Sold $" + total + " Of: "+ ticker, HttpStatus.OK);
    }

}
