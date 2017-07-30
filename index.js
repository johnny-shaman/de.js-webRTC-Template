var WebSocketServer = require('ws').Server,
    http = require('http'),
    express = require('express'),
    cors = require('cors'),
    app = express(),
    offering = [],
    answering = [],
    server,
    wss;

app.use(cors());
app.set("view options", {layout: false});
app.use(express.static(__dirname + '/client'));
app.get('/', (req, res) => res.render("index.html"));

server = http.createServer(app);
wss = new WebSocketServer({server : server});

//var connections = [];

wss.on('connection', (ws) => {
    ws.say = (text) => {
        ws.send(text);
        return ws;
    };

    if (offering.length <= 0) {
        offering.push(ws);
        ws.say(JSON.stringify(false));
        console.log('offered at ' + new Date().toISOString());
    } else {
        answering.push(ws);
        ws.say(offering[0].sdp);
        console.log('answered at ' + new Date().toISOString());
    }

    ws.on('close', () => {
        offering.forEach((conn, i) => {
            if (conn === ws) {
                console.log("offer is closed");
                offering.splice(i, 1);
            }
        });
        
        answering.forEach((conn, i) => {
            if (conn === ws) {
                console.log("answer is closed");
                answering.splice(i, 1);
            }
        });
    });
    
    ws.on('message', (message) => {
        offering.forEach((conn, i) => conn === ws ? offering[i].sdp = message : false);
        answering.forEach((conn, i) => {
            if (conn === ws) {
                ws.close();
                offering[0].say(message).close();
                offering.shift();
                answering.splice(i, 1);
            }
        });
    });
});

server.listen(process.env.PORT, process.env.IP);
