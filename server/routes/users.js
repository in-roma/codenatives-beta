const { User } = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

// Get all users
router.get('/', async (req, res) => {
	try {
		const users = await User.find().sort('name');
		res.send(users);
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
});

// Get one specific user
router.get('/:id', async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		res.send(user);
	} catch (error) {
		return res
			.status(404)
			.send('The customer with the given ID was not found.');
	}
});

// Get authenticated user

router.get('/account', auth, async (req, res) => {
	const user = await User.findById(req.user._id).select('-password')
	res.send(user);
});

// Post user
router.post('/', async (req, res) => {
	try {
		const user = new User({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			password: req.body.password,
			isAdmin: req.body.isAdmin,
			creationDate: Date.now(),
		});
		const salt = await bcrypt.genSalt(10);
		user.password = await bcrypt.hash(user.password, salt);
		await user.save();

		const token = user.generateAuthToken();

		res
		.header('x-auth-token', token)
		.header("access-control-expose-headers", "x-auth-token")
		.send(user);
	} catch (error) {
		res.send(error);
	}
});

// Put user/admin
router.put('/:id', auth, async (req, res) => {
	try {
		const user = await User.findByIdAndUpdate(
			req.params.id,
			{
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				email: req.body.email,
				password: req.body.password,
				isAdmin: req.body.isAdmin,
				lastUpdate: Date.now(),
			},
			{ new: true }
		);
		res.status(201).send(user);
	} catch (error) {
		res.status(404).send(`User: ${error.value} can't be found`);
	}
});

// Delete user/admin
router.delete('/:id', [auth, admin], async (req, res) => {
	try {
		const user = await User.findByIdAndRemove(req.params.id);
		res.send('User deleted');
	} catch (error) {
		res.status(404).send(`User: ${error.value} can't be found`);
	}
});

module.exports = router;
