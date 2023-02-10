// Initialize Firebase
var config = {
    apiKey: "",
    authDomain: "reservation-site-ga-jsc-es.firebaseapp.com",
    databaseURL: "https://reservation-site-ga-jsc-es.firebaseio.com",
    projectId: "reservation-site-ga-jsc-es",
    storageBucket: "",
    messagingSenderId: "314034772305"
};
firebase.initializeApp(config);

//Unsplash 
var UNSPLASH_API_KEY = '';
var UNSPLASH_API_URL = '';

var database = firebase.database();

var reservationData = {}

$('.reservation-day li').on('click', function(e){
    e.preventDefault();
    reservationData.day = $(this).text();
});

$('.reservations').on('submit', function(e){
    e.preventDefault();
    reservationData.name = $('.reservation-name').val();
    database.ref('reservations').push(reservationData);
});

database.ref('reservations').on('child_added', function (snapshot) {
    
    var reservationList = $('.reservation-list');
    var reservations = snapshot.val();

    var source = $("#reservation-template").html();
    var template = Handlebars.compile(source);
    var reservationTemplate = template(reservations);
    reservationList.append(reservationTemplate);
});

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.8054491, lng: -73.9654415 },
        zoom: 10,
        scrollwheel: false
    });
};

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.8054491, lng: -73.9654415 },
        zoom: 10,
        scrollwheel: false
    });

    var marker = new google.maps.Marker({
        position: { lat: 40.8054491, lng: -73.9654415 },
        map: map,
        title: 'Monks Café'
    });
};

//Unsplash API
$.get(UNSPLASH_API_URL + UNSPLASH_API_KEY, function (data) {
    
    for (i = 0; i < data.results.length; i+=1) {
        //console.log(data.results[i].urls.small);
        var dinerImg = '<img src ="' + data.results[i].urls.small + '" height="267" />';
        $('.diner-photos').append(dinerImg);
    };
    console.log(data.results);
});
