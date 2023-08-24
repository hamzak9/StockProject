package com.gj3.hackathon.controller;

import com.fasterxml.jackson.databind.util.JSONPObject;
import com.gj3.hackathon.services.PortfolioService;
import org.apache.tomcat.util.json.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URI;
import java.net.URL;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Map;

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
    
}
