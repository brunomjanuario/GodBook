package org.academiadecodigo.loopeytunes.godbook.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class ProfileController {

  @GetMapping(path = "/{id}")
  public String getProfile(@PathVariable String id) {
    return "templates/profile/profile.html";
  }

  @GetMapping(path = "/profile.js")
  public String getProfileJs() {

    return "templates/profile/profile.js";
  }

  @GetMapping(path = "/profile.css")
  public String getProfileCss() {

    return "templates/profile/profile.css";
  }
}
