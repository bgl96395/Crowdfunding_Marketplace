# Decentralized Funding: Building and Deploying a Blockchain Crowdfunding DApp

Building and Deploying a Blockchain Supply Chain Management DApp

Revolutionize the way projects and ideas are funded with our blockchain crowdfunding DApp. This innovative platform leverages the power of blockchain technology to create a decentralized, transparent, and secure environment for fundraising.

Our crowdfunding DApp enables project creators to raise capital directly from a global pool of investors without the need for intermediaries. By utilizing smart contracts, the DApp automates the fundraising process, ensuring that funds are released to project creators only when predefined milestones are met, thereby increasing accountability and reducing the risk of fraud

# Crowdfunding Marketplace - Blockchain Final Project

**Course:** Blockchain 1  
**Team Members:** Nugmash Bigali, Abdibay Asylbek, Tugelbayev Aidyn  
**Date:** 8 February 2026


**Important:** This is learning project only! We use local Hardhat network for development and testing, not real blockchain.

## What We Built

### Smart Contracts (Solidity)
We created two main contracts:

**1. CrowdFunding.sol** - Main contract that handles:
 Creating new campaigns with title, description, goal, deadline
 Accepting donations from users
 Sending ETH directly to campaign owner
 Tracking all donors and donation amounts
 Minting reward tokens to donors

**2. Reward_Tokens.sol** - ERC-20 token contract:
 Token name: "Reward Tokens" 
 Symbol: "RWD"
 Automatically mints tokens when someone donates
 1 ETH donation = 100 RWD tokens
 Only CrowdFunding contract can mint new tokens

### Frontend (HTML/CSS/JavaScript)
 Connect MetaMask wallet
 View all active campaigns
 Create new campaign
 Donate to campaigns
 See your token balance

## Tech Stack

 Solidity ^0.8.20
 Hardhat (development environment & local blockchain)
 OpenZeppelin (for secure ERC-20 implementation)
 Ethers.js v6 (blockchain interaction)
 MetaMask (wallet)
 Node.js

## Installation & Setup

### Prerequisites
You need these installed first:
 Node.js (v16 or higher)
 MetaMask browser extension
 Git

### Steps

1. Clone the repository
```bash
git clone https://github.com/bgl96395/Crowdfunding_Marketplace.git
cd Crowdfunding_Marketplace
```

2. Install dependencies
```bash
npm install
```

3. Compile contracts
```bash
npx hardhat compile
```

## How to Use

### Setup Local Blockchain:

1. Start Hardhat local network in separate terminal:
```bash
npx hardhat node
```
This will give you 20 test accounts with 10000 ETH each.

2. Connect MetaMask to local network:
    Network Name: Hardhat Local
    RPC URL: http://127.0.0.1:8545
    Chain ID: 31337
    Currency Symbol: ETH

3. Import one of the test accounts to MetaMask using private key from terminal output

### For Campaign Creators:

1. Make sure MetaMask is connected to Hardhat local network
2. Click "Create Campaign" button
3. Fill in:
    Campaign title
    Description 
    Funding goal (in ETH)
    Deadline
    Image URL
4. Approve transaction in MetaMask
5. Wait for confirmation - your campaign is live!

### For Donors:

1. Connect MetaMask wallet
2. Browse available campaigns
3. Click on campaign you want to support
4. Enter donation amount
5. Approve transaction
6. You'll receive RWD tokens automatically (100 tokens per 1 ETH)

## Running the Application

### Start Local Blockchain

```bash
# Terminal 1 - Start Hardhat node
npx hardhat node

# You'll see output like:
# Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/
# 
# Accounts
# ========
# Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000 ETH)
# Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
```


### Deploy Contracts

```bash
# Terminal 2 - Deploy to local network
npx hardhat run scripts/deploy.js --network localhost
```

### Open Frontend

Simply open `frontend/index.html` in your browser or use live server.



## Smart Contract Functions

### CrowdFunding.sol

**createCampaign()**
 Creates new fundraising campaign
 Requires future deadline
 Returns campaign ID

**donateToCampaign(id)**
 Send ETH to specific campaign
 Transfers funds to campaign owner
 Mints reward tokens to donor

**getCampaigns()**
 Returns all campaigns
 Shows title, target, collected amount, deadline

**getDonators(id)**
 Returns list of donors for specific campaign
 Shows donation amounts

### Reward_Tokens.sol

**mint(address, amount)**
 Creates new tokens
 Only callable by CrowdFunding contract
 Used automatically when donations happen

Standard ERC-20 functions:
 transfer()
 balanceOf()
 approve()
 transferFrom()



### Local Deployment Steps:

1. Start Hardhat node:
```bash
npx hardhat node
```

2. Deploy contracts (in new terminal):
```bash
npx hardhat run scripts/deploy.js --network localhost
```

3. Copy deployed contract addresses and update frontend

### For Testing on Public Testnet (Optional):



**Note:** 
 We primarily use local Hardhat network for this project
 Never share your private key
 Keep .env file in .gitignore

## Team Contributions

**Nugmash Bigali:**
 Smart contract development
 Solidity coding
 Contract deployment
 Testing smart contracts

**Tugelbayev Aidyn:**
 Frontend development
 HTML/CSS design
 MetaMask integration
 JavaScript for blockchain interaction

**Abdibay Asylbek:**
 Testing and quality assurance
 Writing test cases
 Documentation
 Integration testing

## Challenges We Faced

1. **Understanding async/await in JavaScript** - took time to get web3 interactions working
2. **Gas optimization** - had to refactor some contract code to reduce gas costs
3. **MetaMask connection to local network** - configuring network settings and account imports
4. **Testing time-based functions** - learning to use Hardhat time helpers for deadline tests
5. **Contract deployment and frontend connection** - keeping track of deployed addresses

## What We Learned

 How to write secure smart contracts using Solidity
 ERC-20 token standard implementation
 Setting up and using Hardhat local blockchain
 Deploying and testing contracts locally
 Frontend integration with blockchain
 Writing proper tests for smart contracts
 Working with MetaMask wallet and local networks
 Git collaboration as a team
 Debugging blockchain transactions

## Future Improvements

If we had more time, we would add:
 Campaign finalization after deadline
 Refund mechanism if goal not reached
 Campaign categories and search
 User profiles
 Better UI/UX design
 Mobile responsive design

## Security Notes

 **Important:**
 This is educational project for learning purposes
 Runs on local Hardhat network only
 NOT audited - don't use in production
 Test with local accounts only
 Never expose private keys

## Resources We Used

 Solidity Documentation: https://docs.soliditylang.org
 OpenZeppelin Contracts: https://docs.openzeppelin.com/contracts
 Hardhat Docs: https://hardhat.org/docs
 Ethers.js Docs: https://docs.ethers.org
 MetaMask Documentation: https://docs.metamask.io
 YouTube tutorials 


## Contact

If you have questions about our project:
 GitHub Issues: https://github.com/bgl96395/Crowdfunding_Marketplace/issues

---
