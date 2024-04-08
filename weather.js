const API_KEY = '1211b722d9c95cf25475569dfbe81130'

// grabs the location (city/country) from the API
const getLocation = async () => {
    // Grabs the input from the user
    var userInput = document.getElementById("input").value
    // fetches the api passing in the city the user passes in
    const location = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${API_KEY}`);
    // jsonifys the data
    const lData = await location.json();
    // grabs the city
    const city = lData["name"];
    // grabs the country
    const country = lData["sys"]["country"];
    // puts the details in this id
    document.getElementById('locationtxt').textContent = `${city} | ${country}`;
}

// grabs the daily high temp from the API
const getHigh = async () => {
    // Grabs the input from the user
    var userInput = document.getElementById("input").value
    // fetches the api passing in the city the user passes in
    const location = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${API_KEY}`);
    // jsonifys the data
    const lData = await location.json();

    // grabs the coordinates (latitude/longitude)
    const lat = lData["coord"]["lat"];
    const lon = lData["coord"]["lon"];

    // calls the weather api passing in the coordinates associated with the user input
    const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    // jsonifys the data
    const wData = await weather.json();

    // grabs the temp in C and converts it to F
    const high = wData["main"]["temp_max"];
    const high_temp = ((high - 273.15) * 9 / 5 + 32).toFixed(0);

    // puts the details in this id
    document.getElementById('hightxt').textContent = `${high_temp}°F`;

}

// grabs the daily low temp from the API
const getLow = async () => {
    // Grabs the input from the user
    var userInput = document.getElementById("input").value;
    // fetches the api passing in the city the user passes in
    const location = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${API_KEY}`);
    // jsonifys the data
    const lData = await location.json();

    // grabs the coordinates (latitude/longitude)
    const lat = lData["coord"]["lat"];
    const lon = lData["coord"]["lon"];

    // calls the weather api passing in the coordinates associated with the user input
    const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    // jsonifys the data
    const wData = await weather.json();

    // grabs the temp in C and converts it to F
    const low = wData["main"]["temp_min"];
    const low_temp = ((low - 273.15) * 9 / 5 + 32).toFixed(0);

    // puts the details in this id
    document.getElementById('lowtxt').textContent = `${low_temp}°F`;
}

// grabs the forecast from the API
const getForecast = async () => {
    // Grabs the input from the user
    var userInput = document.getElementById("input").value;
    // fetches the api passing in the city the user passes in
    const location = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${API_KEY}`);
    // jsonifys the data
    const lData = await location.json();

    // grabs the coordinates (latitude/longitude)
    const lat = lData["coord"]["lat"];
    const lon = lData["coord"]["lon"];

    // calls the weather api passing in the coordinates associated with the user input
    const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    // jsonifys the data
    const wData = await weather.json();
    // grabs the forecast from the data
    const forecast = wData["weather"][0]["main"];
    // puts the details in this id
    document.getElementById('forecasttxt').textContent = `${forecast}`;
}

// grabs the humidity from the API
const getHumidity = async () => {
    // Grabs the input from the user
    var userInput = document.getElementById("input").value;
    // fetches the api passing in the city the user passes in
    const location = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${API_KEY}`);
    // jsonifys the data
    const lData = await location.json();

    // grabs the coordinates (latitude/longitude)
    const lat = lData["coord"]["lat"];
    const lon = lData["coord"]["lon"];

    // calls the weather api passing in the coordinates associated with the user input
    const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    // jsonifys the data
    const wData = await weather.json();
    // grabs the humidity from the data
    const humidity = wData["main"]["humidity"];
    // puts the details in this id
    document.getElementById('humidtxt').textContent = `${humidity}%`;
    //empties the search bar
    var userInput = document.getElementById("input").value = '';
}