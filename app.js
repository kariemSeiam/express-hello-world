const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const axios = require("axios");

app.get("/", (req, res) => res.type('html').send(html));

// Endpoint for directions
app.get("/directions", async (req, res) => {
  try {
    const googleMapsUrl = "https://www.google.com/maps/preview/directions?authuser=0&hl=ar&gl=eg&pb=!1m5!1s30.11369%2C+31.395909!3m2!3d30.11369!4d31.395909!6e2!1m1!1s30.03523%2C+31.337745!3m12!1m3!1d1!2d31.337745!3d30.03523!2m3!1f0!2f0!3f0!3m2!1i1122!2i956!4f13.1!6m33!1m1!18b1!2m3!5m1!6e2!20e3!6m13!4b1!49b1!74i150000!75b1!85b1!89b1!91b1!114b1!149b1!169b1!170i6!176f8!179f90!10b1!12b1!13b1!14b1!16b1!17m1!3e1!20m5!1e0!2e3!5e2!6b1!14b1!8m0!15m4!1s!4m1!2i10305!7e81!20m28!1m6!1m2!1i0!2i0!2m2!1i530!2i956!1m6!1m2!1i1072!2i0!2m2!1i1122!2i956!1m6!1m2!1i0!2i0!2m2!1i1122!2i20!1m6!1m2!1i0!2i936!2m2!1i1122!2i956!27b1!28m0!40i663!47m0";

    const response = await axios.get(googleMapsUrl);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching directions:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
