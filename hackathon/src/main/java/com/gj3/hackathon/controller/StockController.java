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


    @GetMapping("/viewstock/{ticker}")
    public ResponseEntity<?> viewStock(@PathVariable("ticker") String ticker) throws IOException, InterruptedException {

        String[] information = getStockInfo(ticker);

        return new ResponseEntity<>(information, HttpStatus.OK);

    }

    public String[] getStockInfo(String ticker) throws IOException, InterruptedException {

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://yahoo-finance127.p.rapidapi.com/key-statistics/" + ticker))
                .header("X-RapidAPI-Key", "a3a3ce9684msh56d4b07d5786305p17154djsn8e12df06f994")
                .header("X-RapidAPI-Host", "yahoo-finance127.p.rapidapi.com")
                .method("GET", HttpRequest.BodyPublishers.noBody())
                .build();
        HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());

        JSONObject jsonObject = new JSONObject(response.body());
        System.out.println(jsonObject);

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

        HashMap<String, Object> information = getTrendInformation(ticker);

        return new ResponseEntity<>(information, HttpStatus.OK);

    }

    public HashMap<String, Object> getTrendInformation(String ticker) throws IOException, InterruptedException {

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://yahoo-finance127.p.rapidapi.com/earnings-trend/" + ticker))
                .header("X-RapidAPI-Key", "ba23cb7f45msh675402e036b3c69p17a228jsn86d3d492b636")
                .header("X-RapidAPI-Host", "yahoo-finance127.p.rapidapi.com")
                .method("GET", HttpRequest.BodyPublishers.noBody())
                .build();
        HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());

        JSONObject jsonObject = new JSONObject(response.body());

        HashMap<String, Object> trendInformation = new HashMap<>();
        try {
            JSONObject earningsTrend = jsonObject.getJSONObject("epsTrend");

            HashMap<String, Double> epsAtTime = new HashMap<>();
            // Extract the values and populate the array
            epsAtTime.put("current", earningsTrend.getJSONObject("current").getDouble("raw"));
            epsAtTime.put("7daysAgo", earningsTrend.getJSONObject("7daysAgo").getDouble("raw"));
            epsAtTime.put("30daysAgo", earningsTrend.getJSONObject("30daysAgo").getDouble("raw"));
            epsAtTime.put("60daysAgo", earningsTrend.getJSONObject("60daysAgo").getDouble("raw"));
            epsAtTime.put("90daysAgo", earningsTrend.getJSONObject("90daysAgo").getDouble("raw"));

            trendInformation.put("earningsTrend", epsAtTime);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return trendInformation;

    }

    @GetMapping(value = "/history/{ticker}/{interval}")
    public ResponseEntity<?> getHistory(@PathVariable("ticker") String ticker, @PathVariable("interval") String interval) throws IOException, InterruptedException {
        HashMap<String, Object> stockInfo = new HashMap<>();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(String.format("https://yahoo-finance15.p.rapidapi.com/api/yahoo/hi/history/%s/%s", ticker, interval)))
                .header("X-RapidAPI-Key", "ba23cb7f45msh675402e036b3c69p17a228jsn86d3d492b636")
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
