import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
	name: String,
	email: String,
	address: { String, required },
	links: { type: Array, default: [] },
})

module.exports = mongoose.models.User || mongoose.model("User", UserSchema)
