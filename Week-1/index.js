const { createServer } = require('http');

createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    res.end(
        `
        <!doctype html>
        <html>
        <body>
            <h1>This is first week task.</h1>
            <p>${req?.method} is used for this ${req?.url}</P>
        </body>
        </html>
        `
    )
}).listen(3000)