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
