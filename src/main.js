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
          $('#result').append(`<h4>${body.data[i].profile.first_name} ${body.data[i].profile.last_name}</h4>
                              <li>${body.data[i].practices[0].visit_address.street}</li>
                              <li>${body.data[i].practices[0].visit_address.city}, ${body.data[i].practices[0].visit_address.state} ${body.data[i].practices[0].visit_address.zip}</li>
                              <li>${body.data[i].specialties[0].name}</li>
                              <li>${body.data[i].practices[0].phones[0].number}</li>`
          );
          if (body.data[i].practices[0].website === undefined) {
            $('#result').append('');
          } else {
            $('#result').append(`<li><a href="${body.data[i].practices[0].website}" target="_blank">${body.data[i].practices[0].website}</a></li>`);
          }

          if (body.data[i].practices[0].accepts_new_patients === true) {
            $('#result').append(`<li>Accepting new patients.</li><hr><br>`);
          } else if (body.data[i].practices[0].accepts_new_patients === false) {
            $('#result').append(`<li>Currently not accepting new patients.</li><hr><br>`);
          } else {
            $('#result').append(`<li>Contact to see if Dr.${body.data[i].profile.first_name} ${body.data[i].profile.last_name} is accepting new patients.</li><hr><br>`);
          }
        }
      }

    }, function (error) {
      $('.showErrors').text('error: ${error.message}');
    });
  });
});
