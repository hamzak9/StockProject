package com.gj3.hackathon.services;

import com.gj3.hackathon.entities.Stock;
import com.gj3.hackathon.repository.StocksRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StocksService {

    @Autowired
    private StocksRepository repository;

    public Optional<Stock> findStockByTicker(String ticker){
        return repository.getStockByTicker(ticker);
    }

    public void updateStock(Stock stock){
         repository.save(stock);

    }
    @Transactional
    public void deleteStock(Stock stock){
        repository.deleteStock(stock);
    }

    public List<Stock> getAllStocks(){
        return (List<Stock>)repository.findAll();
    }


}
