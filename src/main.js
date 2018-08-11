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
      if ( body.data.length === 0) {
      $("#result").append("No results found for that search.");
      } else {

        for (let i = 0; i < body.data.length; i++) {
          $('#result').append(   '<h2>' + body.data[i].profile.first_name +
                                ' ' + body.data[i].profile.last_name + '</h2>' +
                                '<li>' + body.data[i].practices[0].visit_address.street + '</li>' +
                                '<li>' + body.data[i].practices[0].visit_address.city + ', ' + body.data[i].practices[0].visit_address.state + " " + body.data[i].practices[0].visit_address.zip + '</li>' +
                                '<li>' + body.data[i].specialties[0].name + '</li>' +
                                '<li>' + '<b>' + 'Phone # : ' + '</b>' + body.data[i].practices[0].phones[0].number + "</li>"
          );
          if (body.data[i].practices[0].website === undefined) {
            $('#result').append('<li>' + "No website listed" + '</li>');
          } else {
            $('#result').append('<li>' + body.data[i].practices[0].website + '</li>');
          }

          if (body.data[i].practices[0].accepts_new_patients === true) {
            $('#result').append('<li>' + "Accepting new patients." + '</li>');
          } else if (body.data[i].practices[0].accepts_new_patients === false) {
            $('#result').append('<li>' + "Currently not accepting new patients." + '</li>');
          } else {
            console.log("reached");
          }
        }
      }

    }, function (error) {
      $('.showErrors').text('There was an error: ${error.message}');






    });
  });
});
