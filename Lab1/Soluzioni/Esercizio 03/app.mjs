
import {dispatcher} from "./httpdispatcher.mjs";
import {default as http} from "http";

dispatcher.onGet("/page1", (req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Page 1');
    res.end();
});
dispatcher.onPost("/page2", (req, res)=> {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Page 2');
    res.end();
});
dispatcher.onError((req, res)=> {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Error');
    res.end();
});
http.createServer((req, res) =>{
    dispatcher.dispatcher(req, res);
}).listen(8080, '127.0.0.1');