const express = require('express');
const authenticateToken = require('../middleware/auth');
const Capsule = require('../models/Capsule'); // Assuming Capsule model exists

const router = express.Router();

// Capsule Creation Endpoint
// Capsule Creation Endpoint
router.post('/', authenticateToken, async (req, res) => {
  const { title, message, unlockDate } = req.body; // Include unlockDate in destructuring

  try {
    // Validate that unlockDate is provided
    if (!unlockDate) {
      return res.status(400).json({ message: 'Unlock date is required' });
    }

    // Create a new capsule with the required fields
    const newCapsule = new Capsule({
      title,
      message,
      unlockDate, // Save unlockDate
      userId: req.user.userId, // Use the authenticated user's ID from the token
    });

    await newCapsule.save();

    res.status(201).json({
      message: 'Capsule created successfully',
      newCapsule,
    });
  } catch (error) {
    console.error('Error creating capsule:', error);
    res.status(500).json({ message: 'Failed to create capsule', error });
  }
});


// Fetch Capsules for the Authenticated User
router.get('/', authenticateToken, async (req, res) => {
  console.log('Request reached /api/capsules');
  const userId = req.user.userId;
  console.log('Authenticated user:', req.user);

  try {
    const capsules = await Capsule.find({ userId });
    console.log('Capsules fetched:', capsules);
    res.status(200).json({
      success: true,
      capsules,
    });
  } catch (error) {
    console.error('Error fetching capsules:', error);
    res.status(500).json({ success: false, message: 'Error fetching capsules', error });
  }
});


// Delete a Capsule by ID
router.delete('/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const userId = req.user.userId; // This adds the user ID check

  console.log('Delete request details:', { 
    capsuleId: id, 
    userId: userId 
  }); // Additional logging for debugging

  try {
    const deletedCapsule = await Capsule.findOneAndDelete({ 
      _id: id, 
      userId: userId // This ensures the capsule belongs to the user
    });

    if (!deletedCapsule) {
      console.log('Capsule not found or unauthorized:', { id, userId });
      return res.status(404).json({ 
        success: false, 
        message: 'Capsule not found or you do not have permission to delete' 
      });
    }

    console.log('Capsule deleted successfully:', deletedCapsule._id);

    res.status(200).json({
      success: true,
      message: 'Capsule deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting capsule:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error deleting capsule', 
      error: error.message 
    });
  }
});

module.exports = router;
