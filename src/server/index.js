const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 3030;
app.use(express.static("dist"));

app.use(
	// cors({
	// 	origin: "http://localhost:8080",
	// })
	cors()
);

app.get("/api/username", (req, res) => res.send({ username: "foo" }));

app.listen(port, () => console.log(`Listening on port ${port}!`));
