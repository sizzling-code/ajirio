import Gig from "../models/gig.model.js";

export const postGig = async (req, res) => {
  try {
    const gig = await Gig.create(req.body);
    res.json({ success: true, gig });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getGigs = async (req, res) => {
  const gigs = await Gig.find();
  res.json(gigs);
};
