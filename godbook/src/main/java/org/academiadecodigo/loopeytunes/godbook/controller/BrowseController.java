package org.academiadecodigo.loopeytunes.godbook.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class BrowseController {

  @GetMapping(path = "/browse")
  public String browse() {
    return "templates/browse/browse_page.html";
  }

  @GetMapping(path = "/browse.css")
  public String browseJs() {
    return "templates/browse/browse.css";
  }

  @GetMapping(path = "/browse.js")
  public String browseCss() {
    return "templates/browse/browse.js";
  }
}
