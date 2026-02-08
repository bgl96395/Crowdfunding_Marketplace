const crowdfunding_contract_address = "0x67d269191c92Caf3cD7723F116c85e6E9bf55933"
const rewardtoken_contract_address="0xc5a5C42992dECbae36851359345FE25997F5C42d"

const crowdfunding_contract_ABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_rewardtokenAddress",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "campaigns",
		"outputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "target",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountCollected",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "image",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_target",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_deadline",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_image",
				"type": "string"
			}
		],
		"name": "createCampaign",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "donateToCampaign",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCampaigns",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "target",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "deadline",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "amountCollected",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "image",
						"type": "string"
					},
					{
						"internalType": "address[]",
						"name": "donators",
						"type": "address[]"
					},
					{
						"internalType": "uint256[]",
						"name": "donations",
						"type": "uint256[]"
					}
				],
				"internalType": "struct CrowdFunding.Campaign[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getDonators",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "numberOfCampaigns",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "reward_tokens",
		"outputs": [
			{
				"internalType": "contract Reward_Tokens",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
const rewardtokens_contract_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "allowance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "ERC20InsufficientAllowance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "ERC20InsufficientBalance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "approver",
				"type": "address"
			}
		],
		"name": "ERC20InvalidApprover",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC20InvalidReceiver",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "ERC20InvalidSender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "ERC20InvalidSpender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

let provider
let signer
let user_address
let crowdfunding_contract
let rewardtokens_contract

async function Connect_Wallet(){
    try{
        if(!window.ethereum){
            alert("MetaMask is not installed")
            return
        }

		provider = new ethers.BrowserProvider(window.ethereum)
		await provider.send("eth_requestAccounts",[])
		signer = await provider.getSigner()

		user_address = await signer.getAddress()

		document.getElementById("user_address").textContent = user_address
		const confirm = document.getElementById("confirm")
		confirm.style.color = "green"
		confirm.textContent = "Successfully connected"

		crowdfunding_contract = new ethers.Contract(crowdfunding_contract_address,crowdfunding_contract_ABI,signer)
		rewardtokens_contract = new ethers.Contract(rewardtoken_contract_address,rewardtokens_contract_ABI,provider)
		alert("MetaMask Connected")

		check_network()
		update_balance()
		load_campaigns()
    }catch(e){
		console.log(e)
        alert("Server Internal Errors")
		const confirm = document.getElementById("confirm")
		confirm.style.color = "red"
		confirm.textContent = "Failed to Connect"
    }
}

async function check_network(){
	try{
		const chain_id = await provider.send("eth_chainId",[])
		const allowed_chain_id = "0x7a69"

		if(chain_id !== allowed_chain_id){
			await window.ethereum.request({method:"wallet_switchEthereumChain",params:{chainId: allowed_chain_id}})
			alert("Switchced to Hardhat test network")
		}
		else{
			alert("Already on Hardhat")
		}

	}catch{
		alert("Switch the network to Hardhat test network")
	}
}

async function update_balance(){
	try{
		const balance_in_ETH = await provider.getBalance(user_address)
		const decimals = await rewardtokens_contract.decimals()
		const reward_tokens = await rewardtokens_contract.balanceOf(user_address)

		document.getElementById("ETH_balance").textContent = ethers.formatEther(balance_in_ETH)+" ETH"
		document.getElementById("reward_tokens").textContent= ethers.formatUnits(reward_tokens,decimals) + " RWD"
	}catch(e){
		console.log(e)
		alert("Failed to get Balance")
	}
}

async function Create_Campaign(){ 
	event.preventDefault()
	try{	
		if (!crowdfunding_contract || !signer){
			alert("MetaMask is not connected")
			return
		}

		const title = document.getElementById("title").value
		const description = document.getElementById("description").value
		const target_amount = document.getElementById("amount").value
		const deadline_date = document.getElementById("date").value
		const image = document.getElementById("image_url").value

		if(!title || !description || !target_amount || !deadline_date){
			alert("All required fields must filled")
			return
		}

		const deadline_timestamp = Math.floor(new Date(deadline_date).getTime() / 1000)
		if (deadline_timestamp < Math.floor(Date.now() / 1000)){
			alert("Deadline must be in Future")
			return
		}

		let tx
		if(image === ""){
			tx = await crowdfunding_contract.createCampaign(user_address,title,description,target_amount,deadline_timestamp,"")
		}
		else{
			tx = await crowdfunding_contract.createCampaign(user_address,title,description,target_amount,deadline_timestamp,image)
		}
		await tx.wait()
		alert("Campaign was succesfully Created")

		await load_campaigns()

		document.getElementById("title").value=""
		document.getElementById("description").value=""
		document.getElementById("amount").value=""
		document.getElementById("date").value=""
		document.getElementById("image_url").value=""
	}catch(e){
		console.log(e)
		alert("Failed to Create Campaign")
	}
}

