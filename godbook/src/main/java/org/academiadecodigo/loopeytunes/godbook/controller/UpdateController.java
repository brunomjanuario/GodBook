package org.academiadecodigo.loopeytunes.godbook.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UpdateController {

  @GetMapping(path = "/update{id}")
  public String update() {
    return "templates/addUpdate/update.html";
  }

  @GetMapping(path = "/update.css")
  public String updateCss() {
    return "templates/addUpdate/update.css";
  }

  @GetMapping(path = "/update.js")
  public String updateJs() {
    return "templates/addUpdate/update.js";
  }
}
