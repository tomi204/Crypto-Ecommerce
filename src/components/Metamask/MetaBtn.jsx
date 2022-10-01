import React from "react";
import { useState } from "react";
import "./MetaBtn.css";
import { useContext } from "react";
import { DataContext } from "../context";
export default function MetaBtn() {
  const { account, setAccount, setButtonText, buttonText } =
    useContext(DataContext);
  const connectWallet = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          setAccount(result[0]);
          setButtonText(null);
        })
        .catch((error) => {
          setButtonText("error al conectar");
        });
    } else {
      // no instalado
      setButtonText("you need to install one wallet");
    }
  };

  return (
    <div className="container">
      <button className="btn-M" onClick={connectWallet}>
        {buttonText}
        {account}
      </button>
    </div>
  );
}
