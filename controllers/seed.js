const express = require('express');
const router = express.Router();

const Trip = require('../models/travel.js');

const newTrips = [
  {
    city: "Rome",
    country: "Italy",
    landmarks: ["Colosseum", "Roman Forum", "Vatican City", "Spanish Steps", "Trevi Fountain"],
    description: "We had a lot of fun in Rome! We toured the Vatican. All the art work was really beautiful; we secretly snapped a picture even though you're not allowed. (Don't tell anyone). The gelato was amazing. We ate a lot of paste and had wine. My favorite part was definitely the Colosseum. It was incredible." ,
    dates: '6/8/2017 - 6/12/2017',
    img: ["https://static.b-europe.com/~/media/MediaRepository/Images_LowRes/Destinations/NL/Amsterdam/700x432_amsterdam_winterview_v1.ashx?h=432&la=en&w=700", "https://westcordhotels.com/wp-content/uploads/2015/10/museumplein-hotels-amsterdam.jpg", "https://thumb2.holidaypirates.com/-tPCM5suCO5tnwM2vzkqbua-dew=/1314x600/https://media.mv.urlaubspiraten.de/images/2015/03/canal-in-amsterdam-image-id-188438480-1426002248-lMGw.jpg"],
  },

  {
    city: "Venice",
    country: "Italy",
    landmarks: ["Piazza San Marco", "St. Mark's Basilica", "Doge's Palace", "Gondolas"],
    description: "They had a lot of glass shops here! It was really cool seeing all the different, colorful glassware. It was beautiful. The gondola ride was peaceful! I've always wanted to do that. It gets very crowded cause there are tourists everywhere but it was a wonderful experience finally being able to see Venice. Also, I fed the pigeons in Piazza San Marco even though we're not supposed to... I'm a rebel." ,
    dates: '6/13/2017 - 6/16/2017',
    img: ["http://www.telegraph.co.uk/content/dam/Travel/2017/July/Venice-II-travel-Getty-xlarge.jpg", "http://res.cloudinary.com/hj7ggro7s/image/upload/c_crop,h_1.0,w_1.0,x_0.00,y_0.00/c_fill,f_auto,h_400,q_70,w_600/USER-588889053", "http://helloholidays.com.my/wp-content/uploads/2016/10/St-Mark%E2%80%99s-Square.jpeg"],
  },

  {
    city: "Paris",
    country: "France",
    landmarks: ["Eiffel Tower", "The Louvre", "Notre Dame", "Arc de Triomphe", "Palace of Versailles"],
    description: "Wow! Paris! There was SO much to do. We went to so many museums every day. Of course, I loved the Louvre and seeing all the amazing art. The Mona Lisa was a lot smaller than I expected. Notre Dame was beautiful, really everything was beautiful. The garden at Versailles was AMAZING!! The crepes were delicious! I bought a perfume bottle at a perfume factory we toured. There are definitely a lot of tourists here but it was fun. The only annoying thing was the 'Eiffel Tower guys' that are literally everywhere, always trying to sell you eiffel tower keychains lol." ,
    dates: '6/17/2017 - 6/22/2017',
    img: ["http://www.telegraph.co.uk/content/dam/Travel/2016/August/Paris-travel-AP65117955-xlarge.jpg", "http://www.universal-tourguide.com/wp-content/uploads/2016/09/discoverparis-universaltourguide.jpg", "https://upload.wikimedia.org/wikipedia/commons/f/f1/Chateau_Versailles_Galerie_des_Glaces.jpg"],
  },

  {
    city: "Amsterdam",
    state: "Holland",
    country: "The Netherlands",
    landmarks: ["Anne Frank House", "Canals", "Red District", "Coffeeshops", "Van Gogh Museum"],
    description: "Amsterdam was so much fun! We rode bikes everywhere. I loved that it's so bike friendly. I've never seen so many bikes. We cruised the canals. The houses all along the canals were cute. It made me want to live there. I would definitely go back." ,
    dates: '6/22/2017 - 6/26/2017',
    img: ["http://www.telegraph.co.uk/content/dam/Travel/2016/August/Paris-travel-AP65117955-xlarge.jpg", "http://www.universal-tourguide.com/wp-content/uploads/2016/09/discoverparis-universaltourguide.jpg", "https://upload.wikimedia.org/wikipedia/commons/f/f1/Chateau_Versailles_Galerie_des_Glaces.jpg"],
  }
];


//get seed data
router.get('/', async (req, res) => {
  try {
    Trip.create(newTrips, function(err) {
      if(err) {
        console.log(err);
        res.send('Error seeding database!');
      } else {
        console.log("===================");
        console.log('SEED WORKED!');
        console.log("===================");
        res.redirect('/travel');
      }
    })
  } catch (e) {
    console.log(e.message);
  }
})


//we dont want the seed data anymore.. womp womp
router.get('/drop', (req, res) => {
  Trip.collection.drop();
  console.log("===================");
  console.log('Collection dropped');
  console.log("===================");
  res.redirect('/travel');
})

module.exports = router;
