const express = require('express');
const cors=require('cors');
const {Web3} = require('web3');
const dotenv=require('dotenv');

const app= express();
dotenv.config();

const {RPC_BASEp,adminHC_BASEp, ownerAd, privateKey_owner} = process.env;

const web3 = new Web3(RPC_BASEp);

const abiContractHC=[
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "cantCampaign",
		"outputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "objetivo",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "actividades",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "reward",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "cantVolunteers",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "creatorJobs",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "creators",
		"outputs": [
			{
				"internalType": "string",
				"name": "username",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "descripcion",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "red1",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "red2",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "red3",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "red4",
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
				"name": "",
				"type": "address"
			}
		],
		"name": "enterprises",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "descripcion",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "web",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "red1",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "red2",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "_creator",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_username",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_red1",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_red2",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_red3",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_red4",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_descripcion",
				"type": "string"
			}
		],
		"name": "registerCreator",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_enter",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_enterprise",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_descripcion",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_web",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_red1",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_red2",
				"type": "string"
			}
		],
		"name": "registerEnterprise",
		"outputs": [],
		"stateMutability": "nonpayable",
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
		"inputs": [
			{
				"internalType": "string",
				"name": "_title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_objetivo",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_actividades",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_reward",
				"type": "uint256"
			}
		],
		"name": "setCampaign",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_volunteer",
				"type": "address"
			}
		],
		"name": "setCreatorJobs",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_volunteer",
				"type": "address"
			}
		],
		"name": "setVolunteers",
		"outputs": [],
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

const contract1 = new web3.eth.Contract(abiContractHC, adminHC_BASEp);

app.use( 
    express.urlencoded({
        extended:true
    })
);

app.use( 
    express.json({
        type: "*/*"
    })
);

app.use(cors());

app.listen(3000, () => {
    console.log('Corriendo en puerto NFT');    
});

app.get('/APISC/ZN',(req,res)=>{	
    console.log('Api aca');
    res.send(JSON.stringify('Bienvenido al API de PoP'));
})

app.post('/APISC/setCampaign',async(req,res)=>{    
    const data=await setCampaign(req.body.title , req.body.objetivo, req.body.actividades, req.body.reward);		
    res.send(JSON.stringify(data));
})

app.post('/APISC/setVolunteers',async(req,res)=>{    
    const data=await setVolunteers(req.body.num, req.body.volunteers)
	res.send(JSON.stringify(data));
})

app.post('/APISC/setCreatorJobs',async(req,res)=>{    
    const data=await setCreatorJobs(req.body.num, req.body.volunteers)
	res.send(JSON.stringify(data));
})

app.post('/APISC/registerCreator',async(req,res)=>{
	//console.log(req.body.num);
    const data=await registerCreator(req.body.creator,req.body.username,req.body.red1,req.body.red2,req.body.red3,req.body.red4, req.body.descripcion);	
    res.send(JSON.stringify(data));
})

app.post('/APISC/registerEnterprise',async(req,res)=>{
	//console.log(req.body.num);
    const data=await registerEnterprise(req.body.creator,req.body.username, req.body.descripcion, req.body.web,req.body.red1,req.body.red2);	
    res.send(JSON.stringify(data));
})


async function setCampaign(title , objetivo, actividades, reward){ 
    const nonce = await web3.eth.getTransactionCount(ownerAd, 'pending'); // nonce starts counting from 0
    //const block = await web3.eth.getBlock('pending');  
	
    const transaction = {
        'from': ownerAd,
        'to': adminHC_BASEp,
        'value': 0,
        'gas': 30000000,
        'gasPrice': BigInt(15217716)+BigInt(10000),
        'nonce': nonce,
        'data': contract1.methods.setCampaign(title , objetivo, actividades, reward).encodeABI()
    };
    try{
		const signedTx = await web3.eth.accounts.signTransaction(transaction, privateKey_owner);  
		const res = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);  
		return res.transactionHash;
	}catch(e){
		return e;
	}
    
}

async function setVolunteers(num, volunteers){ 
    const nonce = await web3.eth.getTransactionCount(ownerAd, 'pending'); // nonce starts counting from 0
    //const block = await web3.eth.getBlock('pending');  
	
    const transaction = {
        'from': ownerAd,
        'to': adminHC_BASEp,
        'value': 0,
        'gas': 30000000,
        'gasPrice': BigInt(15217716)+BigInt(10000),
        'nonce': nonce,
        'data': contract1.methods.setVolunteers(num, volunteers).encodeABI()
    };
    try{
		const signedTx = await web3.eth.accounts.signTransaction(transaction, privateKey_owner);  
		const res = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);  
		return res.transactionHash;
	}catch(e){
		return e;
	}
    
}

async function setCreatorJobs(num, volunteers){ 
    const nonce = await web3.eth.getTransactionCount(ownerAd, 'pending'); // nonce starts counting from 0
    //const block = await web3.eth.getBlock('pending');  
	
    const transaction = {
        'from': ownerAd,
        'to': adminHC_BASEp,
        'value': 0,
        'gas': 30000000,
        'gasPrice': BigInt(15093945)+BigInt(10000),
        'nonce': nonce,
        'data': contract1.methods.setCreatorJobs(num, volunteers).encodeABI()
    };

    try{
		const signedTx = await web3.eth.accounts.signTransaction(transaction, privateKey_owner);  
		const res = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);  
		return res.transactionHash;
	}catch(e){
		return e;
	}
}

async function registerCreator(creator,username,red1,red2,red3,red4,descripcion){ 
    const nonce = await web3.eth.getTransactionCount(ownerAd, 'pending'); // nonce starts counting from 0
    //const block = await web3.eth.getBlock('pending');  
	
    const transaction = {
        'from': ownerAd,
        'to': adminHC_BASEp,
        'value': 0,
        'gas': 30000000,
        'gasPrice': BigInt(15093945)+BigInt(10000),
        'nonce': nonce,
        'data': contract1.methods.registerCreator(creator,username,red1,red2,red3,red4,descripcion).encodeABI()
    };

    try{
		const signedTx = await web3.eth.accounts.signTransaction(transaction, privateKey_owner);  
		const res = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);  
		return res.transactionHash;
	}catch(e){
		return e;
	}
}

async function registerEnterprise(creator,username,descripcion,web,red1,red2){ 
    const nonce = await web3.eth.getTransactionCount(ownerAd, 'pending'); // nonce starts counting from 0
    //const block = await web3.eth.getBlock('pending');  
	
    const transaction = {
        'from': ownerAd,
        'to': adminHC_BASEp,
        'value': 0,
        'gas': 30000000,
        'gasPrice': BigInt(15093945)+BigInt(10000),
        'nonce': nonce,
        'data': contract1.methods.registerEnterprise(creator,username,descripcion,web,red1,red2).encodeABI()
    };
    
    try{
		const signedTx = await web3.eth.accounts.signTransaction(transaction, privateKey_owner);  
		const res = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);  
		return res.transactionHash;
	}catch(e){
		return e;
	}
}

