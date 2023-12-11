$(document).ready(function(){

    const TOGGLE_SHOW = "Show Text";

    const paragraphElement = $("#ptext");

    $(".kasapa").on("click", function(){

    });

    $(".kasapa").click(function(){
        // const buttonText = $(this).text();
        // if (buttonText === TOGGLE_SHOW) {
        //     paragraphElement.show(1000);
        //     $(this).text("Hide Text");
        // } else {
        //     paragraphElement.hide(1000);
        //     $(this).text(TOGGLE_SHOW);
        // }

        // $("#div1").fadeIn();
        // $("#div2").fadeIn("slow");
        // $("#div3").fadeIn(3000);
        const img = $("img");
        function blurImage() {
            img.css("filter", "blur(5px)");
        }
        // img.fadeIn(3000, blurImage);
        // img.slideDown(2000, blurImage);
        $('section').animate({
                    left: '220px',
                    //opacity: '0.5',
                    fontSize: '+=35px'},
                    //height: '+=150px'}, 
                    9000)

        function setBgImage(){
            $('section').css("background-image", "url(music.jpg)");
        }

    });

    $('.stop-anim').click(function(){
        $('section').stop()
    })
    // $("h1:last").hover(function() {
    //     $(this).css("color", "red");
    // }, function() {
    //     $(this).css("color", "#000");
    // });



});