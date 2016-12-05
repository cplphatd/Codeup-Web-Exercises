/**
 * Created by David on 12/5/16.
 */
"use strict";
(function () {

    //Holds weather info from ajax .get request
    var weatherInfo;

    //Array that holds string of html to post to page
    var pageContents = [];

    //Sends ajax .get request and returns object of info
    var getWeatherInfo = function () {
        return $.get("http://api.openweathermap.org/data/2.5/weather", {
            APPID: "e8f4c94a52cb7419ca9257f022da00fc",
            q: "San Antonio",
            units: "imperial"
        });
    };

    //Call getWeatherInfo by assigning to weatherInfo (any time weatherInfo is passed into a function, an ajax request is sent)
    weatherInfo = getWeatherInfo();

    //Write current weather conditions to html
    var postWeather = function (currentWeather) {
        console.log(currentWeather);
        currentWeather.done(function (object) {
            console.log(object);
            pageContents +=
                "<div>Location: " + object.name + "</div>"
                + "<div>Current conditions: " + object.weather[0].main +" </div>"
                + "<div>Current temperature: " + object.main.temp +"F</div>";
            $("#weather").html(pageContents);
        });
    };

    //Call postWeather to populate page
    postWeather(weatherInfo);
})();
