// const express = require('express');
// const { body, validationResult } = require('express-validator');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// const router = express.Router();

// // Register
// router.post('/register',
//   [
//     body('name').trim().notEmpty().withMessage('Name is required'),
//     body('email').isEmail().withMessage('Invalid email'),
//     body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
//   ],
//   async (req, res) => {
//     try {
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//       }

//       const { name, email, password } = req.body;
      
//       const existingUser = await User.findOne({ email });
//       if (existingUser) {
//         return res.status(400).json({ error: 'Email already registered' });
//       }

//       const user = new User({ name, email, password });
//       await user.save();

//       const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
      
//       res.status(201).json({ token });
//     } catch (error) {
//       res.status(500).json({ error: 'Server error' });
//     }
// });

// // Login
// router.post('/login',
//   [
//     body('email').isEmail().withMessage('Invalid email'),
//     body('password').notEmpty().withMessage('Password is required')
//   ],
//   async (req, res) => {
//     try {
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//       }

//       const { email, password } = req.body;
      
//       const user = await User.findOne({ email });
//       if (!user) {
//         return res.status(401).json({ error: 'Invalid credentials' });
//       }

//       const isMatch = await user.comparePassword(password);
//       if (!isMatch) {
//         return res.status(401).json({ error: 'Invalid credentials' });
//       }

//       const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
      
//       res.json({ token });
//     } catch (error) {
//       res.status(500).json({ error: 'Server error' });
//     }
// });

// module.exports = router;

// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User'); // Assuming User model is in models folder

// const router = express.Router();


// // Login Endpoint
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   // Validate that email and password are provided
//   if (!email || !password) {
//     return res.status(400).json({ message: 'Email and password are required' });
//   }

//   try {
//     // Find the user by email
//     const email = req.body.email.trim();
//     const password = req.body.password.trim();

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     console.log('Login attempt:', email, password);

//     // Compare the entered password with the hashed password stored in the database
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     console.log('Hashed password:', user.password);  // Log the password in DB (hashed)
//     console.log('Password match result:', isPasswordValid);
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     // Generate a JWT token
//     const token = jwt.sign(
//       { userId: user._id, email: user.email },
//       process.env.JWT_SECRET, // Replace with an environment variable in production
//       { expiresIn: '7d' }
//     );

//     // Return the token and user information
//     res.status(200).json({
//       message: 'Login successful',
//       token,
//       user: { userId: user._id, email: user.email },
//     });
//   } catch (error) {
//     console.error('Login error:', error);
//     res.status(500).json({ message: 'Login failed', error });
//   }
// });


// // Register Endpoint
// router.post('/register', async (req, res) => {
//   const { name, email, password } = req.body;

//   // Validate that all required fields are provided
//   if (!name || !email || !password) {
//     return res.status(400).json({ message: 'Name, email, and password are required' });
//   }

//   try {
//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already exists' });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10); // 10 salt rounds
//     console.log("Hashed password during registration:", hashedPassword);

//     // Create a new user with the hashed password
//     const newUser = new User({
//       name,           // Include 'name'
//       email,          // Include 'email'
//       password: hashedPassword, // Include hashed password
//     });

//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (err) {
//     console.error('Registration error:', err);
//     res.status(500).json({ message: 'Registration failed', error: err });
//   }
// });

// module.exports = router;

const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Assuming User model is in models folder

const router = express.Router();

// Login Endpoint
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Validate that email and password are provided
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    console.log('Login attempt:', email, password);

    // Compare the entered password with the stored password (plain text comparison)
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET, // Replace with an environment variable in production
      { expiresIn: '7d' }
    );

    // Return the token and user information
    res.status(200).json({
      message: 'Login successful',
      token,
      user: { userId: user._id, email: user.email },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Login failed', error });
  }
});

// Register Endpoint
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  // Validate that all required fields are provided
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Name, email, and password are required' });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Create a new user with the plain text password
    const newUser = new User({
      name,           // Include 'name'
      email,          // Include 'email'
      password,       // Include plain password
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ message: 'Registration failed', error: err });
  }
});

module.exports = router;
