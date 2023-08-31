package com.gj3.hackathon.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gj3.hackathon.services.OrderService;
import com.gj3.hackathon.entities.Order;

@Controller
@RequestMapping("/api/order")
@CrossOrigin // allows requests from all domains

public class OrderController {
    
    @Autowired
    public OrderService orderService;

    @GetMapping("/getOrderHistory")
    public ResponseEntity<?> getOrderHistory(String ticker) throws IOException, InterruptedException {
        
        List<Order> orderHistoryRaw = orderService.getAllOrders();

        return new ResponseEntity<>(orderHistoryRaw,HttpStatus.OK);
    } 


}
