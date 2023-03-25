import { useState } from "react"

export default function Apply() {
	const [data, setData] = useState(null)
	return (
		<div>
			Fill up the following details to apply for eco-certification of any
			project
			<form>
				<fieldset className="py-2">
					<label
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						htmlFor="energy">
						Energy consumption
					</label>
					<input
						className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
						id="energy"
						type="file"
					/>
				</fieldset>
				<fieldset>
					<label
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						htmlFor="waste">
						Waste generation and disposal
					</label>
					<input
						className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
						id="waste"
						type="file"
					/>
				</fieldset>
				<fieldset>
					<label
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						htmlFor="carbon">
						Carbon footprint
					</label>
					<input
						className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
						id="carbon"
						type="file"
					/>
				</fieldset>
				<button type="submit" onClick={upload}>
					Submit
				</button>
			</form>
		</div>
	)
}

const upload = () => {
	const options = {
		method: "POST",
		headers: {
			accept: "application/json",
			"content-type": "multipart/form-data",
		},
	}

	fetch("https://api.verbwire.com/v1/nft/store/file", options)
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err))
}
