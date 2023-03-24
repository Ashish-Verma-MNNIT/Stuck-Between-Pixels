export default function GameCard({ image }) {
	console.log(image)
	return (
		<div className="w-3/4 mx-auto mb-2 border-2 rounded-lg border-gray-200 flex flex-col">
			<h1>first game</h1>
			<img src={image} />
		</div>
	)
}
