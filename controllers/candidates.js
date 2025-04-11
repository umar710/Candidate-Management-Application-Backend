const Candidate = require("../models/Candidate");

// Get all candidates with filtering and pagination
exports.getAllCandidates = async (req, res) => {
  try {
    const {
      search,
      gender,
      experience,
      skills,
      page = 1,
      limit = 10,
    } = req.query;

    let query = {};

    // Search functionality
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ];
    }

    // Filter by gender
    if (gender) {
      query.gender = gender;
    }

    // Filter by experience
    if (experience) {
      query.experience = experience;
    }

    // Filter by skills
    if (skills) {
      const skillsArray = Array.isArray(skills) ? skills : [skills];
      query.skills = { $all: skillsArray };
    }

    const candidates = await Candidate.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Candidate.countDocuments(query);

    res.json({
      candidates,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new candidate
exports.createCandidate = async (req, res) => {
  try {
    const candidate = new Candidate(req.body);
    await candidate.save();
    res.status(201).json(candidate);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Add these new controller methods

// Update a candidate
exports.updateCandidate = async (req, res) => {
  try {
    const { id } = req.params;
    const candidate = await Candidate.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }

    res.json(candidate);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a candidate
exports.deleteCandidate = async (req, res) => {
  try {
    const { id } = req.params;
    const candidate = await Candidate.findByIdAndDelete(id);

    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }

    res.json({ message: "Candidate deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
