const app = require("./app");
const http = require("http");
const {port} = require("./config/keys");

// create server
const server = http.createServer(app);

// listen server
server.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});