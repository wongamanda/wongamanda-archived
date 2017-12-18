const littleMessage = document.getElementById("iconBBY");

function showElem(){
    littleMessage.display = 'block';
    hideElem();
}

function hideElem(){
   littleMessage.display = 'none';
}

var slideIndex = 1;
showSlide(slideIndex);

function changeSlide(n){
    showSlide(slideIndex += n);
}

function currentSlide(n){
    showSlide(slideIndex=n);
}

function showSlide(n){
    var i;
    var x = document.getElementsByClassName("slides");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

function automaticSlide(){
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1;
    }
    x[slideIndex-1].style.display = "block";
    setTimeout(automaticSlide, 2000); // Change image every 2 seconds
}


function initMap(){
//     var home = favoritePlaces[0];
    var mapDiv = document.getElementById("map");
    var map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 40.753, lng: -73.997}, 
        zoom: 13
        });
    placeMarker(map);
    }

function placeMarker(map){
    var favoritePlaces = [
    ["NYC Home", 40.753, -73.997,1],
    ["Whitney", 40.739551, -74.009063,1],
    ["Dia: Chelsea", 40.748005, -74.006842],
    ["Strand", 40.733104, -73.990726]
    ];

    var lengthPlace = favoritePlaces.length;
    for (var i = 0; i < lengthPlace; i++){
        var place = favoritePlaces[i];
        var marker = new google.maps.Marker({
            position: {lat: place[1], lng: place[2]},
            map: map,
            title: place[0],
            zIndex: place[3]});
            
        var infowindow = new google.maps.InfoWindow({
            content: place[0]
            });
        }
        
    }

google.maps.event.addListener(marker, 'click', function(){
            infowindow.open(map, marker)
        });

google.maps.event.addDomListener(window, 'load', initialize);

