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

    User.findOne({ email: userData.email }, (error, user) => {
        if (error) {
            console.log(error);
        } else {
            if (!user) {
                res.status(401).send('Invalid email')
            } else {
                if (user.password !== userData.password) {
                    res.status(401).send('Invalid password')
                } else {
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
            "country": "Made in: France",
            "description": "Lancome Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "imageName": "mascara2.png",
        },
        {
            "id": "2",
            "price": "9",
            "availability": "Not available",
            "brand": "Lancome",
            "serries": "Lash Idole Mascara",
            "volume": "8g",
            "country": "Made in: France",
            "description": "Lancome Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "imageName": "mascara3.png",
        },
        {
            "id": "3",
            "price": "15",
            "availability": "Are available",
            "brand": "Lancome",
            "serries": "Gratest",
            "volume": "9g",
            "country": "Made in: France",
            "description": "Lancome Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "imageName": "mascara4.png",
        },
        {
            "id": "4",
            "price": "9",
            "availability": " One unit of goods",
            "brand": "Dior",
            "serries": "Fresh Idole Mascara",
            "volume": "10g",
            "country": "Made in: Italy",
            "description": "Dior Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "imageName": "mascara5.png",

        },
        {
            "id": "5",
            "price": "19",
            "availability": "Are available",
            "brand": "Dior",
            "serries": "Long Idole Mascara",
            "volume": "8g",
            "country": "Made in: Italy",
            "description": "Dior Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "imageName": "mascara2.png",

        },
        {
            "id": "6",
            "price": "9",
            "availability": "Not available",
            "brand": "Dior",
            "serries": "Big Idole Mascara",
            "volume": "8g",
            "country": "Made in: Italy",
            "description": "Dior Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "imageName": "mascara3.png",

        },
        {
            "id": "7",
            "price": "11",
            "availability": "One unit of goods",
            "brand": "Max factor",
            "serries": "Long Mascara",
            "volume": "8g",
            "country": "Made in: Poland",
            "description": "Max factor Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "imageName": "mascara2.png",
        },
        {
            "id": "8",
            "price": "10",
            "availability": "One unit of goods",
            "brand": "Loreal",
            "serries": "Telescopic Mascara",
            "volume": "9g",
            "country": "Made in: Spain",
            "description": "Loreal Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "imageName": "mascara4.png",

        },
        {
            "id": "9",
            "price": "18",
            "availability": "Are available",
            "brand": "Loreal",
            "serries": "Telescopic Mascara",
            "volume": "8g",
            "country": "Made in: Spain",
            "description": "Loreal Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "imageName": "mascara5.png",

        },
        {
            "id": "10",
            "price": "8",
            "availability": "Not available",
            "brand": "Loreal",
            "serries": "Blue telescopic Mascara",
            "volume": "8g",
            "country": "Made in: Spain",
            "description": "Loreal Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "imageName": "mascara2.png",

        },
        {
            "id": "11",
            "price": "6",
            "availability": "Are available",
            "brand": "Viviene Saabo",
            "serries": "Boom Mascara",
            "volume": "9g",
            "country": "Made in: Germany",
            "description": "Viviene Saabo Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "imageName": "mascara4.png",

        },
        {
            "id": "12",
            "price": "16",
            "availability": "Not available",
            "brand": "Viviene Saabo",
            "serries": "Gray Mascara",
            "volume": "8g",
            "country": "Made in: Germany",
            "description": "Viviene Saabo Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "imageName": "mascara3.png",

        },
        {
            "id": "13",
            "price": "6",
            "availability": "Are available",
            "brand": "Viviene Saabo",
            "serries": "Blue Mascara",
            "volume": "9g",
            "country": "Made in: Germany",
            "description": "Viviene Saabo Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "imageName": "mascara2.png",

        },
        {
            "id": "14",
            "price": "10",
            "availability": "Are available",
            "brand": "Maybelline",
            "serries": "Blue Mascara",
            "volume": "6g",
            "country": "Made in: Greece",
            "description": "Maybelline Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "imageName": "mascara4.png",

        },
        {
            "id": "15",
            "price": "12",
            "availability": "Are available",
            "brand": "Maybelline",
            "serries": "Gray Mascara",
            "volume": "10g",
            "country": "Made in: Greece",
            "description": "Maybelline Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "imageName": "mascara2.png",

        },

    ];
    res.json(mascara);
})

router.get('/face-care', (req, res) => {
    let faceCareGoods = [
        {
            "id": "1",
            "name": "Cream for face",
            "imgName": "creamBakground1",
            "link": "/dashboard/creams",
            "cols": "1",
            "rows": "1"
        },
        {
            "id": "2",
            "name": "Micellar water",
            "imgName": "micellarWaterBakground1",
            "link": "/dashboard/creams",
            "cols": "1",
            "rows": "1"
        },
        {
            "id": "3",
            "name": "Lotion for face",
            "imgName": "lotionBakground1",
            "link": "/dashboard/creams",
            "cols": "1",
            "rows": "1"
        },
        {
            "id": "4",
            "name": "Shower face gel",
            "imgName": "gelFaceBakground1",
            "link": "/dashboard/creams",
            "cols": "1",
            "rows": "1"
        },
        {
            "id": "5",
            "name": "Shower face scrab",
            "imgName": "gelFaceBakground1",
            "link": "/dashboard/creams",
            "cols": "1",
            "rows": "1"
        },
        {
            "id": "6",
            "name": "Shower face foam",
            "imgName": "faceFoamBakground1",
            "link": "/dashboard/creams",
            "cols": "1",
            "rows": "1"
        },
    ];
    res.json(faceCareGoods);
})
router.get('/guestCreams', (req, res) => {
    let creams = [
        {
            "id": "1",
            "imageName": "gelFaceBakground1.jpg",
            "brand": "Lancome",
            "serries": "Ultra clean",
            "price": "12",
            "availability": "Are available",
            "volume": "150g",
            "country": "Made in: Greece",
            "tagline": "By 1 get 2!",
            "description": "Lancome Idole mascara proves that beautiful eyes do not only shine with happiness.",
            "cols": "1",
            "rows": "1",
        },
        {
            "id": "2",
            "imageName": "lotionBakground1.jpg",
            "brand": "Dior",
            "serries": "For dry skin",
            "price": "10",
            "availability": "Are available",
            "volume": "100g",
            "tagline": "-50% for all 'Dior'",
            "country": "Made in: Italy",
            "description": "Dior mascara proves that beautiful eyes do not only shine with happiness.",
            "cols": "1",
            "rows": "1",
        },
        {
            "id": "3",
            "imageName": "gelFaceBakground1.jpg",
            "brand": "Max factor",
            "serries": "Fresh",
            "price": "2",
            "availability": "Are available",
            "volume": "200g",
            "tagline": "Take lotion and get -50% for gel",
            "country": "Made in: Spain",
            "description": "Max factor proves that beautiful eyes do not only shine with happiness.",
            "cols": "1",
            "rows": "1",
        },
        {
            "id": "4",
            "imageName": "lotionBakground1.jpg",
            "brand": "Loreal",
            "serries": "Light",
            "price": "13",
            "availability": "Are available",
            "volume": "300g",
            "tagline": "-20% for all",
            "country": "Made in: Poland",
            "description": "Loreal mascara proves that beautiful eyes do not only shine with happiness.",
            "cols": "1",
            "rows": "1",
        },
        {
            "id": "5",
            "imageName": "gelFaceBakground1.jpg",
            "brand": "Viviene Saabo",
            "serries": "For all type of skin",
            "price": "8",
            "availability": "Are available",
            "volume": "100g",
            "tagline": "Cashback 20%",
            "country": "Made in: France",
            "description": "Viviene Saabo mascara proves that beautiful eyes do not only shine with happiness.",
            "cols": "1",
            "rows": "1",
        },
        {
            "id": "6",
            "imageName": "lotionBakground1.jpg",
            "brand": "Clean & Clear",
            "serries": "Night",
            "price": "12",
            "availability": "Are available",
            "volume": "100g",
            "tagline": "By 2 get 3!",
            "country": "Made in: Ukraine",
            "description": "Clean & Clear mascara proves that beautiful eyes do not only shine with happiness.",
            "cols": "1",
            "rows": "1",
        },

    ];
    res.json(creams);
})
router.get('/todaySales', (req, res) => {
    let sales = [
        {
            "id": "1",
            "imgName": "gelFaceBakground1.jpg",
            "tagline": "By 1 gel 'Clean & Clear' get 2!",
            "link": "/dashboard/face-care",
            "cols": "1",
            "rows": "1",
        },
        {
            "id": "2",
            "imgName": "mascara5.png",
            "tagline": "-50% for all mascara 'Dior'",
            "link": "/dashboard/dec-cos",
            "cols": "1",
            "rows": "1",
        },
        {
            "id": "3",
            "imgName": "lotionBakground1.jpg ",
            "tagline": "Take any lotion and get -50% for any gel",
            "link": "/dashboard/face-care",
            "cols": "1",
            "rows": "1",
        },
        {
            "id": "4",
            "imgName": "mascara2.png",
            "tagline": "-20% for all mascara 'Lancome'",
            "link": "/dashboard/dec-cos",
            "cols": "1",
            "rows": "1",
        },
        {
            "id": "5",
            "imgName": "mascara3.png",
            "tagline": "Cashback 20% for all mascara 'Loreal'",
            "link": "/dashboard/dec-cos",
            "cols": "1",
            "rows": "1",
        },
        {
            "id": "6",
            "imgName": "mascara4.png",
            "tagline": "By 2 mascara 'Chenel' get 3!",
            "link": "/dashboard/dec-cos",
            "cols": "1",
            "rows": "1",
        },

    ];
    res.json(sales);
})
router.get('/decorativeCosm', (req, res) => {
    let decorativeCosm = [

        {
            "id": "1",
            "title": "Mascara",
            "imgName": "makeup8",
            "link": "/dashboard/mascara",
            "cols": "1",
            "rows": "1",
        },
        {
            "id": "2",
            "title": "Face powder",
            "imgName": "makeup1",
            "link": "/dashboard/mascara",
            "cols": "1",
            "rows": "1",
        },
        {
            "id": "3",
            "title": "Tone cream",
            "imgName": "makeup5",
            "link": "/dashboard/mascara",
            "cols": "1",
            "rows": "1",
        },
        {
            "id": "4",
            "title": "Eyeshadows and Pomade",
            "imgName": "makeup3",
            "link": "/dashboard/mascara",
            "cols": "1",
            "rows": "1",
        },
        {
            "id": "5",
            "title": "Tassels",
            "imgName": "makeup4",
            "link": "/dashboard/mascara",
            "cols": "1",
            "rows": "1",
        },
        {
            "id": "6",
            "title": "Eyeliner",
            "imgName": "makeup7",
            "link": "/dashboard/mascara",
            "cols": "1",
            "rows": "1",
        },

    ];
    res.json(decorativeCosm);
})

module.exports = router;