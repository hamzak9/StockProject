package com.gj3.hackathon.repository;

import com.gj3.hackathon.entities.Stock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.gj3.hackathon.entities.Portfolio;

import java.util.Optional;

@Repository
public interface StocksRepository extends CrudRepository<Stock, Integer> {
    @Query("SELECT s FROM Stock s WHERE s.ticker =:ticker")
    Optional<Stock> getStockByTicker(@Param("ticker") String ticker);

    @Modifying // needed for delete operations, indicate query will modify db
    @Query("DELETE FROM Stock s WHERE s =:stock")
    void deleteStock(Stock stock);



}
