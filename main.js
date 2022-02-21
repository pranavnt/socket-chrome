let axiosScript = document.createElement('script')
axiosScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/axios/0.26.0/axios.min.js'

const lib = "semver"

axiosScript.onload = () => {
	const data;

	axios.get(`https://socket.dev/api/npm/package-info/score?name=${semver}`) 
		.then(response => {		
			data = response.data;
		})
		.catch(e =>  {
			console.log(e)
		}) 
	console.log(data)
}