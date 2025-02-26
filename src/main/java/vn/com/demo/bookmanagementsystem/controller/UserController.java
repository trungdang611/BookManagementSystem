package vn.com.demo.bookmanagementsystem.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserController {

    @GetMapping(value = "/admin")
    public String adminPage() {
        return "admin";
    }

    @GetMapping(value = "/librarian")
    public String librarianPage() {
        return "librarian";
    }

    @GetMapping(value = "/member")
    public String memberPage() {
        return "member";
    }

    @GetMapping(value = "/home")
    public String homePage() {
        return "home";
    }
}
