// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { solarAgeCalculator } from './galactic';

$(document).ready(function () {
  $('#age-form').submit(function (event) {
    event.preventDefault;
    let ages = new solarAgeCalculator();
    ages.splitDate($('#bday-input').val());
    ages.calculateAgeInDays();
    ages.mercuryAge();
    ages.venusAge();
    ages.marsAge();
    ages.jupiterAge();
    ages.calculateLifeExpectancy($('#demographic').val());
    if (ages.lifeExpect < 0) {
      $('.age-in-days').append(ages.ageInDays);
      $('.age-merc').append(ages.mercury);
      $('.age-ven').append(ages.venus);
      $('.age-mars').append(ages.mars);
      $('.age-jup').append(ages.jupiter);
      $('.life-merc').append(Math.abs(ages.mercExpect));
      $('.life-ven').append(Math.abs(ages.venExpect));
      $('.life-mars').append(Math.abs(ages.marsExpect));
      $('.life-jup').append(Math.abs(ages.jupExpect));
      $('#elder-results').fadeIn(100).addClass('animated fadeInRight')
    } else {
      $('.age-in-days').append(ages.ageInDays);
      $('.age-merc').append(ages.mercury);
      $('.age-ven').append(ages.venus);
      $('.age-mars').append(ages.mars);
      $('.age-jup').append(ages.jupiter);
      $('.life-merc').append(ages.mercExpect);
      $('.life-ven').append(ages.venExpect);
      $('.life-mars').append(ages.marsExpect);
      $('.life-jup').append(ages.jupExpect);
      $('#results').fadeIn(100).addClass('animated fadeInRight');
      }
  });

});