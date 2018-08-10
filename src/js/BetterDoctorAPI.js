//const apiKey = require('./../.env').apiKey;

export class BetterDoctorAPI{
  //getLatLong(zip) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      // hardcode in PDX OR
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${symptom}&location=${location}&sort=best-match-asc&skip=0&limit=${perPage}&user_key=${apiKey}`;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}
