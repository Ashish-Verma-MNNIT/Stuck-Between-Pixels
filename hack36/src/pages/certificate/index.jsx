import { useRouter } from "next/router"

export async function getStaticProps() {
	const address = sessionStorage.getItem("address")
	if (!address) return { props: {} }
	const res = await fetch(`http://localhost:3000/api/certificate/${address}`)
	const certificates = await res.json()
	return { props: { certificates } }
}

export default function Certificate(props) {
	const router = useRouter()
	if (sessionStorage.getItem("address") == null) {
		window.alert("login first")
		router.push(-1)
	}
	return (
		<div>
			Here is a list of all your certificates:-
			{props.certificates.map(d => (
				<Card data={d} />
			))}
		</div>
	)
}
