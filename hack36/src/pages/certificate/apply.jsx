import { useRef } from "react"
const NEXT_PUBLIC_VERBWIRE_API_KEY = process.env.NEXT_PUBLIC_VERBWIRE_API_KEY

export default function Apply() {
	const ref1 = useRef(null)
	const ref2 = useRef(null)
	const ref3 = useRef(null)
	function upload(e) {
		e.preventDefault()
		const form = new FormData()
		const file1 = ref1.current.files[0]
		const file2 = ref2.current.files[0]
		const file3 = ref3.current.files[0]
		const files = [file1, file2, file3]
		const links = []
		for (const file of files) {
			form.append("filePath", file)
			const options = {
				method: "POST",
				headers: {
					accept: "application/json",
					"X-API-Key": NEXT_PUBLIC_VERBWIRE_API_KEY,
				},
			}
			options.body = form
			fetch("https://api.verbwire.com/v1/nft/store/file", options)
				.then(response => response.json())
				.then(response => {
					console.log(response)
					links.push(response)
				})
				.catch(err => console.error(err))

			//TODO: store links in db here
		}
	}
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
						ref={ref1}
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
						ref={ref2}
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
						ref={ref3}
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
