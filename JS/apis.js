// ! UNSPLASH API
$(document).ready(function () {
  axios({
    method: "get",
    url: "https://api.unsplash.com/photos?query=cheddargorge&client_id=wvvnW-mXyeZ3UAwrUzFFAdccJfDHmADVXogFpGHltCM",
  }).then((response) => {
    console.log(response.data[9].urls.regular);

    if (response.stats == 200) {
      response.data.forEach((url) => {
        $("body").append(`<img src="${response.data[9].urls.regular}"/>`);
      });
    } else {
      console.log("Please try again later");
    }
  });
});

// ! OPENWEATHER API
$(document).ready(function () {
  axios({
    method: "get",
    url: "http://api.openweathermap.org/data/2.5/weather?q=Cheddar&units=metric&APPID=c2def44db2dede1f11a81c3f599e6c9b",
  }).then((response) => {
    console.log(response.data.main.temp);
    console.log(response.data.weather.description);
    console.log(response.data.wind.speed);
    console.log(response.data.name);

    if (response.stats == 200) {
      response.data.forEach((url) => {
        $("header").append(`<p> ${response.data.main.temp} </p>`);
        $("header").append(`<p> ${response.data.weather.description} </p>`);
        $("header").append(`<p> ${response.data.wind.speed} </p>`);
        $("header").append(`<p> ${response.data.city.name} </p>`);
      });
    } else {
      console.log("Please try again later");
    }
  });
});

// ! QUOTES.REST
$(document).ready(function () {
  axios({
    method: "get",
    url: "http://quotes.rest/qod.json?category=inspire",
  }).then((response) => {
    console.log(response.data.contents.quotes.quote);
    console.log(response.data.contents.quotes.author);

    if (response.stats == 200) {
      response.data.forEach((url) => {
        $("header").append(`<p> ${response.data.contents.quotes.quote} </p>`);
      });
    } else {
      console.log("Please try again later");
    }
  });
});

// ! MOMENT - TIME
console.log(moment().format("LTS"));


