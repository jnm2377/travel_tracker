const express = require('express');
const router = express.Router();

const Trip = require('../models/travel.js');

//how many trips have we taken? good question.
router.get('/count', async (req, res) => {
  try {
    const count = await Trip.count();
    res.send(count.toString());
  } catch (e) {
    console.log("Something's not right with count:", e.message);
  }
});

//find all the countries we've travelled to
router.get('/countries', async (req, res) => {
  try {
    const countries = await Trip.distinct('country');
    res.status(200).json(countries);
  } catch (e) {
    console.log("Something went wrong finding the countries:", e);
    res.status(400).json({err: e.message});
  }
})

//find places we've traveled to within a country
router.get('/byCountry/:country', async (req, res) => {
  try {
    const countryTrips = await Trip.find({country: req.params.country});
    res.status(200).json(countryTrips);
  } catch (e) {
    console.log("Something went wrong finding your trips:", e);
    res.status(400).json({err: e.message});
  }
})


//here are all your trips
router.get('/', async (req, res) => {
  try {
    const allTrips = await Trip.find();
    res.status(200).json(allTrips);
  } catch (e) {
    console.log("For some reason we can't find your trips:", e);
    res.status(400).json({err: e.message});
  }
})

//lets create a new trip record
router.post('/', async (req, res) => {
  try {
    const newTrip = await Trip.create(req.body);
    res.status(200).json(newTrip);
  } catch (e) {
    console.log("CAN'T CREATE YOUR TRIP! Here's why:", e);
    res.status(400).json({err: e.message});
  }
})

//update ---TBH NOT SURE IF THIS IS RIGHT
router.put('/:id', async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedTrip);
  } catch (e) {
    console.log(e);
    res.status(400).json({err: e.message});
  }
})


//delete ---TBH NOT SURE IF THIS IS RIGHT
router.delete('/:id', async (req, res) => {
  try {
    const deleteTrip = await Trip.findByIdAndRemove(req.params.id);
    res.status(200).json({message:"All Systems Nominal"});//also not sure about this last part
  } catch (e) {
    console.log(e);
    res.status(400).json({err: e.message});
  }
})


module.exports = router;
