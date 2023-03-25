import { useState } from "react"

export default function Apply() {
	const [data, setData] = useState(null)
	return (
		<div className="grid h-screen place-items-center">
			Fill up the following details to be a certifier
			<form>
				<fieldset className="">
					<label
						className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
						htmlFor="energy">
						upload certificate of your highest degree in
						ecology/environment/pollution control
					</label>
					<input
						className="w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
						id="energy"
						type="file"
					/>
				</fieldset>
				<fieldset>
					<label
						className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
						htmlFor="experience">
						Mention any prior experience in this field
					</label>
					<input
						className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
						id="experience"
						type="text"
					/>
				</fieldset>
				<fieldset>
					<label
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						htmlFor="comments">
						Your comments / suggestions
					</label>
					<input
						className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
						id="comments"
						type="text"
					/>
				</fieldset>
			</form>
		</div>
	)
}
