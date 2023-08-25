package com.gj3.hackathon.entities;


import jakarta.persistence.*;

import java.io.Serializable;
import java.util.HashMap;
//@Entity
//@Table(name="Portfolio")
public class Portfolio implements Serializable {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id;
    @Column(name="ticker")
    private String ticker;

    @Column(name="amount")
    private Integer amount;

    @Column(name="cash")
    private Double cash;

    public Portfolio(Integer id, String ticker, Integer amount, Double cash) {
        this.id = id;
        this.ticker = ticker;
        this.amount = amount;
        this.cash = cash;
    }

    public Portfolio() {
    }

    public int getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTicker() {
        return ticker;
    }

    public void setTicker(String ticker) {
        this.ticker = ticker;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }


    public Double getCash() {
        return cash;
    }

    public void setCash(Double cash) {
        this.cash = cash;
    }
}
