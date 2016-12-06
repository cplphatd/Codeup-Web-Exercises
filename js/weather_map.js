/**
 * Created by David on 12/5/16.
 */
"use strict";
(function () {

    var weatherRequest;         //Holds weather info from ajax .get request (response)

    var pageContents = [];      //Array that holds string of html to post to page

    //Set map options with user lat/long from user inputted address
    var userLat;
    var userLng;
    var mapOptions = {
        zoom: 14,
        center: {
            lat: userLat,
            lng: userLng
        }
    };

    var map;        //Will hold the map

    //Declare and initialize geocoder
    var geocoder = new  google.maps.Geocoder();

    //Gets current time and stores in variable
    var currentTime = new Date().getTime();

    var threeDayArray = [];     //Array that holds the three dates

    //Takes a starting time and creates three days
    var generateThreeDates = function (startTime) {
        var date;
        var convertedDate;
        for(var i = 0; i <= 2; i += 1) {
            switch (i) {
                case 0 :
                    date = new Date(startTime);
                    convertedDate = moment(date).format("dddd DD MMM YYYY");
                    convertedDate.toString();
                    threeDayArray.push(convertedDate);
                    break;
                case 1 :
                    date = new Date(startTime);
                    convertedDate = moment(date).add(1, "days").format("dddd DD MMM YYYY");
                    convertedDate.toString();
                    threeDayArray.push(convertedDate);
                    break;
                case 2 :
                    date = new Date(startTime);
                    convertedDate = moment(date).add(2, "days").format("dddd DD MMM YYYY");
                    convertedDate.toString();
                    threeDayArray.push(convertedDate);
                    break;
                default:
                    console.log("error");
            }
        }
    };

    generateThreeDates(currentTime);

    //Clears address field
    var clearAddress = function () {
        $("#userLocation").val("");
    };

    //Sends ajax .get request and returns object of info
    var getWeatherInfo = function () {
        return $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
            APPID: "e8f4c94a52cb7419ca9257f022da00fc",
            lat: userLat,
            lon: userLng,
            units: "imperial",
            cnt: "3"
        });
    };

    //Generates marker at current position
    var marker;     //Will hold the new marker
    var generateMarker = function (lat, lng) {
        marker = new google.maps.Marker ({
            position: {
                lat: lat,
                lng: lng
            },
            map: map,
            draggable: true
        });
    };

    //Write current weather conditions to html
    var postWeather = function (request) {
        request.done(function (weatherInfo) {
            pageContents = [];
            $("#location").html("<h2>" + weatherInfo.city.name + "'s Three Day Forecast</h2>");
            for (var i = 0; i <= threeDayArray.length - 1; i += 1) {
                pageContents +=
                    "<div class='box'><h4>" + threeDayArray[i] + "</h4>"
                    + "<h2>" + Math.round(weatherInfo.list[i].temp.max) + "/" + Math.round(weatherInfo.list[i].temp.min) + "°</h2>"
                    + "<div><img src='http://openweathermap.org/img/w/" + weatherInfo.list[i].weather[0].icon +".png'></div>"
                    + "<h4>" + weatherInfo.list[i].weather[0].main + ": " + weatherInfo.list[i].weather[0].description + "</h4>"
                    + "<h4>Humidity: " + weatherInfo.list[i].humidity + "%</h4>"
                    + "<h4>Wind Speed: " + weatherInfo.list[i].speed + "mph</h4>"
                    + "<h4>Pressure: " + weatherInfo.list[i].pressure + "mb</h4>"
                    + "</div>";
            }
            $("#weather").html(pageContents);
            clearAddress();
        });

        request.fail(function () {
            console.log("Failure");
        });

        request.always(function () {
            console.log("Complete");
        });
    };

    //Uses geocoder to center map and extract lat/long from address
    var getLatLng = function () {
        var address = $("#userLocation").val();
        geocoder.geocode({"address": address}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {

                //Render the map
                map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
                map.setCenter(results[0].geometry.location);

                //Assign lat/lng to user variables
                userLat = results[0].geometry.location.lat();
                userLng = results[0].geometry.location.lng();

                generateMarker(userLat, userLng);

                //Create drag event to grab coordinates from marker and pass into getLatLng
                google.maps.event.addListener(marker, "dragend", getMarkerLocation);

                //Call getWeatherInfo by assigning to weatherInfo (any time weatherInfo is passed into a function, an ajax request is sent)
                weatherRequest = getWeatherInfo();

                //Call postWeather to populate page
                postWeather(weatherRequest);
            } else {
                alert("Geocoding was not successful - STATUS: " + status);
            }
        });
    };

    //Gets lat/long from marker and sends ajax request for new location
    var getMarkerLocation = function (event) {
        userLat = event.latLng.lat();
        userLng = event.latLng.lng();
        weatherRequest = getWeatherInfo();
        postWeather(weatherRequest);
    };

    //Create click event to grab user address and pass into getLatLng
    $("#search").click(function () {
        getLatLng();
    });

})();
