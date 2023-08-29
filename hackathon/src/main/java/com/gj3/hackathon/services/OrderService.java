package com.gj3.hackathon.services;

import com.gj3.hackathon.entities.Order;
import com.gj3.hackathon.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {
    @Autowired
    private OrderRepository repository;
    public Order createOrder(Order order) {
        return repository.save(order);
    }

    public List<Order> getAllOrders() {
        return (List<Order>) repository.findAll();
    }

}
