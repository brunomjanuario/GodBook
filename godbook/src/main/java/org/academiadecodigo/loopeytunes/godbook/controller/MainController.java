package org.academiadecodigo.loopeytunes.godbook.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class MainController {

  @GetMapping(path = {"/", ""})
  public String home() {
    return "templates/index.html";
  }

  @GetMapping(path = "/{id}.jpg")
  public String getProfileImg(@PathVariable Integer id) {

    return "photos/" + id + ".jpg";
  }

  @GetMapping(path = "logo.png")
  public String getLogo() {
    return "photos/logo.png";
  }
}
