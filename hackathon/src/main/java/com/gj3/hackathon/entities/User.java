package com.gj3.hackathon.entities;

import jakarta.persistence.*;

@Entity
@Table(name="Users")
public class User {

    public User() { // add for hibernate??

    }
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id;

    @Column(name="cash")
    private Double cash;

    @Column(name="totalNet")
    private Double totalNet;

    public double getTotalNet() {
        return totalNet;
    }

    public void setTotalNet(double totalNet) {
        this.totalNet = totalNet;
    }

    public double getTotalStock() {
        return totalStock;
    }

    public void setTotalStock(double totalStock) {
        this.totalStock = totalStock;
    }

    public User(Integer id, Double cash, double totalNet, double totalStock) {
        this.id = id;
        this.cash = cash;
        this.totalNet = totalNet;
        this.totalStock = totalStock;
    }

    @Column(name="totalStock")
    private double totalStock;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Double getCash() {
        return cash;
    }

    public void setCash(Double cash) {
        this.cash = cash;
    }

    public User(Integer id, Double cash) {
        this.id = id;
        this.cash = cash;
    }



}
