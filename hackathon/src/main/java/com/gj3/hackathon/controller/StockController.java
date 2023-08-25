package com.gj3.hackathon.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;

import org.json.JSONArray;
import org.json.JSONObject;



@Controller
@RequestMapping("/api/stock")
@CrossOrigin // allows requests from all domains

public class StockController {

    @Value("${YAHOO_FINANCE_API_Key}")
    private String yahooAPIKey;

    @GetMapping("/viewstock/{ticker}")
    public ResponseEntity<?> viewStock(@PathVariable("ticker") String ticker) throws IOException, InterruptedException { 

        String[] information = getStockInfo(ticker);

        return new ResponseEntity<>(information,HttpStatus.OK);

    }

    public String[] getStockInfo(String ticker) throws IOException, InterruptedException {

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://yahoo-finance127.p.rapidapi.com/key-statistics/"+ticker))
            .header("X-RapidAPI-Key", yahooAPIKey)
            .header("X-RapidAPI-Host", "yahoo-finance127.p.rapidapi.com")
            .method("GET", HttpRequest.BodyPublishers.noBody())
            .build();
        HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());

        JSONObject jsonObject = new JSONObject(response.body());
        
        String symbol = "Symbol: " + jsonObject.getString("symbol");
        String regularMarketPrice = "Regular Market Price (Current Value): " + jsonObject.getJSONObject("regularMarketPrice").getString("fmt");
        String regularMarketOpen = "Regular Market Open (SOD Value): " + jsonObject.getJSONObject("regularMarketOpen").getString("fmt");
        String marketCap = "Market Cap: " + jsonObject.getJSONObject("marketCap").getString("fmt");
        String averageAnalystRating = "Average Analyst Rating: " + jsonObject.getString("averageAnalystRating");

        String[] tickerInfo = {symbol, regularMarketPrice, regularMarketOpen, marketCap, averageAnalystRating};

        return tickerInfo;

    }

    @GetMapping("/gettrend/{ticker}")
    public ResponseEntity<?> getTrend(@PathVariable("ticker") String ticker) throws IOException, InterruptedException { 

        JSONArray information = getTrendInformation(ticker);

        return new ResponseEntity<>(information,HttpStatus.OK);

    }

    public JSONArray getTrendInformation(String ticker) throws IOException, InterruptedException { 

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://yahoo-finance127.p.rapidapi.com/earnings-trend/"+ticker))
            .header("X-RapidAPI-Key", yahooAPIKey)
            .header("X-RapidAPI-Host", "yahoo-finance127.p.rapidapi.com")
            .method("GET", HttpRequest.BodyPublishers.noBody())
            .build();
        HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());

        JSONObject jsonObject = new JSONObject(response.body());

        JSONArray jsonArray = new JSONArray();

        try {
            JSONObject earningsTrend = jsonObject.getJSONObject("epsTrend");

            // Create an array to store the values
            double[] dataArray = new double[5];

            // Extract the values and populate the array
            dataArray[0] = earningsTrend.getJSONObject("current").getDouble("raw");
            dataArray[1] = earningsTrend.getJSONObject("7daysAgo").getDouble("raw");
            dataArray[2] = earningsTrend.getJSONObject("30daysAgo").getDouble("raw");
            dataArray[3] = earningsTrend.getJSONObject("60daysAgo").getDouble("raw");
            dataArray[4] = earningsTrend.getJSONObject("90daysAgo").getDouble("raw");
            
            jsonArray = new JSONArray(Arrays.asList(dataArray));

        } catch (Exception e) {
            e.printStackTrace();
        }
        return jsonArray;

    }

    @GetMapping(value = "/history/{ticker}/{interval}")
    public ResponseEntity<?> getHistory(@PathVariable("ticker") String ticker, @PathVariable("interval") String interval) throws IOException, InterruptedException {
        HashMap<String, Object> stockInfo = new HashMap<>();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(String.format("https://yahoo-finance15.p.rapidapi.com/api/yahoo/hi/history/%s/%s", ticker, interval)))
                .header("X-RapidAPI-Key", yahooAPIKey)
                .header("X-RapidAPI-Host", "yahoo-finance15.p.rapidapi.com")
                .method("GET", HttpRequest.BodyPublishers.noBody())
                .build();
        HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
        JSONObject jsonObject = new JSONObject(response.body());

        JSONObject meta = jsonObject.getJSONObject("meta");

        stockInfo.put("currency", meta.getString("currency"));
        stockInfo.put("symbol", meta.getString("symbol"));
        stockInfo.put("exchangeName", meta.getString("exchangeName"));
        stockInfo.put("regularMarketPrice", meta.getDouble("regularMarketPrice"));
        
        ArrayList<Object> prices = new ArrayList<>();
        stockInfo.put("prices", prices);

        JSONObject items = jsonObject.getJSONObject("items");

        items.keySet().forEach(item -> {
            JSONObject infoAtTime = items.getJSONObject(item);
            HashMap<String, String> datePriceMapping = new HashMap<>();
            datePriceMapping.put("date", infoAtTime.getString("date"));
            datePriceMapping.put("close", Double.toString(infoAtTime.getDouble("close")));
            prices.add(datePriceMapping);
        });
        System.out.println(stockInfo);
        return new ResponseEntity<>(stockInfo, HttpStatus.OK);
    }
    
}
