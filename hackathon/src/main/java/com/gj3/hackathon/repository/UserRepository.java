package com.gj3.hackathon.repository;

import com.gj3.hackathon.entities.Portfolio;
import com.gj3.hackathon.entities.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    @Query("SELECT u.cash FROM User u WHERE u.id =:userId")
    Double findCashBalanceById(@Param("userId")Integer userId);



}
