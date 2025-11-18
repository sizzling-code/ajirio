import express from 'express';
import Gig from '../models/gig.model';

const router = express.Router();

// Create Gig
router.post('/', async (req, res) => {
  try {
    const gig = new Gig(req.body);
    await gig.save();
    res.status(201).json(gig);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all gigs
router.get('/', async (req, res) => {
  try {
    const gigs = await Gig.find();
    res.json(gigs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update Gig
router.put('/:id', async (req, res) => {
  try {
    const gig = await Gig.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(gig);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete Gig
router.delete('/:id', async (req, res) => {
  try {
    await Gig.findByIdAndDelete(req.params.id);
    res.json({ message: 'Gig deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
