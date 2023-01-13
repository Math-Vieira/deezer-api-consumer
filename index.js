const express = require("express");
const cors = require("cors");
const axios = require("axios");
const rateLimit = require("express-rate-limit");
const app = express();
const port = 8080;
const apiLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 50, // Limit each IP to 50 requests per `window` (here, per 1 minute)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    handler: (req, res, next, options) => {
        res.status(options.statusCode).json({
            message: "Too many request. Wait a minute.",
        });
    },
});

//config rateLimit
app.use("/", apiLimiter);

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

app.use("/", (req, res) => {
    res.status(404).json({ message: "Not found" });
});

app.listen(port, () => {
    console.log(`server running in port ${port}`);
});
