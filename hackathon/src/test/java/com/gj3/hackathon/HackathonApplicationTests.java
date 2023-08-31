package com.gj3.hackathon;

import com.gj3.hackathon.controller.StockController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;


@SpringBootTest
class HackathonApplicationTests {
    @Autowired
    private StockController controller;

    @Test
    void contextLoads() {
        assertThat(controller).isNotNull();
    }

}
