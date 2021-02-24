// ./models/position.js
const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const userSchema = new Schema({
	userName: {
		type: String,
		required: true,
		trim: true,
		required: "Enter a stock ticker symbol",
	},
	totalChange: {
		type: Number,
	},
	positions: [
		{
			type: Schema.Types.ObjectId,
			ref: "Position"
		}
	]
});

const User = mongoose.model("User", userSchema);

module.exports = User;