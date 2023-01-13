const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { createChartUrl, createSearchUrl } = require("./api/endpoints");
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
app.get("/chart/:type/:limit/:index", async (req, res) => {
    try {
        const { data } = await axios(createChartUrl(req.params));
        res.status(200).json(data);
    } catch (e) {
        res.status(500).json(e);
    }
});

app.get("/search/:query/:type/:limit/:index", async (req, res) => {
    try {
        const { data } = await axios(createSearchUrl(req.params));
        res.status(200).json(data);
    } catch (e) {
        res.status(500).json(e);
    }
});

app.listen(port, () => {
    console.log(`server running in port ${port}`);
});
