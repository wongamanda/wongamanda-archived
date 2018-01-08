// var titleArray = ['a librarian', 'aspiring data scientist', 'lady-musician enthusiast'];
// var titleArrayLength = titleArray.length;
// var titleA = $('.epithet');

// function rotate(i){
//     var animationIn = 'animated fadeIn';
//     var animationOut = 'animated fadeOut';
//     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

//     if (i == titleArrayLength){i=0;}
    
//     $('epithet').text(titleArray[i]).addClass(animationIn).one(animationEnd, function(){
//         $(this).removeClass(animationIn);
//     });

//     setTimeout(function() {
//         rotate(i+1);
//     })
// }


function add_remove(){
    var animationIn = 'animated fadeIn';
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    $('#greeting').addClass(animationIn).one(animationEnd, function(){
        $('#greeting').removeClass(animationIn);
        });
    };

$(document).ready(function() {
    add_remove();
    $('#greeting').on('click', add_remove);
    $(".flip_card").flip({trigger: 'hover'});
});