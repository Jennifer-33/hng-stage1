document.addEventListener("DOMContentLoaded", () => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDay = days[new Date().getDay()];
    document.getElementById("dayoftheweek").textContent = currentDay;
  
    const utcTime = new Date().getTime();
    document.getElementById("utctime").textContent = utcTime + " ms";
  });