document.querySelector("form").addEventListener("submit",Create_Campaign)

async function load_campaigns(){
	try{
		if(!crowdfunding_contract){
			alert("Metamask is not Connected")
			return
		}
		
		const campaigns = await crowdfunding_contract.getCampaigns()
		const container = document.getElementById("campaigns_container")
		container.innerHTML = ""

		const now = Math.floor(Date.now()/1000)

		campaigns.forEach((campaign,index)=>{
			const target_ETH = ethers.formatEther(campaign.target)
			const collected_ETH = ethers.formatEther(campaign.amountCollected)

			const deadline = Number(campaign.deadline)
			let isActive
			if(deadline <= now){
				isActive = false
			}else{
				isActive = true
			}

			let img
			if (campaign.image && campaign.image !== "") {
  				img = campaign.image
			} else {
  				img = "../img/no_photo.avif"
			}


			const deadline_date = new Date(Number(campaign.deadline) * 1000).toLocaleDateString()
			const campaign_card = document.createElement("div")
			campaign_card.classList.add("campaign_card")
			campaign_card.innerHTML = `
				<img src="${img}" alt="Campaign image" style="width: 100%; height: 200px;   border-top-left-radius:5px;    border-top-right-radius:5px;">
				<div style="padding:5px">
					<h3>${campaign.title}</h3><br>
					<p><strong>Description:</strong> ${campaign.description}</p>
					<p><strong>Owner:</strong> ${campaign.owner}</p>
					<p><strong>Target:</strong> ${target_ETH} ETH</p>
					<p><strong>Collected:</strong> ${collected_ETH} ETH</p>
					<p><strong>Deadline:</strong> ${deadline_date}</p>
					<p><strong>Status:</strong> ${isActive ? "<span style='color:green'>Active</span>" : "<span style='color:red'>Ended</span>"}</p>
					<input type="number" placeholder="ETH" id="donate_amount_${index}" ${isActive ? "" : "disabled"}>
					<button type="button" onclick="donate(${index})" style="width:100%;height:30px;border-radius:5px; margin-top:5px; border:0;background-color:white;box-shadow:1px 1px 3px black; font-size:16px">Donate</button>
					<button type="button" onclick="get_donators(${index})" style="width:100%;height:30px;border-radius:5px; margin-top:5px; border:0;background-color:white;box-shadow:1px 1px 3px black; font-size:16px">Show Donators</button>
					<div id="donators_${index}" style="margin-top:5px;"></div>
                </div>
			`
			container.appendChild(campaign_card)
		})
	}catch(e){
		console.log(e)
		alert("Failed to Load Campaigns")
	}
}

async function donate(id){
	try{
		const campaigns = await crowdfunding_contract.getCampaigns()
		const campaign = campaigns[id]
		const now = Math.floor(Date.now()/1000)

		if(now >= campaign.deadline){
			alert("This campaign has ended and cannot accept donations.")
			return
		}

		const input =document.getElementById(`donate_amount_${id}`)
		const amount = input.value

		if(!amount || amount <= 0){
			alert("Enter valid amount of ETH")
			return
		}

		const tx = await crowdfunding_contract.donateToCampaign(id,{value: ethers.parseEther(amount)})
		await tx.wait()
		alert("Donation was successful")
		input.value=""

		await update_balance()
		await load_campaigns()
	}catch(e){
		console.log(e)
		alert("Failed to Donate")
	}
}

async function get_donators(id){
	try{
		const [addresses, amounts] = await crowdfunding_contract.getDonators(id)
		const container = document.getElementById(`donators_${id}`)
		container.innerHTML = "<b>Donators:</b><br><br>"

		if(addresses.length === 0){
			container.innerHTML="<p>No donations yet</p>"
			return
		}

		const donation_of_the_same_account = {}
		addresses.forEach((addres,index) =>{
			const amount = ethers.formatEther(amounts[index])
			if(donation_of_the_same_account[addres]){
				donation_of_the_same_account[addres] += parseFloat(amount)
			}
			else{
				donation_of_the_same_account[addres] = parseFloat(amount)
			}
		})

		for (let address in donation_of_the_same_account) {
  			const total_amount = donation_of_the_same_account[address];
  			container.innerHTML += `
    			<p>
      				${address}:<br>
      				${total_amount} ETH
    			</p>
				<hr>
  			`
		}
	}catch(e){
		console.log(e)
		alert("Failed to get Donaters")
	}
}