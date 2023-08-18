package com.conygre.spring.boot.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/portfolio")
@CrossOrigin // allows requests from all domains



public class PortfolioController {

//    @Autowired
//    public StockService stockService; add service for stock


    @PostMapping("/buystock")
    public ResponseEntity<?> buyStock(@RequestBody String payload) {


        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/sellstock")
    public ResponseEntity<?> sellStock(@RequestBody String payload) {

        return new ResponseEntity<>(HttpStatus.OK);
    }


}
