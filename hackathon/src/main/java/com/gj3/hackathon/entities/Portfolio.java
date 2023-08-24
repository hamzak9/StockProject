package com.gj3.hackathon.entities;

import jakarta.persistence.*;
import java.util.HashMap;
@Entity
@Table(name="Portfolio")
public class Portfolio {
    public Portfolio(int id, HashMap<Stock, Integer> portfolio) {
        this.id = id;
        this.portfolio = portfolio;
    }

    public Portfolio() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public HashMap<Stock, Integer> getPortfolio() {
        return portfolio;
    }

    public void setPortfolio(HashMap<Stock, Integer> portfolio) {
        this.portfolio = portfolio;
    }

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id")
    private int id;
    private HashMap<Stock,Integer> portfolio = new HashMap<>();
    // { AAPL : 5, TSLA : 12 ... }
}
