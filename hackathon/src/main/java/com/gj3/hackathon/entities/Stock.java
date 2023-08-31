package com.gj3.hackathon.entities;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name="Stocks")
public class Stock implements Serializable {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id;
    @Column(name="price")
    private Double price;
    @Column(name="ticker")
    private String ticker;

    public Portfolio getPortfolio() {
        return portfolio;
    }

    public void setPortfolio(Portfolio portfolio) {
        this.portfolio = portfolio;
    }

    @Column(name="name")
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column
    private Integer quantity;

    public Stock(Integer id, Double price, String ticker, Integer quantity,String name) {
        this.id = id;
        this.price = price;
        this.ticker = ticker;
        this.quantity = quantity;
        this.name=name;
    }

    public Stock() {
    }
    public Stock(Integer id, Double price, String ticker) {
        this.id = id;
        this.price = price;
        this.ticker = ticker;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getTicker() {
        return ticker;
    }

    public void setTicker(String ticker) {
        this.ticker = ticker;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

}
