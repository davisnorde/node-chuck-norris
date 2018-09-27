const https = require('https')

const request = https.get('https://api.chucknorris.io/jokes/random', response => {
	let body = ''
	response.on('data', data => {
		body += data.toString()
	})
	response.on('end', () => {
		const joke = JSON.parse(body)
		console.log(joke.value)
	})
})