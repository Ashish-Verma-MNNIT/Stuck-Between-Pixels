import { useState } from "react"
import { ethers } from "ethers"
import Image from "next/image"

const MetaMask = () => {
	const [errorMessage, setErrorMessage] = useState(null)
	const [defaultAccount, setDefaultAccount] = useState(null)
	const [userBalance, setUserBalance] = useState(null)

	const connectWallet = () => {
		if (window.ethereum) {
			window.ethereum
				.request({ method: "eth_requestAccounts" })
				.then(result => {
					accountChanged(result[0])
				})
				.catch(error => {
					if (error.code === 4001) {
						setErrorMessage("Connect request rejected.")
					} else {
						setErrorMessage(error.message)
					}
				})
		} else {
			setErrorMessage("Please install MetaMask.")
		}
	}

	const accountChanged = accountName => {
		setDefaultAccount(accountName)
		getUserBalance(accountName)
	}

	const getUserBalance = accountAddress => {
		window.ethereum
			.request({
				method: "eth_getBalance",
				params: [String(accountAddress), "latest"],
			})
			.then(balance => {
				setUserBalance(ethers.utils.formatEther(balance))
			})
	}

	return (
		<div
			className="w-full min-h-screen bg-center bg-no-repeat bg-cover"
			style={{
				backgroundImage:
					"url('https://i.seadn.io/gae/ZgxI-mJ_jnOXO8MVQ0xf1vF754mmHI4vkokJxktgz4Xx7PdDgbfGigXh0sa3Iv-UqBVCiftJWlkZqBGRIW6qnzSoEoOzR1tIPn18z3Q?auto=format&w=1000)",
			}}>
			<div className="max-w-5xl px-4 pt-20 mx-auto sm:px-6 lg:px-8">
				<h1 className="flex font-bold ext-white ftext-center txt-3xl mlb-6 sm:text-4xl lg:text-5xl">
					<div className="flex justify-center">
						<Image
							src="meta.png"
							alt="Meta Connect logo"
							className="mr-2 h-11"></Image>
						MetaMask Connect
					</div>
				</h1>
				<div className="p-6 bg-white rounded-lg shadow-lg animate-fade-in-down">
					<button
						className="w-full px-4 py-2 mb-4 font-bold text-white transition duration-500 ease-in-out transform bg-blue-500 rounded-md hover:bg-blue-700 hover:-translate-y-1 hover:scale-110"
						onClick={connectWallet}>
						Connect Wallet
					</button>
					{defaultAccount && (
						<div className="mt-4 animate-fade-in-up">
							<p className="mb-2 font-medium text-gray-700">
								Address:
							</p>
							<p className="px-3 py-2 text-gray-800 bg-gray-100 rounded-lg">
								{defaultAccount}
							</p>
							{userBalance && (
								<div className="mt-4 animate-fade-in-up">
									<p className="mb-2 font-medium text-gray-700">
										Balance:
									</p>
									<p className="px-3 py-2 text-gray-800 bg-gray-100 rounded-lg">
										{userBalance} ETH
									</p>
								</div>
							)}
						</div>
					)}
					{errorMessage && (
						<p className="mt-4 text-red-500 animate-fade-in-up">
							{errorMessage}
						</p>
					)}
				</div>
			</div>
		</div>
	)
}

export default MetaMask
