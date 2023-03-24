export default function GameCard({ data }) {
	return (
		<div className="w-3/4 mx-auto mb-2 border-2 rounded-lg border-gray-200 flex flex-col hover:cursor-pointer hover:opacity-60">
			<h1>{data.name}</h1>
			<img src={data.src} />
		</div>
	)
}
