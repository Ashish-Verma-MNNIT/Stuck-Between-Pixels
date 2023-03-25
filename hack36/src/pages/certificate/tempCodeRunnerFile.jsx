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