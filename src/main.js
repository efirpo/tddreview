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
    $('#age-in-days').html(ages.ageInDays);
    $('#age-merc').html(ages.mercury);
    $('age-ven').html(ages.venus);
    $('#age-mars').html(ages.mars);
    $('#age-jup').html(ages.jupiter);
    $('life-merc').html(ages.mercExpect);
    $('#life-ven').html(ages.venExpect);
    $('#life-mars').html(ages.marsExpect);
    $('#life-jup').html(ages.jupExpect);
    $('#results').fadeIn(100).addClass('animated fadeInRight');
  });

});