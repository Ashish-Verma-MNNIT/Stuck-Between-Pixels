import NavBar from "./Navbar"
import Footer from "./Footer"

export default function Layout({ children }) {
	return (
		<>
			<NavBar />
			{children}
			<img src="./fire.jpg" className="w-full h-full"></img>
			<Footer />
		</>
	)
}
