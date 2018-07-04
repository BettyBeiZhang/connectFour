//simple express server to serve the app on Heroku
// const express = require('express');
// const app = express();

// app.use(express.static (__dirname + '/dist'));

// // force redirect to HTTPS
// const forceSSL = function(){
//     return function (req,res, next) {
//         if(req.headers['x-forwarded-proto'] !== 'https'){
//             return res.redirect (
//                 ['https://' + req.host('Host'), req.url].join('')
//             );
//         }
//         next();
//     }
// }

const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/my-app'));

app.get('/*', function(req,res) {
     res.sendFile(path.join(__dirname,'/dist/my-app/index.html'));
});


console.log("app listening")
// app.use(forceSSL()); 
app.listen (process.env.PORT || 8080); 