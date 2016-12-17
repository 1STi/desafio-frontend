const express = require("express");
const path = require("path");

module.exports = () => {
	"use strict"

	let app = express();

	app.set("public", path.join(__dirname, "../public"));
	app.use(express.static(app.get("public")));

	app.use(function(req, res, next) {
		res.setHeader('Access-Control-Allow-Origin', 'https://query.yahooapis.com/');
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});

	app.get('*', (req, res) => {
		res.sendFile(path.join(app.get("public"), "/index.html"));
	})

	return app;
}