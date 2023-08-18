package com.conygre.spring.boot.entities;

import javax.persistence.*;


@Entity
@Table(name="Stocks")

public class Stock {
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getTicker() {
        return ticker;
    }

    public void setTicker(String ticker) {
        this.ticker = ticker;
    }

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="price")
    private double price;
    @Column(name="ticker")
    private String ticker;






}
