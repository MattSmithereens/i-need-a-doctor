//import {GeocoderAPI} from './geocoder';
import {BetterDoctorAPI} from './BetterDoctorAPI';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#form-control').submit(function(event) {
    event.preventDefault();
    let name = $('#name').val();
    let symptom = $('#symptom').val();
    let perPage = $('#per-page').val();
    $('#name').val("");
    $('#symptom').val("");
    let betterDoctorAPI = new BetterDoctorAPI();
    let newSearch = betterDoctorAPI.getSearches(name, symptom, perPage);
    newSearch.then(function(response) {
      let body = JSON.parse(response);
      console.log(body);
      if ( body.data.length === 0) {
        $("#result").append("No results found for that search.");
      } else {

        for (let i = 0; i < body.data.length; i++) {
          $('#result').html(
            '<p>${body.data[i].profile.first_name} ${body.data[i].profile.last_name}</p> this is the body rendering'

          );
        }
      }

    }, function (error) {
      $('.showErrors').text('error: ${error.message}');






    });
  });
});
