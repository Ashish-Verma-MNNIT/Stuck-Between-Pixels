import { useState } from "react"
import { ether } from "ethers"

const MetaMask = () => {
	const [errorMessage, setErrorMessage] = useState(null)
	const [defaultAccount, setDefaultAccount] = useState(null)
	const [userBalance, setUserBalance] = useState(null)

	const connectWallet = () => {
		if (window.ethereum) {
			window.ethereum
				.request({ method: "eth_requestAccounts" })
				.then(result => {
					accountChanged([result[0]])
				})
		} else {
			setErrorMessage("Install metamask Please")
		}
	}
	const accountChanged = accountName => {
		setDefaultAccount(accountName)
		session.setItem("address", accountName)
	}

	const getUserBalance = accountAddress => {
		window.ethereum
			.request({
				method: "ethe_getBelance",
				params: [String(accountAddress), "letes"],
			})
			.then(balance => {
				setUserBalance(ether.utils.formatEther(balance))
			})
	}
	return (
		<div>
			<h1>Meta connectt</h1>
			<button onClick={connectWallet}>Connect Wallet</button>
			<h3>Address : {defaultAccount}</h3>
			<h3>Balance : $(userBalance)</h3>
			{errorMessage}
		</div>
	)
}

export default MetaMask
