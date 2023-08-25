package com.gj3.hackathon.entities;

import jakarta.persistence.*;

import java.io.Serializable;


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

    /*
    public Stock(int id, double price, String ticker) {
        this.id = id;
        this.price = price;
        this.ticker = ticker;
    }

    public Stock() {
    }

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
     */


}
