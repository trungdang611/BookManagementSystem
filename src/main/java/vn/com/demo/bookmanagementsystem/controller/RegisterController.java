package vn.com.demo.bookmanagementsystem.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RegisterController {
    @GetMapping(value = "/register")
    public String register() {
        return "register";
    }
}
