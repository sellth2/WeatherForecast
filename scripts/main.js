//const axios = require('axios'); ELEMENTLERIN İÇİNİ BOŞALT

const apiURL = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";


const searchBox = document.querySelector(".div-search input");
const searchButton = document.querySelector(".div-search button");
const weatherImg = document.querySelector(".div-weather img");

getTime();
checkWeather("istanbul");
/*BUNU FONKSİYON YAP*/
function getTime() {
    for (i = 0; i < 5; i++) {
        let d = new Date();
        d.setDate(d.getDate() + i);
        document.getElementById("date" + i).innerHTML = d.toLocaleDateString("en-US", { weekday: 'long' });

    }
}
var dateObj = new Date();

const mon = dateObj.toLocaleString('default', { month: 'short' });
var dayMon = dateObj.getDate();
var year = dateObj.getFullYear();
function getDayName(dateStr, locale) {
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });
}

var dateStr = dateObj;
var day = getDayName(dateStr, "en-US");
newdate = day + ", " + dayMon + " " + mon + ", " + year;
document.querySelector(".p-date").innerHTML = newdate;



async function checkWeather(city) {//city i ekle sonra API KEY İ SİL
    const response = await fetch(apiURL + city + '');

    if (response.status == 404) {
        document.querySelector(".div-error").style.display = "block";
        document.querySelector(".div-weather").style.display = "none";
        document.body.style.backgroundImage = "url(images/notfound.jpg)";
        const nodeList = document.querySelectorAll(".day-day");
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].style.display = "none";
        }
        document.querySelector(".err-days").style.display = "block";
    } else {
        var data = await response.json();
        document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1920x1080/?" + city + "')";


        document.querySelector(".city").innerHTML = data.city.name;
        document.querySelector(".temp").innerHTML = Math.round((data.list[0].main.temp) * 10) / 10 + " &#8451";
        document.querySelector(".day-tempt").innerHTML = Math.round((data.list[0].main.temp) * 10) / 10 + " &#8451";
        document.querySelector(".humid").innerHTML = data.list[0].main.humidity + "%";
        document.querySelector(".wind").innerHTML = Math.round((data.list[0].wind.speed) * 10) / 10 + " km/h";
        //console.log(data);/*SİL SONRA*/  
        if (data.list[0].weather[0].main == "Clouds") {
            weatherImg.src = "images/clouds.png";
            document.querySelector(".div-day-img img").src = "images/clouds.png";
            document.querySelector(".div-day-img p").innerHTML = data.list[0].weather[0].description;
        }
        else if (data.list[0].weather[0].main == "Clear") {
            weatherImg.src = "images/clear.png";
            document.querySelector(".div-day-img img").src = "images/clear.png";
            document.querySelector(".div-day-img p").innerHTML = data.list[0].weather[0].description;
        }
        else if (data.list[0].weather[0].main == "Rain") {
            weatherImg.src = "images/rain.png";
            document.querySelector(".div-day-img img").src = "images/rain.png";
            document.querySelector(".div-day-img p").innerHTML = data.list[0].weather[0].description;
        }
        else if (data.list[0].weather[0].main == "Drizzle") {
            weatherImg.src = "images/drizzle.png";
            document.querySelector(".div-day-img img").src = "images/drizzle.png";
            document.querySelector(".div-day-img p").innerHTML = data.list[0].weather[0].description;
        }
        else if (data.list[0].weather[0].main == "Mist") {
            weatherImg.src = "images/mist.png";
            document.querySelector(".div-day-img img").src = "images/mist.png";
            document.querySelector(".div-day-img p").innerHTML = data.list[0].weather[0].description;
        }
        else if (data.list[0].weather[0].main == "Snow") {
            weatherImg.src = "images/snow.png";
            document.querySelector(".div-day-img img").src = "images/snow.png";
            document.querySelector(".div-day-img p").innerHTML = data.list[0].weather[0].description;
        }
        for (i = 1; i < 5; i++) {
            if (data.list[(i * 8)].weather[0].main == "Clouds") {
                document.getElementById("img" + i).src = "images/clouds.png";
                document.getElementById("day-tempt" + i).innerHTML = Math.round((data.list[(i * 8)].main.temp) * 10) / 10 + " &#8451";
                document.getElementById("day-p" + i).innerHTML = data.list[(i * 8)].weather[0].description;
            }
            else if (data.list[(i * 8)].weather[0].main == "Clear") {
                document.getElementById("img" + i).src = "images/clear.png";
                document.getElementById("day-tempt" + i).innerHTML = Math.round((data.list[(i * 8)].main.temp) * 10) / 10 + " &#8451";
                document.getElementById("day-p" + i).innerHTML = data.list[(i * 8)].weather[0].description;
            }
            else if (data.list[(i * 8)].weather[0].main == "Rain") {
                document.getElementById("img" + i).src = "images/rain.png";
                document.getElementById("day-tempt" + i).innerHTML = Math.round((data.list[(i * 8)].main.temp) * 10) / 10 + " &#8451";
                document.getElementById("day-p" + i).innerHTML = data.list[(i * 8)].weather[0].description;
            }
            else if (data.list[(i * 8)].weather[0].main == "Drizzle") {
                document.getElementById("img" + i).src = "images/drizzle.png";
                document.getElementById("day-tempt" + i).innerHTML = Math.round((data.list[(i * 8)].main.temp) * 10) / 10 + " &#8451";
                document.getElementById("day-p" + i).innerHTML = data.list[(i * 8)].weather[0].description;
            }
            else if (data.list[(i * 8)].weather[0].main == "Mist") {
                document.getElementById("img" + i).src = "images/mist.png";
                document.getElementById("day-tempt" + i).innerHTML = Math.round((data.list[(i * 8)].main.temp) * 10) / 10 + " &#8451";
                document.getElementById("day-p" + i).innerHTML = data.list[(i * 8)].weather[0].description;
            }
            else if (data.list[(i * 8)].weather[0].main == "Snow") {
                document.getElementById("img" + i).src = "images/snow.png";
                document.getElementById("day-tempt" + i).innerHTML = Math.round((data.list[(i * 8)].main.temp) * 10) / 10 + " &#8451";
                document.getElementById("day-p" + i).innerHTML = data.list[(i * 8)].weather[0].description;
            }
        }


        

        const nodeList = document.querySelectorAll(".day-day");
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].style.display = "flex";
        }
        document.querySelector(".err-days").style.display = "none";
        document.querySelector(".div-error").style.display = "none";
        document.querySelector(".div-weather").style.display = "block";

    }
}





searchButton.addEventListener("click", () => {
    checkWeather(searchBox.value);
    //showImg(searchBox.value);

})
