export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	)
}
