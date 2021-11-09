import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
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
    "December"
  ];
  let currentWeekDay = days[props.date.getDay()];
  let currentDate = props.date.getDate();
  let currentMonth = months[props.date.getMonth()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {currentWeekDay}, {currentDate} {currentMonth} {hours}:{minutes}
    </div>
  );
}