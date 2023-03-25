import NavBar from "./Navbar"
import Footer from "./Footer"

export default function Layout({ children }) {
	return (
		<>
			<NavBar/>
			{children}
			<div>
			<img src="./green.jpg" className="w-full h-70%"></img>

			</div>
			<Footer/>
		</>
	)
}
