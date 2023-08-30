package com.gj3.hackathon.repository;

import com.gj3.hackathon.entities.Order;
import com.gj3.hackathon.entities.Stock;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends CrudRepository<Order, Integer> {

    @Query("SELECT s FROM Stock s WHERE s.ticker =:ticker")
    Optional<Stock> getAllOrders(@Param("ticker") String ticker);

}
