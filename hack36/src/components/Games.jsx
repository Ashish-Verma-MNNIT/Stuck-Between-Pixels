import games from "./gameData"
import GameCard from "./GameCard"

export default function Games() {
	return (
		<>
			<div className="mt-2 mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
				{games.map(d => (
					<GameCard data={d} />
				))}
			</div>
		</>
	)
}
