const fs = require('fs'); // Core Module FileSytem
const http = require('http'); // Core Module http 
const port = 3000;

// Membuat Server
http.createServer((req, res) => {
    const url = req.url; // url

    // Fungsi Membaca data
    const readFile = (path, res) => {
        fs.readFile(path, (err, data) => {
            if(err) {
                res.writeHead(404);
                res.write('Not Found');
            } else {
                res.write(data);
            }
            res.end();
        });
    }

    // Membuat Url
    if(url === '/') {
        readFile('./index.html', res);
    } else if(url === '/about') { 
        readFile('./about.html', res);
    } else {
        res.write('<h1>Not Found</h1>');
        res.end();
    }

}).listen(port, () => {
    console.log(`Server is Running https://localhost:${port}`);
});