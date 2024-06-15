const MonthNameEl = document.getElementById("month-name");
const DayNameEl = document.getElementById("day-name");
const DayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();
const month = date.getMonth();

MonthNameEl.innerText = date.toLocaleString("en", {
    month: "long"
});

DayNameEl.innerText = date.toLocaleString("en", {
    weekday: "long"
});

DayNumEl.innerText = date.getDate();

yearEl.innerText = date.getFullYear();
