package com.gj3.hackathon.services;

import com.gj3.hackathon.entities.User;
import com.gj3.hackathon.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public Double getUserCashById(Integer userId){
        return repository.findCashBalanceById(userId);
    }

    @Transactional
    public void updateUserCash(Integer userId, Double newCash) {
        Optional<User> user = repository.findById(userId);

        if(user.isPresent()){
            user.get().setCash(newCash);
            repository.save(user.get());
        }

    }

    public void addUser(User u){
        repository.save(u);

    }
}
