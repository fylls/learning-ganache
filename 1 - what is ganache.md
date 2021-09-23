## Ganche-CLI

ganache is a local development of block chain that you use when you want to develop a decentralized application on the ethereum blockchain.

if you need to simulate blockahin there are many implementations of an ethereum client.

- geth (go)
- parity (rust)

Often they are long & hard to set up. Not very good for beginner

Ganache is an ethereum client designed for developers.

one of the big difference between ganache and these other ethereum clients is that we can actually only have one node in our network so you don't need to run several instance of ganache.

all the transaction that you send to ganache will be mined instantly (auto-mine feature).

a feature and that's very very convenient also the "block time", the time it takes to mine a block is a zero second, fantastic for testing purposes.

the blockchain that you use with ganache is only local to your computer so that's not connected to the main ethereum network so you can use this as a sandbox that's very convenient! you can do all the mistakes you want

point another difference is that ganache will generate for you ten addresses that are already unlocked so it means you don't need to have their private keys um and also it will treat on this address with 100 fake ether

<br>

```bash
>>> npm i -g ganache-cli
>>> ganache-cli
```

<br>

ganache CLI is not the same as ganache GUI

<br>

ganacheCLI &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ganacheGUI
<br>
commond line interface &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; graphic user interface
