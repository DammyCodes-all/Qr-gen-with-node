import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import bodyParser from "body-parser";
import morgan from "morgan";
import qr from 'qr-image'
import fs from 'fs'


const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))
const port = 3000

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static('public')) 

function createQr(url){
    try{
        if(!url) throw new Error('No url given')
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('./public/qr-code.png'))
    }
    catch(err){
        console.log("Error generating QR code: ", err)
    }
}

app.get("/" , (req, res)=>{
     res.render('index.ejs' , {qrCode: null})
})
app.post('/submit' , (req , res)=>{
    const url = req.body.link
    createQr(url)
    const qrCode = `./qr-code.png`
    console.log(qrCode)
    res.render('index.ejs', {qrCode: qrCode})
})
app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`)
})
