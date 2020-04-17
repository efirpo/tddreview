// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";

$(document).ready(function () {
  $("#age-form").submit(function (event) {
    event.preventDefault;
    console.log($("#bday-input").val())
  })
})