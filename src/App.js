import "./App.css";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Navbar from "./components/Header/Navbar";
import NavL from "./components/Lateralnav/NavL";
import Productos from "./components/Productos/Productos";
import Cart from "./components/CartItems/Cart";
import ProductDetails from "./components/Productos/ProductDetails";
const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [
    infuraProvider({ apiKey: process.env.REACT_APP_WEB3APIKEY }),
    publicProvider(),
  ]
);
const { connectors } = getDefaultWallets({
  appName: "Web3 Ecommerce",
  chains,
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
            <Navbar />
            <NavL />
            <ConnectButton />
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<Cart />} path="/cart" />
              <Route element={<Productos />} path="/Productos" />
              <Route element={<ProductDetails />} path="/category/:id" />
            </Routes>
          </RainbowKitProvider>
        </WagmiConfig>
      </BrowserRouter>
    </div>
  );
}

export default App;
