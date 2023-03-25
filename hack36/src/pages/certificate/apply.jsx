import { useState } from "react"

export default function Apply() {
  const [data, setData] = useState(null)

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

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200 dark:bg-gray-800">
      <form className="p-8 bg-white rounded-lg shadow-md sm:w-3/4 lg:w-1/2">
        <h2 className="mb-4 text-lg font-medium text-gray-800 dark:text-white">
          Fill up the following details to apply for eco-certification of any project
        </h2>
        <fieldset className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-white" htmlFor="energy">
            Energy consumption
          </label>
          <input
            className="block w-full px-3 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer dark:text-gray-400 bg-gray-50 dark:bg-gray-700 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400"
            id="energy"
            type="file"
          />
        </fieldset>
        <fieldset className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-white" htmlFor="waste">
            Waste generation and disposal
          </label>
          <input
            className="block w-full px-3 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer dark:text-gray-400 bg-gray-50 dark:bg-gray-700 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400"
            id="waste"
            type="file"
          />
        </fieldset>
        <fieldset className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-white" htmlFor="carbon">
            Carbon footprint
          </label>
          <input
            className="block w-full px-3 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer dark:text-gray-400 bg-gray-50 dark:bg-gray-700 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400"
            id="carbon"
            type="file"
          />
        </fieldset>
        <button className="block px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800" type="submit" onClick={upload}>
          Submit
        </button>
      </form>
    </div>
  )
}
