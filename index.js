const express = require("express");
const cors = require("cors");
const axios = require("axios");
const endpoint = require("./api/endpoints");
const app = express();
const port = 8080;

//cors config
app.use(
    cors({
        credentials: true,
        origin: "*",
        methods: ["POST", "GET"],
        allowedHeaders: ["Content-Type"],
    })
);

//requisition parse
app.use(express.json());

//config routes
app.get("/chart", async (req, res) => {
    try {
        const { data } = await axios(endpoint.chart);
        res.status(200).json(data);
    } catch (e) {
        res.status(500).json({ message: "Server error. Please try again" });
    }
});

app.get("/search", async (req, res) => {
    try {
    } catch (e) {}
});

app.listen(port, () => {
    console.log(`server running in port ${port}`);
})
