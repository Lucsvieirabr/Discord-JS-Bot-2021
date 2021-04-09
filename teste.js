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

request(options, async function (error, response, body) {
	if (error) throw new Error(error);

  var queryConvert = async function(queryStrr){
    var queryStr = queryStrr,
      queryArr = queryStr.replace('?','').split('&'),
      queryParams = [];

    for (var q = 0, qArrLength = queryArr.length; q < qArrLength; q++) {
        var qArr = queryArr[q].split('=');
        queryParams[qArr[0]] = qArr[1];
    }

    return queryParams;
}

 let BodyArray = queryConvert(body)
 let Value = BodyArray[6]
 let Tag = BodyArray[4]
 console.log(BodyArray)
    
});