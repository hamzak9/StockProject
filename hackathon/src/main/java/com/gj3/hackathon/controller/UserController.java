package com.gj3.hackathon.controller;

import com.gj3.hackathon.services.UserService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;

@Controller
@RequestMapping("/api/portfolio")
@CrossOrigin // allows requests from all domains
public class UserController {

    @Autowired
    public UserService userService;

    @PostMapping("/depositCash")
    public ResponseEntity<?> depositCash(@RequestBody String payload) throws IOException, InterruptedException {
        JSONObject json = new JSONObject(payload);
        Integer userId = 1;

        Double deposit = json.getDouble("amount");
        Double currentCash = userService.getUserCashById(userId);
        Double newCash = deposit + currentCash;

        userService.updateUserCash(userId, newCash);

        return new ResponseEntity<>("Deposited $" + deposit + ". Your new cash balance is $" + newCash, HttpStatus.OK);
    }

    @PostMapping("/withdrawCash")
    public ResponseEntity<?> withdrawCash(@RequestBody String payload) throws IOException, InterruptedException {
        JSONObject json = new JSONObject(payload);
        Integer userId = 1;

        Double withdraw = json.getDouble("amount");
        Double currentCash = userService.getUserCashById(userId);

        if (withdraw <= currentCash) {
            Double newCash = currentCash - withdraw;

            userService.updateUserCash(userId, newCash);

            return new ResponseEntity<>("Withdrew $" + withdraw + ". Your new cash balance is $" + newCash, HttpStatus.OK);
        }

        else {
            return new ResponseEntity<>("Not enough cash$",HttpStatus.OK);
        }
    }


}
