const request = require('request');

const options = {
  method: 'GET',
  url: 'https://matchilling-tronald-dump-v1.p.rapidapi.com/random/quote',
  headers: {
    accept: 'application/hal+json',
    'x-rapidapi-key': '73c8f7217dmsh0f16014a559a2bep118c18jsna45cbb055155',
    'x-rapidapi-host': 'matchilling-tronald-dump-v1.p.rapidapi.com',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

    let BodyArray = body.split(",")
    let Value = BodyArray[5].slice(8)
    let Tag = BodyArray[3].slice(7)
    
});