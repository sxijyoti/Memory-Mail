// const express = require('express');
// const { body, validationResult } = require('express-validator');
// const auth = require('../middleware/auth');
// const Capsule = require('../models/Capsule');

// const router = express.Router();

// // Create capsule
// router.post('/capsules',
//   auth,
//   [
//     body('title').trim().notEmpty().withMessage('Title is required'),
//     body('message').notEmpty().withMessage('Message is required'),
//     body('openDate').isISO8601().withMessage('Valid open date is required')
//   ],
//   async (req, res) => {
//     try {
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//       }

//       const capsule = new Capsule({
//         ...req.body,
//         userId: req.user.id,
//         isLocked: true
//       });

//       await capsule.save();
//       res.status(201).json(capsule);
//     } catch (error) {
//       res.status(500).json({ error: 'Server error' });
//     }
// });

// // Get user's capsules
// router.get('/capsules', auth, async (req, res) => {
//   try {
//     const capsules = await Capsule.find({ userId: req.user.id })
//       .sort({ createdAt: -1 });
    
//     // Add notification status for upcoming capsules
//     const now = new Date();
//     const processedCapsules = capsules.map(capsule => {
//       const daysUntilOpen = Math.ceil((capsule.openDate - now) / (1000 * 60 * 60 * 24));
//       return {
//         ...capsule.toObject(),
//         isUnlockingSoon: capsule.isLocked && daysUntilOpen <= 7 && daysUntilOpen > 0
//       };
//     });

//     res.json(processedCapsules);
//   } catch (error) {
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Get single capsule
// router.get('/capsules/:id', auth, async (req, res) => {
//   try {
//     const capsule = await Capsule.findOne({
//       _id: req.params.id,
//       userId: req.user.id
//     });

//     if (!capsule) {
//       return res.status(404).json({ error: 'Capsule not found' });
//     }

//     if (capsule.isLocked && new Date() < capsule.openDate) {
//       return res.status(403).json({ error: 'Capsule is still locked' });
//     }

//     res.json(capsule);
//   } catch (error) {
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Delete capsule
// router.delete('/capsules/:id', auth, async (req, res) => {
//   try {
//     const capsule = await Capsule.findOneAndDelete({
//       _id: req.params.id,
//       userId: req.user.id
//     });

//     if (!capsule) {
//       return res.status(404).json({ error: 'Capsule not found' });
//     }

//     res.json({ message: 'Capsule deleted' });
//   } catch (error) {
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const Capsule = require('../models/Capsule'); // Assuming you have a Capsule model
// const authenticateToken = require('../middleware/authenticateToken');

// // Fetch all capsules for a logged-in user
// router.get('/', authenticateToken, async (req, res) => {
//   try {
//     const capsules = await Capsule.find({ userId: req.user.userId });
//     res.status(200).json(capsules);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to fetch capsules', error });
//   }
// });

// // Create a new capsule
// router.post('/', authenticateToken, async (req, res) => {
//   const { title, message } = req.body;

//   if (!title || !message) {
//     return res.status(400).json({ message: 'Title and Message are required' });
//   }

//   try {
//     const newCapsule = new Capsule({
//       title,
//       message,
//       userId: req.user.userId,
//     });

//     const savedCapsule = await newCapsule.save();
//     res.status(201).json(savedCapsule);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to create capsule', error });
//   }
// });

// module.exports = router;

const express = require('express');
const authenticateToken = require('../middleware/auth');
const Capsule = require('../models/Capsule'); // Assuming Capsule model exists

const router = express.Router();

// Capsule Creation Endpoint
router.post('/', authenticateToken, async (req, res) => {
  const { title, message } = req.body;

  try {
    const newCapsule = new Capsule({
      title,
      message,
      userId: req.user.userId,
    });

    await newCapsule.save();

    res.status(201).json({
      message: 'Capsule created successfully',
      newCapsule,
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create capsule', error });
  }
});

module.exports = router;
