const express = require('express');
const router = express.Router();
const User = require('../models/user');

const mongoose = require('mongoose');
const db = "mongodb+srv://usereugenia:norusi25@cluster0.3gwip.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(db, error => {
    if (error) {
        console.log('error' + error);
    } else {
        console.log('connected to mongoDb');
    }
})
router.get('/', (req, res) => {
    res.send('from api route')
})

router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error);
        } else {
            res.status(200).send(registeredUser)
        }
    })
})

router.post('/login', (req, res) => {
    let userData = req.body;

    User.findOne({email: userData.email}, (error, user) => {
    if(error){
        console.log(error);
    }else{
        if(!user){
            res.status(401).send('Invalid email')
        }else{
            if(user.password !== userData.password){
                res.status(401).send('Invalid password')
            }else{
                res.status(200).send(user)
            }
        }
    }
    })
})

router.get('/guestMascara', (req, res) => {
    let mascara = [
        {
            "id": "1",
            "price": "10",
            "availability": "Are available", 
            "brand": "Lancome",
            "serries": "Big Idole Mascara",
            "volume": "7g",
            "country":"Made in: France",       
            "description": "Lancome Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "imageName": "mascara2",
        },
        {
            "id": "2",
            "price": "9",
            "availability": "Not available", 
            "brand": "Lancome",
            "serries": "Lash Idole Mascara",
            "volume": "8g",
            "country":"Made in: France",       
            "description": "Lancome Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "imageName": "mascara3",
        },
        {
            "id": "3",
            "price": "15",
            "availability": "Are available", 
            "brand": "Lancome",
            "serries": "Gratest",
            "volume": "9g",
            "country":"Made in: France",       
            "description": "Lancome Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "imageName": "mascara4",
        },
        {
            "id": "4",
            "price": "9",
            "availability": " One unit of goods", 
            "brand": "Dior",
            "serries": "Fresh Idole Mascara",
            "volume": "10g",
            "country":"Made in: Italy",
            "description": "Dior Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "imageName": "mascara5",
           
        },
        {
            "id": "5",
            "price": "19",
            "availability": "Are available", 
            "brand": "Dior",
            "serries": "Long Idole Mascara",
            "volume": "8g",
            "country":"Made in: Italy",
            "description": "Dior Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "imageName": "mascara2",
           
        },
        {
            "id": "6",
            "price": "9",
            "availability": "Not available", 
            "brand": "Dior",
            "serries": "Big Idole Mascara",
            "volume": "8g",
            "country":"Made in: Italy",
            "description": "Dior Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "imageName": "mascara3",
           
        },
        {
            "id": "7",
            "price": "11",
            "availability": "One unit of goods", 
            "brand": "Max factor",
            "serries": "Long Mascara",
            "volume": "8g",
            "country":"Made in: Poland",
            "description": "Max factor Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "imageName": "mascara2",
        },
        {
            "id": "8",
            "price": "10",
            "availability": "One unit of goods", 
            "brand": "Loreal",
            "serries": "Telescopic Mascara",
            "volume": "9g",
            "country":"Made in: Spain",
            "description": "Loreal Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "imageName": "mascara4",
          
        },
        {
            "id": "9",
            "price": "18",
            "availability": "Are available", 
            "brand": "Loreal",
            "serries": "Telescopic Mascara",
            "volume": "8g",
            "country":"Made in: Spain",
            "description": "Loreal Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "imageName": "mascara5",
          
        },
        {
            "id": "10",
            "price": "8",
            "availability": "Not available", 
            "brand": "Loreal",
            "serries": "Blue telescopic Mascara",
            "volume": "8g",
            "country":"Made in: Spain",
            "description": "Loreal Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "imageName": "mascara2",
          
        },
        {
            "id": "11",
            "price": "6",
            "availability": "Are available", 
            "brand": "Viviene Saabo",
            "serries": "Boom Mascara",
            "volume": "9g",
            "country":"Made in: Germany",
            "description": "Viviene Saabo Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "imageName": "mascara4",
           
        },
        {
            "id": "12",
            "price": "16",
            "availability": "Not available", 
            "brand": "Viviene Saabo",
            "serries": "Gray Mascara",
            "volume": "8g",
            "country":"Made in: Germany",
            "description": "Viviene Saabo Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "imageName": "mascara3",
           
        },
        {
            "id": "13",
            "price": "6",
            "availability": "Are available", 
            "brand": "Viviene Saabo",
            "serries": "Blue Mascara",
            "volume": "9g",
            "country":"Made in: Germany",
            "description": "Viviene Saabo Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "imageName": "mascara2",
           
        },
        {
            "id": "14",
            "price": "10",
            "availability": "Are available", 
            "brand": "Maybelline",
            "serries": "Blue Mascara",
            "volume": "6g",
            "country":"Made in: Greece",
            "description": "Maybelline Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "imageName": "mascara4",
          
        },
        {
            "id": "15",
            "price": "12",
            "availability": "Are available", 
            "brand": "Maybelline",
            "serries": "Gray Mascara",
            "volume": "10g",
            "country":"Made in: Greece",
            "description": "Maybelline Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "imageName": "mascara2",
           
        },
       
    ];
    res.json(mascara);
})
router.get('/adminMascara', (req, res) => {
    let mascara = [
        {
            "id": "1",
            "brand": "Lancome",
            "country":"Made in: France",
            "description": "Lancome Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "cols": "1",
            "rows": "1",
        },
        {
            "id": "2",
            "brand": "Dior",
            "country":"Made in: France",
            "description": "Lancome Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "cols": "1",
            "rows": "1",
        },
        {
            "id": "3",
            "brand": "Max factor",
            "country":"Made in: France",
            "description": "Lancome Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "cols": "1",
            "rows": "1",
        },
        {
            "id": "4",
            "brand": "Loreal",
            "country":"Made in: France",
            "description": "Lancome Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "cols": "1",
            "rows": "1",
        },
        {
            "id": "5",
            "brand": "Viviene Saabo",
            "country":"Made in: France",
            "description": "Lancome Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "cols": "1",
            "rows": "1",
        },
        {
            "id": "6",
            "brand": "Maybelline",
            "country":"Made in: France",
            "description": "Lancome Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "cols": "1",
            "rows": "1",
        },
       
    ];
    res.json(mascara);
})
router.get('/face-care', (req, res) => {
    let faceCareGoods = [
        {
            "id":"1",
            "name": "Cream for face",
            "imgName":"creamBakground1",
            "cols": "1",
            "rows": "1"
        },
        {
            "id":"2",
            "name": "Micellar water",
            "imgName":"micellarWaterBakground1",
            "cols": "1",
            "rows": "1"
        },
        {
            "id":"3",
            "name": "Lotion for face",
            "imgName":"lotionBakground1",
            "cols": "1",
            "rows": "1"
        },
        {
            "id":"4",
            "name": "Shower face gel",
            "imgName":"gelFaceBakground1",
            "cols": "1",
            "rows": "1"
        },
        {
            "id":"5",
            "name": "Shower face scrab",
            "imgName":"gelFaceBakground1",
            "cols": "1",
            "rows": "1"
        },
        {
            "id":"6",
            "name": "Shower face foam",
            "imgName":"faceFoamBakground1",
            "cols": "1",
            "rows": "1"
        },
     ];
     res.json(faceCareGoods);
})
router.get('/guestCreams', (req, res) => {
    let mascara = [
        {
            "id": "1",
            "brand": "Lancome",
            "country":"Made in: France",
            "description": "Lancome Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "cols": "1",
            "rows": "1",
        },
        {
            "id": "2",
            "brand": "Dior",
            "country":"Made in: France",
            "description": "Lancome Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "cols": "1",
            "rows": "1",
        },
        {
            "id": "3",
            "brand": "Max factor",
            "country":"Made in: France",
            "description": "Lancome Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "cols": "1",
            "rows": "1",
        },
        {
            "id": "4",
            "brand": "Loreal",
            "country":"Made in: France",
            "description": "Lancome Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "cols": "1",
            "rows": "1",
        },
        {
            "id": "5",
            "brand": "Viviene Saabo",
            "country":"Made in: France",
            "description": "Lancome Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "cols": "1",
            "rows": "1",
        },
        {
            "id": "6",
            "brand": "Maybelline",
            "country":"Made in: France",
            "description": "Lancome Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "cols": "1",
            "rows": "1",
        },
       
    ];
    res.json(mascara);
})

module.exports = router;