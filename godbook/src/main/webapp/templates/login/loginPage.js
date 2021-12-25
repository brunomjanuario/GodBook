$(document).ready(function () {

  var chars;

  function successCallback(response) {

    chars = response;
  }

  var login = function () {


    var username = $("#username").val();

    var password = $("#password").val();

    console.log(username);

    console.log(password);

    for (var i = 0; i < chars.length; i++) {
      if (chars[i].username === username && chars[i].password === password) {

        $("#form").attr("action", ("http://192.168.1.14:8080/update" + chars[i].id));
      }
    }
  }

  $("#Login").click(login);

  function errorCallback(request, status, error) {
    console.log(error);
  }

  // perform an ajax http get request
  $.ajax({
    url: 'http://192.168.1.14:8080/api',
    crossOrigin: true,
    async: true,
    success: successCallback,
    error: errorCallback
  });

});
