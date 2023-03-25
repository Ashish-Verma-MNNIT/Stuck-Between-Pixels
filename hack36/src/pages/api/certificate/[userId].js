import dbConnect from "../../lib/dbConnect"
import User from "../../models/User"

export default async function handler(req, res) {
	const { method } = req
	const id = req.params.userId

	await dbConnect()

	switch (method) {
		case "GET":
			try {
				const user = await User.findOne({ address: id })
				const certificates = user.certificates
				res.status(200).json({ success: true, data: certificates })
			} catch (error) {
				res.status(400).json({ success: false })
			}
			break
		case "POST":
			try {
				const user = await User.findOne({ address: id })
				if (!user || user.length == 0)
					user = await User.create(req.body)
				const data = req.body.data
				const cert = await User.findAndUpdateById(id, {
					...user,
					links: [...user.links, data],
				})
				res.status(201).json({ success: true, data: cert })
			} catch (error) {
				res.status(400).json({ success: false })
			}
			break
		default:
			res.status(400).json({ success: false })
			break
	}
}
