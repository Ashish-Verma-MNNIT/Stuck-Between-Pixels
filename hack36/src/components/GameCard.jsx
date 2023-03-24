export default function GameCard({ data }) {
	return (
		<div className="relative flex flex-col w-3/4 mx-auto mb-2 border-2 border-gray-200 rounded-lg hover:cursor-pointer hover:opacity-60">
			<h1 className="absolute px-2 py-1 bg-gray-700 rounded-lg">
				{data.name}
			</h1>
			<img src={data.src} />
		</div>
	)
}
