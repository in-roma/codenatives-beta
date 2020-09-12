const Joi = require('joi');
const mongoose = require('mongoose');
// const moment = require('moment');

const questionSchema = new mongoose.Schema({
	_id: {type: String},
	level: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	question: {
		type: String,
		required: true,
		minlength: 15,
		maxlength: 400,
	},
	solution: {
		type: Number,
	},
	explanations: {
		type: String,
		minlength: 15,
		maxlength: 400,
	}
});

const Question = mongoose.model('questions', questionSchema);
exports.Question = Question;
