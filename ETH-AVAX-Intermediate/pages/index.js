import {useState, useEffect} from "react";
import {ethers} from "ethers";
import atm_abi from "../artifacts/contracts/Assessment.sol/Assessment.json";
import Link from "next/link";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [atm, setATM] = useState(undefined);
  const [balance, setBalance] = useState(undefined);
  const [ownerName, setOwnerName] = useState(undefined);


  const contractAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

  const atmABI = atm_abi.abi;

  const getWallet = async() => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
      window.ethereum.on("accountsChanged", (accounts) => {
        handleAccount(accounts);
      });
    } 

    if (ethWallet) {
      const accounts = await ethWallet.request({method: "eth_accounts"});
      handleAccount(accounts);
    }
  }

  const handleAccount = (account) => {
    if (account) {
      console.log ("Account connected: ", account);
      setAccount(account);
    }
    else {
      console.log("No account found");
    }
  }

  const connectAccount = async() => {
    if (!ethWallet) {
      alert('MetaMask wallet is required to connect');
      return;
    }
  
    const accounts = await ethWallet.request({ method: 'eth_requestAccounts' });
    handleAccount(accounts);
    
    // once wallet is set we can get a reference to our deployed contract
    getATMContract();
  };

  const getATMContract = () => {
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const atmContract = new ethers.Contract(contractAddress, atmABI, signer);

    setATM(atmContract);
  }

  const getBalance = async() => {
    if (atm) {
      setBalance((await atm.getBalance()).toNumber());
    }
  }

 

  
  const checkOwner = async () => {
    if (atm) {
      const ownerName = await atm.checkOwner();
      setOwnerName(ownerName);
    }
    }
  

    function openLinkInNewTab() {
      // Define the URL you want to open in a new tab
      const urlToOpen = "http://localhost:8080/"; // Replace with the URL you want to open
    
      // Open the URL in a new tab
      window.open(urlToOpen, '_blank');
    }
  

  const initUser = () => {
    // Check to see if user has Metamask
    if (!ethWallet) {
      return <p>Please install Metamask in order to use this ATM.</p>
    }

    // Check to see if user is connected. If not, connect to their account
    if (!account) {
      return <button onClick={connectAccount}>Please connect your Metamask wallet</button>
    }

    if (balance == undefined) {
      getBalance();
    }

    return (
      <div>
        <p style={{fontFamily:"Sans-serif"}}>Your Account: {account}</p>
        <p style={{fontFamily:"Sans-serif"}}>Your Balance: {balance}</p>
        <p style={{fontFamily:"Sans-serif"}}>Owner Name: {ownerName}</p>

        <button style={{ backgroundColor: "cyan" }} onClick={openLinkInNewTab}>
  connet To Authentication
</button>
      </div>
    )
  }

  useEffect(() => {
    getWallet();
    checkOwner();
  }, []);

  return (
    <main className="container">
      <header>
        <h1>Blockchain Authentication</h1>
      </header>
      <div className="content">
        {initUser()}
      </div>
      <style jsx>{`
        .container {
          text-align: center;
        }

        .content {
          margin: 20px;
          padding: 20px;
          background-color: #f0f0f0;
          border-radius: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        button {
          margin-top: 10px;
          background-color: cyan;
          color: white;
          border: none;
          border-radius: 5px;
          padding: 10px 20px;
          cursor: pointer;
        }
        button:hover {
          background-color: #33aaff;
        }

        p {
          font-family: Sans-serif;
        }
      `}
      </style>
    </main>
  );
  
}