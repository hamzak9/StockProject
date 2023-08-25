package com.gj3.hackathon.controller;

import org.json.HTTP;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.HashMap;

@Controller
@RequestMapping("/api/stockInfo")
@CrossOrigin
public class StockInfoController {

    @Value("${YAHOO_FINANCE_API_Key}")
    private String yahooAPIKey;

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

//        stockInfo.put("prices", new HashMap<String, Double>());

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
