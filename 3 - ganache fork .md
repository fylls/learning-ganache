<div align="center">

## Fork Feature

you can fork any blockhain, including mainnet ETH.
usful to test your smart contracts.

<br>

|  Service   |                             What it does                              |
| :--------: | :-------------------------------------------------------------------: |
| Etherscan  |       visualize transactions, get both contracts' ABI & Address       |
| Vanity ETH |               can generate random public & private keys               |
|   Infura   |         connects you to mainnet without having to run a node          |
| Ethplorer  | can explore data/info of erc20 token on ethereum, biggest holders etc |
  
</div>  

<br>

create a project on infura & get the URL
get on Ethplorer one of the top holder of a specific coi (Ex. DAI)
look for _EOA_ = externally owned address (user, not samrt contract)

u = unlocked, sending transaction without knowning secret key (works only locally)

```bash
>>> ganache-cli -f https://mainnet.infura.io/v3/d92cb59e649444a565b45f9b0ca -u 0x2d9ed32606eF38Edc02C5656eB3C0eD42E32
```

we had forked mainnet
we don't need to download all 200Gb since CLI only downloads the minimum ammount of data it requires for a transaction
no storage cost or problems!

interacting with DAI

DAI on etherscan > https://etherscan.io/token/0x6b175474e89094c44da98b954eedeac495271d0f

```javascript
const Web3 = require(web3)
const daiAbi = require(abi.js)

// DAI contract instance
const w3 = new Web3("http://localhost:8545")
const dai = new w3.eth.Contract(daiAddress, daiAbi)

// r = recipient
const rAddress = "0x3CA30524197ec696Eb3A7D07772E718c8aE83B41"

// u = unlocked
const uAddress = "0x3dfd23a6c5e8bbcfc9581d2e864a68feb6a076d3"

// DAI token
const daiAddress = "0x6b175474e89094c44da98b954eedeac495271d0f"

let uBalance, rBalance

uBalance = await dai.methods.balancOf(uAddress).call()
rBalance = await dai.methods.balancOf(rAddress).call()
console.log(`unlocked balance: ${uBalance}`)
console.log(`unlocked balance: ${rBalance}`)

// transfer money
await dai.methods.transfer(raddress, 1000).send({ from: unlokedAddress })

uBalance = await dai.methods.balancOf(uAddress).call()
rBalance = await dai.methods.balancOf(rAddress).call()
console.log(`unlocked balance: ${uBalance}`)
console.log(`unlocked balance: ${rBalance}`)
```
