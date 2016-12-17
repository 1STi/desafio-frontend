const app = require("./config/express")();
const port = process.env.PORT || 80;

app.listen(port, () => {
	console.log(`Server started: http://localhost:${port}/`);
})