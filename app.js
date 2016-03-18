'use strict';
var express = require('express')
,path = require('path')
,xtpl = require('xtpl')
,app = express()
,server = require('http').createServer(app);
xtpl.__express = xtpl.renderFile;

app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname, 'views'));
app.engine('.html',xtpl.__express);
app.set('view engine','html');

server.listen(app.get('port'),function(){
    console.log('Express server listening on port'+ app.get('port'));
});

app.use(express.static(path.join(__dirname,'app')));

app.get('/',function(req,res){
    res.sendfile('/index.html');
});

