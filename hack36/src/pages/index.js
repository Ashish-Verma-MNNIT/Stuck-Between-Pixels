import Head from "next/head"
import Login from "../pages/auth/login"

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
			<main className="py-1">
				<div className="text-2xl font-bold text-center">
					<h1>Get your companies certified</h1>
				</div>
			</main>
		</>
	)
}
