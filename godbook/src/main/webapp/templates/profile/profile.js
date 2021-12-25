$(document).ready(function () {
    var giver;
    var url = window.location.pathname;
    var idStr = url.split("/");
    var id = parseInt(idStr[idStr.length - 1]);

    function successCallback(response) {

        giver = response;

        $("#name").append(giver.name);
        $("#phoneNumber").append(giver.phoneNumber);
        $("#email").append(giver.email);
        $("#aboutMe").append(giver.aboutMe);
        $("#category").append(giver.category);
        $("#skills").append(giver.skills);
        $("#experiences").append(giver.experiences);
        $("#location").append(giver.location);
        $("#age").append(giver.age);

        var src1 = giver.id + ".jpg";
        $("#photo").attr("src", src1);
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

});
