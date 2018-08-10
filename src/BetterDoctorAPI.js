export class BetterDoctorAPI{
  getLatLong(zip) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      // hardcode in PDX OR
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=headache&location=or-portland&user_location=45.5122%2C-122.6587&sort=distance-asc&skip=0&limit=10&user_key=${process.env.apiKey}`;

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
