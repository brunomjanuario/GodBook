$(document).ready(function () {

  var chars;

  function successCallback(response) {

    chars = response;
  }

  var login = function () {


    $.ajax({
      type: "POST",
      url: 'http://192.168.1.14:8080/api',
      contentType: 'application/json',
      data: '{"name":"' + $("#name").val() + '","phoneNumber":99999999,"email":"'+ $("#email").val() +'","aboutMe":"","imgUrl":"","category":"COMEDY","skills":"","experiences":"","location":"","age":'+ $("#age").val() + ',"username":"'+ $("#username").val() +'","password":"' + $("#password").val() + '"}'
    
    }).done(function () {
      console.log('SUCCESS');
      $("#form").attr("action", ("http://192.168.1.14:8080/login"));
    }).fail(function (msg) {
      console.log('FAIL');
    }).always(function (msg) {
      console.log('ALWAYS');
    });
    $("#form").attr("action", ("http://192.168.1.14:8080/login"));
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
