package com.gj3.hackathon.controller;

import com.gj3.hackathon.entities.Stock;
import com.gj3.hackathon.entities.User;
import com.gj3.hackathon.services.StocksService;
import com.gj3.hackathon.services.UserService;
import io.swagger.models.Response;
import org.json.HTTP;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("/api/portfolio")
@CrossOrigin // allows requests from all domains
public class UserController {

    @Autowired
    public UserService userService;

    @Autowired
    public StocksService stockService;



    @GetMapping("/createUser")
    public ResponseEntity<?> createUser(){

        User u = new User();
        u.setTotalNet(500);
        u.setTotalStock(700);
        u.setId(null);
        u.setCash(5000.0);

        userService.addUser(u);

        return new ResponseEntity<>(HttpStatus.OK);

    }


    @PostMapping("/depositCash")
    public ResponseEntity<?> depositCash(@RequestBody String payload) throws IOException, InterruptedException {
        JSONObject json = new JSONObject(payload);


        System.out.println(json.toString());


        Integer userId = 1;

        Double deposit = json.getDouble("amount");
        System.out.println("DEPOSIT AMNT " + deposit);
//
        Double currentCash = userService.getUserCashById(userId);

        System.out.println("CURRENT CASH " + currentCash);
        Double newCash = deposit + currentCash;

        userService.updateUserCash(userId, newCash);

        return new ResponseEntity<>("Deposited $" + deposit + ". Your new cash balance is $" + newCash, HttpStatus.OK);
    }

    @PostMapping("/withdrawCash")
    public ResponseEntity<?> withdrawCash(@RequestBody String payload) throws IOException, InterruptedException {
        JSONObject json = new JSONObject(payload);
        Integer userId = 1;

        Double withdraw = json.getDouble("amount");
        Double currentCash = userService.getUserCashById(userId);

        if (withdraw <= currentCash) {
            Double newCash = currentCash - withdraw;

            userService.updateUserCash(userId, newCash);

            return new ResponseEntity<>("Withdrew $" + withdraw + ". Your new cash balance is $" + newCash, HttpStatus.OK);
        }

        else {
            return new ResponseEntity<>("Not enough cash$",HttpStatus.OK);
        }
    }

    @GetMapping("/getCashBalance")
    public ResponseEntity<?> getCashBalance(){
        Integer userId = 1;

        Double currentCash = userService.getUserCashById(userId);
        return new ResponseEntity<>(currentCash, HttpStatus.OK);
    }

    @GetMapping("/getTotalStocks")
    public ResponseEntity<?> getTotalStocks() {
        List<Stock> portfolio = stockService.getAllStocks();
        double stocksValue = addStocks(portfolio);

        return new ResponseEntity<>(stocksValue, HttpStatus.OK);
    }

    @GetMapping("/getTotalNet")
    public ResponseEntity<?> getTotalNet() {
        Integer userId = 1;
        List<Stock> portfolio = stockService.getAllStocks();

        double stocksValue = addStocks(portfolio);
        Double currentCash = userService.getUserCashById(userId);

        double totalNet = stocksValue + currentCash;
        return new ResponseEntity<>(totalNet, HttpStatus.OK);
    }

    public double addStocks(List<Stock> portfolio) {
        double stocksValue = 0.0;
        for (Stock stock : portfolio) {
            Double currentPrice = stock.getPrice();
            Integer currentQuantity = stock.getQuantity();
            stocksValue += (currentPrice * currentQuantity);
        }
        return stocksValue;
    }
}
