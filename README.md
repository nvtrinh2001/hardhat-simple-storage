# Hardhat Simple Storage

A simple storage application using Hardhat framework.

# Getting Started

## Requirements

- git
- Node.js
- yarn

## Quick Start

```
git clone git@github.com:nvtrinh2001/hardhat-simple-storage.git
cd hardhat-simple-storage
yarn
yarn hardhat
```

# Deploy

## Hardhat Deployment

```
yarn hardhat run scripts/deploy.js
```

## Local Deployment

Create your local hardhat network:

```
yarn hardhat node
```

And, **in a different terminal**:

```
yarn hardhat run scripts/deploy.js --network localhost
```

## Testnet or Mainnet

Setup environment variables:

- PRIVATE_KEY
- RINKEBY_RPC_URL

Get testnet ETH from faucets.chain.link

Deploy:

```
yarn hardhat run scripts/deploy.js --network rinkeby
```

# Test

## Run tests

```
yarn hardhat test
```

## Test coverage

```
yarn hardhat coverage
```

## Estimate Gas

Run:

```
yarn hardhat test
```

Gas estimation will be saved in `gas-report.txt`

# Verify on Etherscan

Get your API key from Etherscan, then deploying the application will automatically verify the contracts for you.
