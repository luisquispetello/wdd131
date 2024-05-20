const calculateWindChill = (temp, wind) => {
  if (temp <= 10 && wind > 4.8) {
    return (
      (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(wind, 0.16) +
        0.3965 * temp * Math.pow(wind, 0.16)
      ).toFixed(2) + " °C"
    );
  } else {
    return "N/A";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const temperature = 10; // °C
  const windSpeed = 5; // km/h
  const windChill = calculateWindChill(temperature, windSpeed);
  document.getElementById("wind-chill").textContent = windChill;
});
