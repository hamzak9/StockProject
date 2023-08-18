package com.conygre.spring.boot.entities;

import javax.persistence.*;
import java.util.HashMap;


@Entity
@Table(name="Portfolio")

public class Portfolio {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    private HashMap<Stock,Integer> portfolio = new HashMap<>();





    // { AAPL : 5, TSLA : 12 ... }

}
