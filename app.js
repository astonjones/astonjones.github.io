const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const port = process.env.PORT || 3000;

//configure app uses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

//get request to url
app.get('/', (req, res) => {
	res.sendFile('index.html');
});

//post route for contact form
app.post('/contact', (req, res) => {

	// Instantiate the SMTP server
	var smtpTrans = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			type: 'OAuth2',
			user: 'astonbradleyjones@gmail.com',
			clientId: '378378963218-1sh10cp5o5l7bngn0ij031mhd33runb6.apps.googleusercontent.com',
			clientSecret: 'K1-Z2c4EKjc6a1upX0FZYXrn',
			refreshToken: '1//04Cwbs-f-_R9GCgYIARAAGAQSNwF-L9Irc1OmEf7lUCSYaBoEcL6fIAxeNFDbN9PebuuaA-2MpI73Kr3cD3qbfaCHE6_FQZVVcsQ',
			accessToken: 'ya29.a0Ae4lvC1KTJrPcTZrHwZGP0AcFzKSL-Vzj2uz0n0NkpviTiMKcS_kLK_oGdDUt7lR1pmv9KascEnTTA-LZI5znYWc4GcJQ_MfMzkFP_oN8xw23_F1swKKQTZraHpA5fbzhZIH-WkUh_i7wW4SBNqov5VZQWzOAy1bd3Y',
			expires: 1484314697598
		}
	});
  
	// Specify what the email will look like
	const mailOpts = {
	  from: req.body.email, // This is ignored by Gmail
	  to: 'astonbradleyjones@gmail.com',
	  subject: 'New message from contact form at your portfolio website',
	  text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
	}
  
	// Attempt to send the email
	smtpTrans.sendMail(mailOpts, (error, response) => {
		if(err){
			console.log(err);
		} else {
			console.log(response) // Show a page indicating success
			res.redirect('/');
		}
	})
  })

//this starts the server
app.listen(port, () => {
	console.log("Server is running!");
});