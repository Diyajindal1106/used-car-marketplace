const Car = require("../models/Car");

// =======================
// Get All Cars
// =======================

exports.getCars = async (req, res) => {

    try {

        const cars = await Car.find();

        res.json(cars);

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

// =======================
// Get Single Car
// =======================

exports.getCarById = async (req, res) => {

    try {

        const car = await Car.findById(req.params.id);

        if (!car) {

            return res.status(404).json({

                message: "Car Not Found"

            });

        }

        res.json(car);

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

// =======================
// Add Car
// =======================

exports.addCar = async (req, res) => {

    try {

        const car = await Car.create(req.body);

        res.status(201).json(car);

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

// =======================
// Update Car
// =======================

exports.updateCar = async (req, res) => {

    try {

        const car = await Car.findByIdAndUpdate(

            req.params.id,

            req.body,

            { new: true }

        );

        res.json(car);

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

// =======================
// Delete Car
// =======================

exports.deleteCar = async (req, res) => {

    try {

        await Car.findByIdAndDelete(req.params.id);

        res.json({

            message: "Car Deleted Successfully"

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};