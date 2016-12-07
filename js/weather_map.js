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

    var map;    //Will hold the map

    //Declare and initialize geocoder
    var geocoder = new  google.maps.Geocoder();

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

    //Change first child's background
    var changeFirstChildBackground = function (weatherCode) {
        switch (true) {
            case (weatherCode >= 200 && weatherCode <= 299) :
                $(".box:nth-child(1)").addClass("stormy");
                break;
            case (weatherCode >= 500 && weatherCode <= 599) :
                $(".box:nth-child(1)").addClass("rainy");
                break;
            case (weatherCode >= 600 && weatherCode <= 699) :
                $(".box:nth-child(1)").addClass("snowy");
                break;
            case (weatherCode == 800) :
                $(".box:nth-child(1)").addClass("sunny");
                break;
            case (weatherCode >= 801 && weatherCode <= 899) :
                $(".box:nth-child(1)").addClass("cloudy");
                break;
            case (weatherCode >= 900 && weatherCode <= 906) :
                $(".box:nth-child(1)").addClass("extreme");
                break;
            default:
                console.log("Error with weather background")
        }
    };

    //Change second child's background
    var changeSecondChildBackground = function (weatherCode) {
        switch (true) {
            case (weatherCode >= 200 && weatherCode <= 299) :
                $(".box:nth-child(2)").addClass("stormy");
                break;
            case (weatherCode >= 500 && weatherCode <= 599) :
                $(".box:nth-child(2)").addClass("rainy");
                break;
            case (weatherCode >= 600 && weatherCode <= 699) :
                $(".box:nth-child(2)").addClass("snowy");
                break;
            case (weatherCode == 800) :
                $(".box:nth-child(2)").addClass("sunny");
                break;
            case (weatherCode >= 801 && weatherCode <= 899) :
                $(".box:nth-child(2)").addClass("cloudy");
                break;
            case (weatherCode >= 900 && weatherCode <= 906) :
                $(".box:nth-child(2)").addClass("extreme");
                break;
            default:
                console.log("Error with weather background")
        }
    };

    //Change third child's background
    var changeThirdChildBackground = function (weatherCode) {
        switch (true) {
            case (weatherCode >= 200 && weatherCode <= 299) :
                $(".box:nth-child(3)").addClass("stormy");
                break;
            case (weatherCode >= 500 && weatherCode <= 599) :
                $(".box:nth-child(3)").addClass("rainy");
                break;
            case (weatherCode >= 600 && weatherCode <= 699) :
                $(".box:nth-child(3)").addClass("snowy");
                break;
            case (weatherCode == 800) :
                $(".box:nth-child(3)").addClass("sunny");
                break;
            case (weatherCode >= 801 && weatherCode <= 899) :
                $(".box:nth-child(3)").addClass("cloudy");
                break;
            case (weatherCode >= 900 && weatherCode <= 906) :
                $(".box:nth-child(3)").addClass("extreme");
                break;
            default:
                console.log("Error with weather background")
        }
    };

    //Determines which child to target then calls the appropriate function to change the background
    var determineChild = function (weatherArray) {
        weatherArray.forEach (function (id, index) {
            switch (index) {
                case 0 :
                    changeFirstChildBackground(id.weather[0].id);
                    break;
                case 1 :
                    changeSecondChildBackground(id.weather[0].id);
                    break;
                case 2 :
                    changeThirdChildBackground(id.weather[0].id);
                    break;
                default:
                    console.log("Error with determining child");
            }
        });
    };

    //Write current weather conditions to html
    var postWeather = function (request) {
        request.done(function (weatherInfo) {
            pageContents = [];
            console.log(weatherInfo);
            var date;       //holds conversion of unix date from weatherInfo
            $("#location").html("<h2>Three Day Forecast for " + weatherInfo.city.name + "</h2>");
            for (var i = 0; i <= weatherInfo.list.length - 1; i += 1) {
                date = moment.unix(weatherInfo.list[i].dt);
                pageContents +=
                    "<div class='box'><h4>" + moment(date).format("dddd DD MMM YYYY") + "</h4>"
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

            determineChild(weatherInfo.list);
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

    //Initialize autocomplete functionality
    var autocomplete = new google.maps.places.Autocomplete (document.getElementById("userLocation"), {
        types: ['geocode']
    });

    //Create click event to grab user address and pass into getLatLng
    $("#search").click(function () {
        getLatLng();
    });

})();
