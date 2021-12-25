package org.academiadecodigo.loopeytunes.godbook.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RegisterController {

  @GetMapping(path = "/register")
  public String register() {
    return "templates/register/register.html";
  }

  @GetMapping(path = "/register.js")
  public String registerJs() {
    return "templates/register/register.js";
  }

  @GetMapping(path = "/register.css")
  public String registerCss() {
    return "templates/register/register.css";
  }
}
