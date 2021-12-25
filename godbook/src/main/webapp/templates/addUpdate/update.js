$(document).ready(function () {
    var giver;
    var url = window.location.pathname;
    var idStr = url.split("update");
    var id = parseInt(idStr[idStr.length - 1]);


    function successCallback(response) {

        giver = response;

        $("#photo").attr("src", giver.id + ".jpg");
        $("#name").append(giver.name);
        $("#username").append("@" + giver.username);
        $("#fullName").attr("value", giver.name);
        $("#phone").attr("value", giver.phoneNumber);
        $("#eMail").attr("value", giver.email);
        $("#About").attr("value", giver.aboutMe);
        $("#Category").attr("value", giver.category);
        $("#Skills").attr("value", giver.skills);
        $("#Experiences").attr("value", giver.experiences);
        $("#Location").attr("value", giver.location);
        $("#age").attr("value", giver.age);

    }

    function errorCallback(request, status, error) {
        console.log(error);
    }

    // perform an ajax http get request
    $.ajax({
        url: 'http://192.168.1.14:8080/api/' + id,
        crossOrigin: true,
        async: true,
        success: successCallback,
        error: errorCallback
    });

    var update = function () {
        var giverUpdate = { "id": giver.id,
            "name": $("#fullName").val(),
            "phoneNumber": $("#phone").val(),
            "email": $("#eMail").val(),
            "aboutMe": $("#About").val(),
            "imgUrl": giver.imgUrl,
            "category": $("#Category").val(),
            "skills": $("#Skills").val(),
            "experiences": $("#Experiences").val(),
            "location": $("#Location").val(),
            "age": $("#age").val(),
            "username": giver.username,
            "password": giver.password
        };


        $.ajax({
            type: "PUT",
            url: 'http://192.168.1.14:8080/api/' + giver.id,
            contentType: 'application/json',
            data: JSON.stringify(giverUpdate)
        }).done(function () {
            console.log('SUCCESS');
        }).fail(function (msg) {
            console.log('FAIL');
        }).always(function (msg) {
            console.log('ALWAYS');
        });
    }

    $("#update").click(update);

    var showProfile = function(){
      console.log("here");
      $("#show-profile").attr("action", ("http://192.168.1.14:8080/" + giver.id));
    }

  $("#show").click(showProfile);



});
