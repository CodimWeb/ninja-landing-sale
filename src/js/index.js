'use strict'

import $ from 'jquery';
require('jquery-countdown');

//BS4 components
// import bootstrap from 'bootstrap';

//styles
import '../scss/style.scss';




$(document).ready(function(){
  // Set the date we're counting down to
    var countDownDate = new Date("May 20, 2021 14:00:00").getTime();
    console.log(countDownDate);

    // Update the count down every 1 second
    var x = setInterval(function() {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds

      var days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');;
      var hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');;
      var minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');;
      var seconds = String(Math.floor((distance % (1000 * 60)) / 1000));

      // Display the result in the element with id="demo"
      var dd1 = days[0];
      var dd2 = days[1];
      var hh1 = hours[0];
      var hh2 = hours[1];
      var mm1 = minutes[0];
      var mm2 = minutes[1];
      var ss1 = seconds[0];
      var ss2 = seconds[1];
      var html = `
        <div class="clock-panel">
          <div class="clock-item">
                <div class="clock-part">${dd1}</div>
                <div class="clock-part">${dd2}</div>
            </div>
            <div class="clock-text">Дней</div>
        </div> 
        <div class="clock-panel">
            <div class="clock-item">
                <div class="clock-part">${hh1}</div>
                <div class="clock-part">${hh2}</div>
            </div>
            <div class="clock-text">Часов</div>
        </div> 
        <div class="clock-panel">
            <div class="clock-item">
                <div class="clock-part">${mm1}</div>
                <div class="clock-part">${mm2}</div>
            </div>
            <div class="clock-text">Минут</div>
        </div>
      `
      document.getElementById("clock").innerHTML = html;

      // If the count down is finished, write some text
      // if (distance < 0) {
      //   clearInterval(x);
      //   document.getElementById("clock").innerHTML = "EXPIRED";
      // }
    }, 1000);
})

