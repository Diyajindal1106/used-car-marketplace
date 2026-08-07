const express = require("express");
const router = express.Router();

const {
    getCars,
    getCarById,
    addCar,
    updateCar,
    deleteCar
} = require("../controllers/carController");

// Get all cars
router.get("/", getCars);

// Get single car
router.get("/:id", getCarById);

// Add new car
router.post("/", addCar);

// Update car
router.put("/:id", updateCar);

// Delete car
router.delete("/:id", deleteCar);

module.exports = router;