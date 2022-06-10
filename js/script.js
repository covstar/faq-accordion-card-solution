$(document).ready(function(){
    // first container
    $('.first-container').click(function(){
        $('.first').slideToggle(500);

        // rotate icon when pressed
        $('.ic1').toggleClass("rotate");

        // increase fontWeight when clicked
        $('.para1 p').toggleClass("clicked");

        // remove the added class onthers when clicked
        $('.second, .third, .fouth, .fifth').slideUp(function(){
            $('.para2 p, .para3 p, .para4 p, .para5 p').removeClass("clicked");

            $('.ic2, .ic3, .ic4, .ic5').removeClass("rotate");
        });
    });

    // second container
    $('.second-container').click(function(){
        $('.second').slideToggle(500);

 // rotate icon when pressed
        $('.ic2').toggleClass("rotate");

// increase fontWeight when clicked
        $('.para2 p').toggleClass("clicked");

// remove the added class onthers when clicked
        $('.first, .third, .fouth, .fifth').slideUp(function(){
            $('.para1 p, .para3 p, .para4 p, .para5 p').removeClass("clicked");

            $('.ic1, .ic3, .ic4, .ic5').removeClass("rotate");
        });
    });

    // thirdcontainer
    $('.third-container').click(function(){
        $('.third').slideToggle(500);

 // rotate icon when pressed
        $('.ic3').toggleClass("rotate");

// increase fontWeight when clicked
        $('.para3 p').toggleClass("clicked");

// remove the added class onthers when clicked
        $('.second, .first, .fouth, .fifth').slideUp(function(){
            $('.para2 p, .para1 p, .para4 p, .para5 p').removeClass("clicked");

            $('.ic2, .ic1, .ic4, .ic5').removeClass("rotate");
        });
    });

    // fouth container
    $('.fouth-container').click(function(){
        $('.fouth').slideToggle(500);

 // rotate icon when pressed
        $('.ic4').toggleClass("rotate");

// increase fontWeight when clicked
        $('.para4 p').toggleClass("clicked");

// remove the added class onthers when clicked
        $('.second, .third, .first, .fifth').slideUp(function(){
            $('.para2 p, .para3 p, .para1 p, .para5 p').removeClass("clicked");

            $('.ic2, .ic3, .ic1, .ic5').removeClass("rotate");
        });
    });

    // fifth container
    $('.fifth-container').click(function(){
        $('.fifth').slideToggle(500);

 // rotate icon when pressed
        $('.ic5').toggleClass("rotate");

// increase fontWeight when clicked
        $('.para5 p').toggleClass("clicked");

        // remove the added class onthers when clicked
        $('.second, .third, .fouth, .first').slideUp(function(){
            $('.para2 p, .para3 p, .para4 p, .para1 p').removeClass("clicked");

            $('.ic2, .ic3, .ic4, .ic1').removeClass("rotate");
        });
    });
})