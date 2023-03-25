import Head from "next/head"

export default function Home() {
	return (
		<>
			<Head>
				<title>Homepage</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="py-1 text-white bg-gray-900">
				<div className="text-2xl font-bold text-center"></div>
			</main>
		</>
	)
}
