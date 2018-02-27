var speed = "500";
//Document.Ready
$(document).ready(function () {


});//End Ready
$(document).ready(function () {
    $('#tornado-button').click(function () {
        $('#emergency-content').load("/views/emergencies/tornado.html");
    });

    $('#emergency-home-button').click(function () {
        $('#emergency-content').load("/views/emergencies/emergency-home.html");
    });

    //Question handler
    $('li.q').on('click', function () {
        var answer = $(this).next()//next element: answer of the question

        answer.slideToggle(speed)//opens .a of selected question
        answer.siblings('li.a').slideUp();//closes .a of any open answer

        //Grab img from clicked question
        var img = $(this).children('img');
        //Remove Rotate class from all images except the active
        $('img').not(img).removeClass('rotate');
        //toggle rotate class
        img.toggleClass('rotate');



    });//End on click

});
