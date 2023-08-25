package com.gj3.hackathon.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Arrays;

import org.json.JSONArray;
import org.json.JSONObject;



@Controller
@RequestMapping("/api/portfolio")
@CrossOrigin // allows requests from all domains

public class StockController {

    @PostMapping("/viewstock")
    public ResponseEntity<?> viewStock(@RequestBody String payload) throws IOException, InterruptedException { 

        JSONObject json = new JSONObject(payload);
        String ticker = json.getString("symbol");

        String[] information = getStockInfo(ticker);

        return new ResponseEntity<>(information,HttpStatus.OK);

    }

    public String[] getStockInfo(String ticker) throws IOException, InterruptedException {

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://yahoo-finance127.p.rapidapi.com/key-statistics/"+ticker))
            .header("X-RapidAPI-Key", "53555d6a01mshd60267e4c4c87d0p16910cjsnffc2c3c37aa2")
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

    @PostMapping("/gettrend")
    public ResponseEntity<?> getTrend(@RequestBody String payload) throws IOException, InterruptedException { 

        JSONObject json = new JSONObject(payload);
        String ticker = json.getString("symbol");

        JSONArray information = getTrendInformation(ticker);

        return new ResponseEntity<>(information,HttpStatus.OK);

    }

    public JSONArray getTrendInformation(String ticker) throws IOException, InterruptedException { 

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://yahoo-finance127.p.rapidapi.com/earnings-trend/"+ticker))
            .header("X-RapidAPI-Key", "53555d6a01mshd60267e4c4c87d0p16910cjsnffc2c3c37aa2")
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
    
}
