package com.gj3.hackathon.controller;

import com.gj3.hackathon.services.PortfolioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.net.HttpURLConnection;
import java.net.URL;

@Controller
@RequestMapping("/api/portfolio")
@CrossOrigin // allows requests from all domains

public class PortfolioController {
//    @Autowired
//    public PortfolioService stockService;


    @PostMapping("/buystock")
    public ResponseEntity<?> buyStock(@RequestBody String payload) {

        System.out.println("YOU ARE HERE");


//        URL url = new URL("APILINK");
//        HttpURLConnection con = (HttpURLConnection) url.openConnection();
//
//        con.setRequestMethod("POST");

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/sellstock")
    public ResponseEntity<?> sellStock(@RequestBody String payload) {

        return new ResponseEntity<>(HttpStatus.OK);
    }

}
