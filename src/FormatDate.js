import React from "react";
import "./Weather.css";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "Mayy",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentWeekDay = days[props.date.getDay()];
  const currentDate = props.date.getDate();
  const currentMonth = months[props.date.getMonth()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  const timezone = props.date.timezone;
  console.log(timezone);

  return (
    <div className="date">
      {currentWeekDay}, {currentDate} {currentMonth} {hours}:{minutes}
    </div>
  );
}
