import React from 'react'
import { useState } from 'react'
import "./MetaBtn.css"
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
      //metamask no instalado
      setButtonText('you need to install metamask')
    }
  }

  return (
    <button className='btn-M' onClick={connectWallet}>{buttonText}{account}</button>
  )
}

