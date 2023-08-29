package com.gj3.hackathon.entities;


import jakarta.persistence.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Entity
@Table(name="Portfolio")
public class Portfolio implements Serializable {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "portfolio")
    private List<Stock> stocks = new ArrayList<>();

    public List<Stock> getStocks() {
        return stocks;
    }

    public void setStocks(List<Stock> stocks) {
        this.stocks = stocks;
    }

    public Portfolio(Integer id, List<Stock> stocks) {
        this.id = id;
        this.stocks = stocks;
    }

    public Portfolio(Integer id) {
        this.id = id;
    }
    public void addStock(Stock stock){
        stocks.add(stock);
    }
    public void removeStock(Stock stock){
        stocks.remove(stock);
    }

    public Portfolio() {
    }

    public int getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }



}
