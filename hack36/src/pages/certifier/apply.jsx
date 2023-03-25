import { useState } from "react"

export default function Apply() {
	const [data, setData] = useState(null)
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-800">
			<h1 className="mb-2 text-2xl font-medium text-gray-900 dark:text-white">
				Become a Certifier
			</h1>
			<p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
				Fill up the following details to be a certifier
			</p>
			<form className="w-full max-w-md">
				<fieldset className="mb-4">
					<label
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						htmlFor="energy">
						Upload certificate of your highest degree in ecology/environment/pollution control
					</label>
					<input
						className="w-full px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
						id="energy"
						type="file"
					/>
				</fieldset>
				<fieldset className="mb-4">
					<label
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						htmlFor="experience">
						Mention any prior experience in this field
					</label>
					<input
						className="w-full px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
						id="experience"
						type="text"
					/>
				</fieldset>
				<fieldset className="mb-4">
					<label
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						htmlFor="comments">
						Your comments / suggestions
					</label>
					<input
						className="w-full px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
						id="comments"
						type="text"
					/>
				</fieldset>
				<button
					className="w-full py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					type="submit"
				>
					Apply
				</button>
			</form>
		</div>
	)
}
