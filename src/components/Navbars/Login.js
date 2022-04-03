import { ethers } from "ethers";
import Web3Modal from "web3modal";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnect from "@walletconnect/web3-provider";

import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const providerOptions = {
    walletlink: {
      package: CoinbaseWalletSDK, 
      options: {
        appName: "CRYPTO PROFILE",
        infuraId: process.env.INFURA_KEY 
      }
    },
    walletconnect: {
      package: WalletConnect, 
      options: {
        infuraId: process.env.INFURA_KEY 
      }
    }
};

// set cacheProvider parameter as true when instantiating web3modal
const web3Modal = new Web3Modal({
    cacheProvider: true, // optional
    providerOptions // required
});

function Login() {

    const [provider, setProvider] = useState();
    const [library, setLibrary] = useState();
    const [account, setAccount] = useState();
    const [network, setNetwork] = useState();
    const [chainId, setChainId] = useState();

    const connectWallet = async () => {
        try {
            const provider = await web3Modal.connect();
            const library = new ethers.providers.Web3Provider(provider);
            const accounts = await library.listAccounts();
            const network = await library.getNetwork();
            setProvider(provider);
            setLibrary(library);
            if (accounts) setAccount(accounts[0]);
            setNetwork(network);
        } catch (error) {
            console.error(error);
        }
    };

    const refreshState = () => {
        setAccount();
        setNetwork("");
        setChainId();
    };
    
    const disconnect = async () => {
        await web3Modal.clearCachedProvider();
        refreshState();
    };

    // hook to automatically connect to the cached provider
    useEffect(() => {
        if (web3Modal.cachedProvider) {
            connectWallet();
        }
    }, []);

    useEffect(() => {
        if (provider?.on) {
            const handleAccountsChanged = (accounts) => {
                console.log("accountsChanged", accounts);
                if (accounts) setAccount(accounts[0]);
            };
        
            const handleChainChanged = (chainId) => {
                setChainId(chainId);
            };
        
            const handleDisconnect = () => {
                console.log("disconnect");
                disconnect();
            };
        
            provider.on("accountsChanged", handleAccountsChanged);
            provider.on("chainChanged", handleChainChanged);
            provider.on("disconnect", handleDisconnect);
        
            return () => {
              if (provider.removeListener) {
                provider.removeListener("accountsChanged", handleAccountsChanged);
                provider.removeListener("chainChanged", handleChainChanged);
                provider.removeListener("disconnect", handleDisconnect);
              }
            };
          }
    }, [provider]);

    return (
        <div>
            <span className="no-icon">Wallet Address: { account }</span>
            {!account ? (
                <Button className="btn-fill pull-right"
                        type="submit"
                        variant="info"
                        onClick={connectWallet}>
                    Connect Wallet
                </Button>
            ) : (
                <Button className="btn-fill pull-right"
                        type="submit"
                        variant="info"
                        onClick={disconnect}>
                    Disconnect
                </Button>
            )}
        </div>
    );
};

export default Login;