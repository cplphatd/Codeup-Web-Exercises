/**
 * Created by David on 12/5/16.
 */
"use strict";
(function () {

    //Holds weather info from ajax .get request (response)
    var weatherRequest;

    //Array that holds string of html to post to page
    var pageContents = [];

    //Sends ajax .get request and returns object of info
    var getWeatherInfo = function () {
        return $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
            APPID: "e8f4c94a52cb7419ca9257f022da00fc",
            q: "San Antonio",
            units: "imperial",
            cnt: "3"
        });
    };

    //Call getWeatherInfo by assigning to weatherInfo (any time weatherInfo is passed into a function, an ajax request is sent)
    weatherRequest = getWeatherInfo();

    //Write current weather conditions to html
    var postWeather = function (request) {
        request.done(function (weatherInfo) {
            $("#location").html("<h2>" + weatherInfo.city.name + "'s Three Day Forecast</h2>");
            console.log(weatherInfo);
            for (var i = 0; i <= 2; i += 1) {
                pageContents +=
                    "<div class='box'><h5>High/Low</h5>"
                    + "<h3>" + weatherInfo.list[i].temp.max + "/" + weatherInfo.list[i].temp.min + "°</h3>"
                    + "<div><img src='http://openweathermap.org/img/w/" + weatherInfo.list[i].weather[0].icon +".png'></div>"
                    + "<h5>" + weatherInfo.list[i].weather[0].main + ": " + weatherInfo.list[i].weather[0].description + "</h5>"
                    + "<h5>Humidity: " + weatherInfo.list[i].humidity + "%</h5>"
                    + "<h5>Wind Speed: " + weatherInfo.list[i].speed + "mph</h5>"
                    + "<h5>Pressure: " + weatherInfo.list[i].pressure + "mb</h5>"
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

    //Call postWeather to populate page
    postWeather(weatherRequest);
})();
