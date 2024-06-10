# Weather Forecast Web Application

This project is a weather forecast web application that displays current weather details and a 5-day weather forecast for a selected city. The application uses the OpenWeatherMap API to fetch weather data and Chart.js to visualize the forecast.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Key](#api-key)
- [Dependencies](#dependencies)
- [Acknowledgments](#acknowledgments)
- [References](#references)
- [License](#license)

## Features

- Displays current weather information (temperature, weather description, humidity, and weather icon).
- Provides a 5-day weather forecast with maximum and minimum temperatures.
- Allows users to search for weather information by city name.
- Predefined buttons for quick weather updates of Delhi, London, and Washington D.C.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/elisedare28/Weather-Website-new.git
    ```

2. Open the `index.html` file in your web browser to run the application.

## Usage

- Enter the name of a city in the search bar and click the "Search" button, or click on one of the predefined buttons (Delhi, London, Washington DC) to fetch and display weather data.
- The current weather details will be displayed on the left of the page.
- The 5-day weather forecast will be shown in a line chart on the right side of the page.

## Project Structure

- index.html: The main HTML file containing the structure of the web application.
- bootstrap.css: The CSS file for styling the web application.
- output.js: The JavaScript file containing the application logic and API interactions

## API Key

This project uses the OpenWeatherMap API. You need to sign up for a free API key at OpenWeatherMap and replace the placeholder API key in the output.js file with your own key:

const apikey = "your-api-key-here";

## Dependencies

- [Chart.js](https://www.chartjs.org/): For creating the weather forecast chart.
- [OpenWeatherMap API](https://openweathermap.org): For fetching weather data.

## Acknowledgments

- [Bootstrap Template used](https://bootswatch.com/morph)
  
## References

- [Chart.js Documentation](https://www.chartjs.org/docs/latest/)
- [OpenWeatherMap 5 Day Forecast API doc](https://openweathermap.org/forecast5)
- [OpenWeatherMap Current Data API doc](https://openweathermap.org/current)

## License

This project is licensed under the MIT License. 
