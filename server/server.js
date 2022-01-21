// server/server.js
var express = require("express");
var bodyParser = require("body-parser");
var Pusher = require("pusher");
const cors = require("cors");

require("dotenv").config();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept',
        'Bypass-Tunnel-Reminder'
    );
    next();
});
app.use(cors());

const pusher = new Pusher({
  appId: process.env.APP_ID,
  key: process.env.APP_KEY,
  secret: process.env.APP_SECRET,
  cluster: process.env.APP_CLUSTER
});

// for checking if the server works
app.get("/", (req, res) => {
  res.send("all good...");
});

app.post("/pusher/auth", (req, res) => {
  const socketId = req.body.socket_id;
  const channel = req.body.channel_name;
  console.log("authing...");
  var auth = pusher.authenticate(socketId, channel);
  return res.send(auth);
});

app.post('/whiteboard', (req, res) => {
  pusher.trigger('wbuse', req.body);
  res.json(req.body);
});


var port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });