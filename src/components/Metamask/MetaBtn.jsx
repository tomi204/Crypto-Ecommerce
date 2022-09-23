import React from 'react'
import { useState } from 'react'
import "./MetaBtn.css"
import Web3 from 'web3';
const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
export default function MetaBtn() {
  const [buttonText, setButtonText] = useState('Connect wallet')
  const [account, setAccount] = useState(null)
  const connectWallet = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(result => {
          setAccount(result[0])
          setButtonText(null)
        })
        .catch(error => {
          setButtonText("error al conectar")
        })
    } else {
      // no instalado
      setButtonText('you need to install one wallet')
    }
  }
 
 
  function mainEnter() {
    web3.eth.getAccounts(function(error, result) {
    web3.eth.sendTransaction(
        {from: result[0], to: "0x5FbDB2315678afecb367f032d93F642f64180aa3", value: web3.utils.toWei("0.1", "ether")}
      , function(err, transactionHash) {
      if (!err)
        console.log(transactionHash + " success"); 
    });
});

}







  return (
    <div className="container">
    <button className='btn-M' onClick={connectWallet}>{buttonText}{account}</button>
     <button className='btn-M' onClick={mainEnter}>comprar</button>
    </div>
  )
}

