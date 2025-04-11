const express = require("express");
const router = express.Router();
const candidatesController = require("../controllers/candidates");

// Get all candidates
router.get("/", candidatesController.getAllCandidates);

// Create a new candidate
router.post("/", candidatesController.createCandidate);

// Add these new routes
router.put("/:id", candidatesController.updateCandidate);
router.delete("/:id", candidatesController.deleteCandidate);

module.exports = router;
