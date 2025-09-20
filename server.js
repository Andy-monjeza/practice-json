const http=require('http');
const server= http.createServer((res,req)=>{
    req.write('this is the response that you get from my server');
    req.end("the response ends here");

})
server.listen(5000);