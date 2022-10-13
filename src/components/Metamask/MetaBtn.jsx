import React from "react";
import { useState } from "react";
import "./MetaBtn.css";
import { useContext } from "react";
import { DataContext } from "../context";
import Web3 from "web3";
import Web3Modal from "web3modal";
//import { Web3Modal } from "@web3modal/react";
import WalletConnectProvider from "@walletconnect/web3-provider";
//import { Web3Provider } from "@ethersproject/providers";
import WalletLink from "walletlink";

export default function MetaBtn() {
  const web3 = new Web3(Web3.givenProvider || REACT_APP_WEB3APIKEY);

  const { account, setAccount, setButtonText, buttonText } =
    useContext(DataContext);
  const providerOptions = {
    binancechainwallet: {
      package: true,
    },
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: "f0126c7eda39494d825615b9838f0a2c",
      },
    },
    WalletLink: {
      package: WalletLink,
      options: {
        appName: "web3 ecommerce",
        infuraId: "f0126c7eda39494d825615b9838f0a2c",
        rpc: "",
        chainId: 1,
        darkMode: true,
      },
    },
  };
  const web3Modal = new Web3Modal({
    network: "mainnet",
    cacheProvider: true,
    theme: "dark",
    providerOptions,
  });

  const connectWallet1 = async () => {
    let provider = await web3Modal.connect();
    let web31 = new Web3(provider);
    await window.ethereum.send("eth_requestAccounts");
    let accounts = await web31.eth.getAccounts();
    setAccount = accounts[0];
    document.getElementById("walletAddress").innerHTML = account;
  };

  // const connectWallet = () => {

  //   if (window.ethereum && window.ethereum.isMetaMask) {
  //     window.ethereum
  //       .request({ method: "eth_requestAccounts" })
  //       .then((result) => {
  //         setAccount(result[0]);
  //         setButtonText("Connected");
  //       })
  //       .catch((error) => {
  //         setButtonText("error al conectar");
  //       });
  //   } else {
  //     // no instalado
  //     setButtonText("you need to install one wallet");
  //   }
  // };
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
      <button className="btn-M" onClick={connectWallet1}>
        {buttonText}
        <abbr title={account}></abbr>
      </button>
    </div>
  );
}
