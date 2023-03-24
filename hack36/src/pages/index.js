import Head from "next/head"
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
			<main className="py-1 text-white bg-gray-900">
				<div className="text-2xl font-bold text-center">
					Choose from a list
				</div>
				<Games />
			</main>
		</>
	)
}
