## Ganache Customization

```bash
>>> ganache-cli -h ... -p ... -i ...
```

generic syntax

|       variable       | flag |     default      |
| :------------------: | :--: | :--------------: |
|       hostname       |  -h  | http://localhost |
|         port         |  -p  |       8545       |
|      network id      |  -i  |       5777       |
|      gas price       |  -g  |     20 Gway      |
|   block gas limit    |  -l  |   4700000 ish    |
|      block time      |  -b  |  0 (auto-mine)   |
|         time         |  -t  |   ISO standard   |
|    # of addresses    |  -a  |        10        |
| # of ETH per address |  -e  |     100 ETH      |

---

### Block Gas Limit -g

the sun of all the gas used in each transaction in block must not exceed block gas limit.

ethereum: 8 milion
ganache: 4.7 million

---

### Block Time -b

average time for block to be mined.
useful if you want to test the user interface (progress bar or loading screen)

ethereum 15sec
ganache 0 (automine)

---

### Deterministic -d

ganache will us the same seed phrase to generate all addresses.
addresses generated will always be the same.

(no parameters)

```bash
>>> ganache-cli -d
```

---

### Add Account --account

generte addresses based on private key

```bash
>>> ganache-cli --account="0xcf8efda6bc7593061be34fab4c8e1b1b68d92ee059a499f96ef5a1e0fcef5034,100"
```

ganache will run with default parameters. this new account will be added to the initial 10s

---

### Mnemonic -m

control how you accounts (addresses) are generated.
you have to provide 15 words

useful if you want to synchronize ganache-cli to metamask

---

### Seed -s

generate addressed base on any random string input

---

### Time -t

useful if you are testing time-dependent smart contracts
uses ISO standard
