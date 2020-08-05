import React from "react";
const api = {
  key: "fad730dcd25938edbcda2b2948a5fef5",
  baseUrl: "https://api.openweathermap.org/data/2.5/",
};
function App() {
  const dateBuild = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}  ${date}  ${month}  ${year}`;
  };
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="  Search..." />
        </div>
        <div className="location-box">
          <div className="location">
            NewYork City, US
            <div className="date">{dateBuild(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">15 Celsius</div>
            <div className="weather">Sunny</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
