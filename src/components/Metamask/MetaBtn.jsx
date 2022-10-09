import React from "react";
import { useState } from "react";
import "./MetaBtn.css";
import { useContext } from "react";
import { DataContext } from "../context";
import Web3 from "web3";
export default function MetaBtn() {
  const web3 = new Web3(Web3.givenProvider || REACT_APP_WEB3APIKEY);

  const { account, setAccount, setButtonText, buttonText } =
    useContext(DataContext);
  const connectWallet = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          setAccount(result[0]);
          setButtonText("Connected");
        })
        .catch((error) => {
          setButtonText("error al conectar");
        });
    } else {
      // no instalado
      setButtonText("you need to install one wallet");
    }
  };
  let address = account;

  let balance;

  async function checkBalance() {
    try {
      web3.eth.getBalance(address).then((balanceInWei) => {
        balance = web3.utils.fromWei(balanceInWei);
        console.log("Balance in wei:", balanceInWei);
        console.log("Balance in ETH:", balance);
      });
    } catch (error) {
      console.log(error);
    }
  }

  checkBalance();

  return (
    <div className="container">
      <button className="btn-M" onClick={connectWallet}>
        {buttonText}
        <abbr title={account}></abbr>
      </button>
    </div>
  );
}
