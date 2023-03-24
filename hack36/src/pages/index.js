import Head from "next/head"
import Navbar from "@/components/Navbar"
import Games from "@/components/Games"

export default function Home() {
	return (
		<>
			<Head>
				<title>My Games</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<main className="bg-gray-900">
				<div className="">Choose from a list</div>
				<Games />
			</main>
		</>
	)
}
