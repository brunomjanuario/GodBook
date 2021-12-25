package org.academiadecodigo.loopeytunes.godbook.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {

  @GetMapping(path = "/login")
  public String login() {
    return "templates/login/loginPage.html";
  }

  @GetMapping(path = "/loginPage.js")
  public String loginJs() {
    return "templates/login/loginPage.js";
  }

  @GetMapping(path = "/loginPage.css")
  public String loginCss() {
    return "templates/login/loginPage.css";
  }
}
