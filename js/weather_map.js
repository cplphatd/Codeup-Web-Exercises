/**
 * Created by David on 12/5/16.
 */
"use strict";
(function () {

    //Holds weather info from ajax .get request (response)
    var weatherRequest;

    //Array that holds string of html to post to page
    var pageContents = [];

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

    //Declare and initialize geocoder
    var geocoder = new  google.maps.Geocoder();

    //Gets current time and stores in variable
    var currentTime = new Date().getTime();

    //Array that holds the three dates
    var threeDayArray = [];

    //Takes a starting time and creates three days
    var generateThreeDates = function (startTime) {
        var date;
        for(var i = 0; i <= 2; i += 1) {
            switch (i) {
                case 0 :
                    date = new Date(startTime);
                    date.toString();
                    threeDayArray.push(date);
                    break;
                case 1 :
                    date = new Date(startTime + 8.64e+7);
                    date.toString();
                    threeDayArray.push(date);
                    break;
                case 2 :
                    date = new Date(startTime + (8.64e+7 * 2));
                    date.toString();
                    threeDayArray.push(date);
                    break;
                default:
                    console.log("error");
            }
        }
    };

    //Call date function
    generateThreeDates(currentTime);

    //Sends ajax .get request and returns object of info
    var getWeatherInfo = function () {
        console.log("lat@getWeatherInfo: " + userLat);
        console.log("lng@getWeatherInfo: " + userLng);
        return $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
            APPID: "e8f4c94a52cb7419ca9257f022da00fc",
            lat: userLat,
            lon: userLng,
            units: "imperial",
            cnt: "3"
        });
    };

    //Write current weather conditions to html
    var postWeather = function (request) {
        request.done(function (weatherInfo) {
            pageContents = [];
            $("#location").html("<h2>" + weatherInfo.city.name + "'s Three Day Forecast</h2>");
            console.log(weatherInfo);
            for (var i = 0; i <= threeDayArray.length - 1; i += 1) {
                pageContents +=
                    "<div class='box'><h5>" + threeDayArray[i] + "</h5>"
                    + "<h2>" + Math.round(weatherInfo.list[i].temp.max) + "/" + Math.round(weatherInfo.list[i].temp.min) + "°</h2>"
                    + "<div><img src='http://openweathermap.org/img/w/" + weatherInfo.list[i].weather[0].icon +".png'></div>"
                    + "<h4>" + weatherInfo.list[i].weather[0].main + ": " + weatherInfo.list[i].weather[0].description + "</h4>"
                    + "<h4>Humidity: " + weatherInfo.list[i].humidity + "%</h4>"
                    + "<h4>Wind Speed: " + weatherInfo.list[i].speed + "mph</h4>"
                    + "<h4>Pressure: " + weatherInfo.list[i].pressure + "mb</h4>"
                    + "</div>";
            }
            $("#weather").html(pageContents);
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
                var renderMap = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
                renderMap.setCenter(results[0].geometry.location);

                //Assign lat/lng to user variables
                userLat = results[0].geometry.location.lat();
                userLng = results[0].geometry.location.lng();

                //Call getWeatherInfo by assigning to weatherInfo (any time weatherInfo is passed into a function, an ajax request is sent)
                weatherRequest = getWeatherInfo();

                //Call postWeather to populate page
                postWeather(weatherRequest);
            } else {
                alert("Geocoding was not successful - STATUS: " + status);
            }
        });
    };

    //Create click event to grab user address and pass into getLatLng
    $("#search").click(function () {
        getLatLng();
    });


})();
