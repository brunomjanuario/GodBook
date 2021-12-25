$(document).ready(function () {
  var chars;

  function sucessCallback(response) {
    var test2 = "";

    response.forEach((element) => {
      chars = response;

      console.log(element.name);
      test2 =
        ' <div><a class="nav-link" href="http://192.168.1.14:8080/' +
        element.id +
        '"><button id="cardsytle" class="card mb-3" style="max-width: 540px;"><div class="row g-0"><div id="photo" class="col-md-4"><img src="' +
        element.id +
        '.jpg" width="100px" height="100px" class="img-fluid rounded-start" alt="..."></div><div id="giver" class="col-md-8"><div class="card-body"><h5 id="giverName" class="card-title">' +
        element.name +
        '</h5><p id="description" class="card-text"> ' +
        element.aboutMe +
        '</p><p class="card-text"><small id="category" class="text-muted">' + element.category +'</small></p></div></div></div></button></a></div>';

      $("#cards").append(test2);
    });
  }

  function errorCallback(request, status, error) {}

  $("#comedy").click(function () {
    $(".nav-link").remove();

    var charsFilter = chars.filter(function (element) {
      return element.category === "COMEDY";
    });

    charsFilter.forEach((element) => {
      test2 =
        '<div><a class="nav-link" href="http://192.168.1.14:8080/' +
        element.id +
        '"><button id="cardsytle" class="card mb-3" style="max-width: 540px;"><div class="row g-0"><div id="photo" class="col-md-4"><img src='+ element.id + '.jpg class="img-fluid rounded-start" alt="..."></div><div id="giver" class="col-md-8"><div class="card-body"><h5 id="giverName" class="card-title">' +
        element.name +
        '</h5><p id="description" class="card-text"> ' +
        element.aboutMe +
        '</p><p class="card-text"><small id="category" class="text-muted">' + element.category +'</small></p></div></div></div></button></a></div>';
      console.log(test2);
      return $("#cards").append(test2);
    });
  });

  $("#sports").click(function () {
    $(".nav-link").remove();

    var charsFilter = chars.filter(function (element) {
      return element.category === "SPORTS";
    });

    charsFilter.forEach((element) => {
      test2 =
        '<div><a class="nav-link" href="http://192.168.1.14:8080/' +
        element.id +
        '"><button id="cardsytle" class="card mb-3" style="max-width: 540px;"><div class="row g-0"><div id="photo" class="col-md-4"><img src='+ element.id + '.jpg class="img-fluid rounded-start" alt="..."></div><div id="giver" class="col-md-8"><div class="card-body"><h5 id="giverName" class="card-title">' +
        element.name +
        '</h5><p id="description" class="card-text"> ' +
        element.aboutMe +
        '</p><p class="card-text"><small id="category" class="text-muted">' + element.category +'</small></p></div></div></div></button></a></div>';
      console.log(test2);
      return $("#cards").append(test2);
    });
  });

  $("#music").click(function () {
    $(".nav-link").remove();

    var charsFilter = chars.filter(function (element) {
      return element.category === "MUSIC";
    });

    charsFilter.forEach((element) => {
      test2 =
        '<div><a class="nav-link" href="http://192.168.1.14:8080/' +
        element.id +
        '"><button id="cardsytle" class="card mb-3" style="max-width: 540px;"><div class="row g-0"><div id="photo" class="col-md-4"><img src='+ element.id + '.jpg class="img-fluid rounded-start" alt="..."></div><div id="giver" class="col-md-8"><div class="card-body"><h5 id="giverName" class="card-title">' +
        element.name +
        '</h5><p id="description" class="card-text"> ' +
        element.aboutMe +
        '</p><p class="card-text"><small id="category" class="text-muted">' + element.category +'</small></p></div></div></div></button></a></div>';
      console.log(test2);
      return $("#cards").append(test2);
    });
  });

  $("#self-development").click(function () {
    $(".nav-link").remove();

    var charsFilter = chars.filter(function (element) {
      return element.category === "SELF_DEVELOPMENT";
    });

    charsFilter.forEach((element) => {
      test2 =
        '<div><a class="nav-link" href="http://192.168.1.14:8080/' +
        element.id +
        '"><button id="cardsytle" class="card mb-3" style="max-width: 540px;"><div class="row g-0"><div id="photo" class="col-md-4"><img src='+ element.id + '.jpg class="img-fluid rounded-start" alt="..."></div><div id="giver" class="col-md-8"><div class="card-body"><h5 id="giverName" class="card-title">' +
        element.name +
        '</h5><p id="description" class="card-text"> ' +
        element.aboutMe +
        '</p><p class="card-text"><small id="category" class="text-muted">' + element.category +'</small></p></div></div></div></button></a></div>';
      console.log(test2);
      return $("#cards").append(test2);
    });
  });

  $("#religion").click(function () {
    $(".nav-link").remove();

    var charsFilter = chars.filter(function (element) {
      return element.category === "RELIGION";
    });

    charsFilter.forEach((element) => {
      test2 =
        '<div><a class="nav-link" href="http://192.168.1.14:8080/' +
        element.id +
        '"><button id="cardsytle" class="card mb-3" style="max-width: 540px;"><div class="row g-0"><div id="photo" class="col-md-4"><img src='+ element.id + '.jpg class="img-fluid rounded-start" alt="..."></div><div id="giver" class="col-md-8"><div class="card-body"><h5 id="giverName" class="card-title">' +
        element.name +
        '</h5><p id="description" class="card-text"> ' +
        element.aboutMe +
        '</p><p class="card-text"><small id="category" class="text-muted">' + element.category +'</small></p></div></div></div></button></a></div>';
      console.log(test2);
      return $("#cards").append(test2);
    });
  });

  $("#other").click(function () {
    $(".nav-link").remove();

    var charsFilter = chars.filter(function (element) {
      return element.category === "OTHER";
    });

    charsFilter.forEach((element) => {
      test2 =
        '<div><a class="nav-link" href="http://192.168.1.14:8080/' +
        element.id +
        '"><button id="cardsytle" class="card mb-3" style="max-width: 540px;"><div class="row g-0"><div id="photo" class="col-md-4"><img src='+ element.id + '.jpg class="img-fluid rounded-start" alt="..."></div><div id="giver" class="col-md-8"><div class="card-body"><h5 id="giverName" class="card-title">' +
        element.name +
        '</h5><p id="description" class="card-text"> ' +
        element.aboutMe +
        '</p><p class="card-text"><small id="category" class="text-muted">' + element.category +'</small></p></div></div></div></button></a></div>';
      console.log(test2);
      return $("#cards").append(test2);
    });
  });

  $("#mentalhealth").click(function () {
    $(".nav-link").remove();

    var charsFilter = chars.filter(function (element) {
      return element.category === "MENTAL_HEALTH";
    });

    charsFilter.forEach((element) => {
      test2 =
        '<div><a class="nav-link" href="http://192.168.1.14:8080/' +
        element.id +
        '"><button id="cardsytle" class="card mb-3" style="max-width: 540px;"><div class="row g-0"><div id="photo" class="col-md-4"><img src='+ element.id + '.jpg class="img-fluid rounded-start" alt="..."></div><div id="giver" class="col-md-8"><div class="card-body"><h5 id="giverName" class="card-title">' +
        element.name +
        '</h5><p id="description" class="card-text"> ' +
        element.aboutMe +
        '</p><p class="card-text"><small id="category" class="text-muted">' + element.category +'</small></p></div></div></div></button></a></div>';
      console.log(test2);
      return $("#cards").append(test2);
    });
  });

  $("#relationships").click(function () {
    $(".nav-link").remove();

    var charsFilter = chars.filter(function (element) {
      return element.category === "RELATIONSHIPS";
    });

    charsFilter.forEach((element) => {
      test2 =
        '<div><a class="nav-link" href="http://192.168.1.14:8080/' +
        element.id +
        '"><button id="cardsytle" class="card mb-3" style="max-width: 540px;"><div class="row g-0"><div id="photo" class="col-md-4"><img src='+ element.id + '.jpg class="img-fluid rounded-start" alt="..."></div><div id="giver" class="col-md-8"><div class="card-body"><h5 id="giverName" class="card-title">' +
        element.name +
        '</h5><p id="description" class="card-text"> ' +
        element.aboutMe +
        '</p><p class="card-text"><small id="category" class="text-muted">' + element.category +'</small></p></div></div></div></button></a></div>';
      console.log(test2);
      return $("#cards").append(test2);
    });
  });
  $.ajax({
    url: "http://192.168.1.14:8080/api",
    async: true,
    success: sucessCallback,
    error: errorCallback,
  });
});

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
