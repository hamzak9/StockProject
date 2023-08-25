package com.gj3.hackathon.controller;

import com.fasterxml.jackson.databind.util.JSONPObject;
import com.gj3.hackathon.services.PortfolioService;
import org.apache.tomcat.util.json.JSONParser;
import org.json.JSONObject;
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

@Controller
@RequestMapping("/api/portfolio")
@CrossOrigin // allows requests from all domains

public class PortfolioController {
//    @Autowired
//    public PortfolioService stockService;


    @PostMapping("/buystock")
    public ResponseEntity<?> buyStock(@RequestBody String payload) throws IOException, InterruptedException {
        JSONObject json = new JSONObject(payload);

        String ticker = json.getString("symbol");
        Integer quantity = json.getInt("shares");

        String information = getStockInfo(ticker);

        return new ResponseEntity<>(information, HttpStatus.OK);
    }

    public String getStockInfo(String ticker) throws IOException, InterruptedException {

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://yh-finance-complete.p.rapidapi.com/yhprice?ticker=" + ticker))
                .header("X-RapidAPI-Key", "7e6cd971e1mshe5b173d8932bb0bp1f848ejsn01fd4ecc35f7")
                .header("X-RapidAPI-Host", "yh-finance-complete.p.rapidapi.com")
                .method("GET", HttpRequest.BodyPublishers.noBody())
                .build();
        HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());

        return response.body();

    }

    @PostMapping("/sellstock")
    public ResponseEntity<?> sellStock(@RequestBody String payload) {
        JSONObject json = new JSONObject(payload);

        String ticker = json.getString("symbol");
        Integer quantity = json.getInt("shares");

        System.out.println(ticker + " " + quantity);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
