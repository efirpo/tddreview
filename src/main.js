// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { solarAgeCalculator } from './galactic';

$(document).ready(function () {
  $("#age-form").submit(function (event) {
    event.preventDefault;
    let ages = new solarAgeCalculator();
    ages.splitDate($('#bday-input').val());
    ages.calculateAgeInDays();
    ages.mercuryAge();
    ages.venusAge();
    ages.marsAge();
    ages.jupiterAge();
    ages.calculateLifeExpectancy();

  });
});