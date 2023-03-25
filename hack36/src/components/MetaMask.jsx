import { useState } from "react"
import { ether } from 'ethers'
import { Result } from "postcss"

const MetaMask = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);

    const connectWallet = () => {
        if (window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(result => {
                    accountChanged([result[0]])
                })
        } else {
            setErrorMessage("Install metamask Please")
        }
    }
    const accountChanged = (accountName) => {
        setDefultAccount(accountName);
    }
    return (
        <div>
            <h1>Meta connectt</h1>
            <buton onClick={connectWallet}>Connect Wallet</buton>
            <h3>Address : {defaultAccount}</h3>
            <h3>Balance : $</h3>
            {errorMessage}
        </div>
    )
}

export default MetaMask