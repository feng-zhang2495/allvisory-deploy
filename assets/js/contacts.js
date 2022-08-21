const http = require("https");

const options = {
	"method": "GET",
	"hostname": "user-generator-and-random-profiles.p.rapidapi.com",
	"port": null,
	"path": "/",
	"headers": {
		"X-RapidAPI-Key": "dce426f38fmsha3bfe84515ac660p109d9djsn2720dafab401",
		"X-RapidAPI-Host": "user-generator-and-random-profiles.p.rapidapi.com",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(JSON.parse(body));
	});
});

req.end();