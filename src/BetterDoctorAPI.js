export class BetterDoctorAPI{
  getSearches(name, symptom, perPage) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      // hardcode in PDX OR... do GeocoderAPI if you have time
      // why is this rendering as XML?  let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${symptom}&location=or-portland&sort=best-match-asc&skip=0&limit=${perPage}&user_key=${process.env.exports.apiKey}`;
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${symptom}&location=or-portland&sort=distance-asc&skip=0&limit=${perPage}&user_key=${process.env.exports.apiKey}`;
      // `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${symptom}&location=${location}&sort=best-match-asc&skip=0&limit=${perPage}&user_key=${process.env.API_KEY}`; if using geocoder
      console.log(url);
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
