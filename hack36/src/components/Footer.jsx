import Link from "next/link"

export default function Footer() {
	return (
		<div className="">
			<footer className="m-4 text-white bg-gray-600 rounded-lg ">
				<div className="container w-full p-4 mx-auto md:px-6 md:py-8">
					<div className="sm:flex sm:items-center sm:justify-between">
						<Link
							href="/"
							className="flex items-center mb-4 sm:mb-0">
							<img
								src="#"
								className="h-8 mr-3"
								alt="Eco Certify"
							/>
							<span className="self-center text-2xl font-semibold whitespace-nowrap">
								Eco-Certify
							</span>
						</Link>
						<ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-200 sm:mb-0">
							<li>
								<Link
									href="#"
									className="mr-4 hover:underline md:mr-6 ">
									About
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="mr-4 hover:underline md:mr-6">
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="mr-4 hover:underline md:mr-6 ">
									Licensing
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:underline">
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
					<span className="block text-sm text-gray-200 sm:text-center">
						© 2023{" "}
						<Link href="#" className="hover:underline">
							Eco Certify
						</Link>
						. All Rights Reserved.
					</span>
				</div>
			</footer>
		</div>
	)
}
