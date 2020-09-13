const http = require('http');
var dateTime = require('node-datetime');

const app = http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write('Welcome to Hands on Session in Azure Kubernetes Cluster');
  response.end();
  var dt = dateTime.create();
  var formatted = dt.format('Y-m-d H:M:S');
  console.log('Request received at ',formatted);
});

app.listen(80);