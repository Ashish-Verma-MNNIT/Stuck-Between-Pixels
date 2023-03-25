// export async function getStaticProps() {
// 	const res = await fetch("")
// 	const users = await res.json()
// 	return { props: { users } }
// }
export default function Certificate() {
	// get this data from db after login...
	const data = [
		{
			id: 1,
			product: "something",
			certificate_type: "A",
		},
		{
			id: 1,
			product: "something",
			certificate_type: "A",
		},
	]
	return (
		<div>
			Here is a list of all your certificates:-
			{data.map(d => (
				<Card data={d} />
			))}
		</div>
	)
}
