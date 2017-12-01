const app = require('express')()
const fs = require('fs')
const request = require('request');
const bodyParser = require('body-parser');
const superagent = require('superagent');
let myurl = ""
let mycookie = ""
app.get('*', (req, res) => {
    var ServerCookie = req.headers.cookie +";"+mycookie;
    if (req.url.indexOf(".") == -1) {
        let url = myurl + req.url;
        superagent.get(url)
            // 设置些需要的头
            .set('Content-Type', 'application/json;charset=UTF-8')
            // set cookie字段
            .set('Cookie', ServerCookie)
            .end(function(err, response) {
                if (err || !response.ok) {
                    res.send(err);
                } else {
                    //接口返回转发数据，可以在这里处理之后拼装数据
                    res.set('Content-Type', 'application/json');
                    res.send(JSON.stringify(response.body));
                }
            })
    } else {
        let _path = req.path
        if (_path.includes('.html')) {
            console.log(__dirname+_path)
            fs.readFile(__dirname + _path, (err, data) => {
                data = data.toString()
                res.send(data)
            })
        } else if (_path.includes('jquery.min.map'));
        else res.sendFile(`${__dirname + req.path}`)
    }
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("*", (req, res) => {
    let url = myurl + req.url;
    var ServerCookie = req.headers.cookie +";"+mycookie;
    // console.log(req.url)

    superagent.post(url)
        // 设置些需要的头
        .set('Content-Type', 'application/json;charset=UTF-8')
        // set cookie字段
        .set('Cookie', ServerCookie)
        .send(req.body)
        .end(function(err, response) {
            if (err || !response.ok) {
                res.send(err);
            } else {
                //接口返回转发数据，可以在这里处理之后拼装数据
                res.set('Content-Type', 'application/json');
                // res.set("")
                let cookie = response.header['set-cookie']             //从response中得到cookie
                if(cookie){
                    mycookie = cookie.toString().replace(/Path=\/,/g,"")
                }
                res.cookie(mycookie)
                res.send(JSON.stringify(response.body));
            }
        })
})

const host = '127.0.0.1'
app.listen(8083, host, () => {
    console.log(`start ${host} 8083`)
})
