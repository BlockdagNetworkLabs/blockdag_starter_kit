<div align="center">	
    <p>	
	    <a href="(https://www.morphl2.io/)">	
            <div>	
	           <img width="400px" src="https://blockdag.network/images/presskit/Logo.svg" align="center" alt="BlockDAG" />	
		    </div>
	    </a>
            <br>
    </p>
      
</div>


# Create BlockDAG App
A lightweight CLI tool to quickly scaffold BlockDAG blockchain applications with a clean, production-ready structure.


## Quick Start

```bash
npx create-blockdag-dapp@latest
```


This will guide you through creating a new BlockDAG application with a simple interactive prompt.


## Features


- **Streamlined Setup**: Create a complete BlockDAG application with a single command
- **Modern Stack**: Next.js frontend with Web3 integration
- **Dual Smart Contract Development**: Includes both Hardhat and Foundry environments
- **Production Ready**: Follows best practices for BlockDAG development
- **Lightweight**: Fast project creation with minimal dependencies


## Project Structure

```
your-app/
├── contracts/
│   ├── hardhat/
│   │   ├── contracts/     # Solidity smart contracts
│   │   ├── scripts/       # Deployment scripts
│   │   └── test/          # Contract tests
│   └── foundry/
│       ├── src/           # Solidity smart contracts
│       ├── test/          # Contract tests
│       └── script/        # Deployment scripts
└── frontend/
    ├── app/               # Next.js application
    ├── components/        # React components
    └── public/            # Static assets
```


## Environment Setup


After creating your project, you'll need to set up your environment:

### Frontend (.env.local)

```
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_wallet_connect_project_id
```

Get your WalletConnect Project ID at https://cloud.walletconnect.com/

### Smart Contracts (.env)

```
PRIVATE_KEY=your_private_key_here
RPC_URL=your_rpc_url_here
```


## Development Workflow

1. **Create your project**:
   ```bash
   npx @blockdag/create-blockdag-app@latest
   cd my-blockdag-app
   ```
   
2. **Set up the frontend**:
   ```bash
   cd frontend
   cp .env.example .env.local
   # Edit .env.local with your WalletConnect Project ID
   yarn install
   yarn dev
   ```
   
3. **Set up Foundry**:
   ```bash
   cd ../contracts/foundry
   cp .env.example .env
   # Edit .env with your private key and RPC URL
   forge build
   ```
   
4. **Set up Hardhat**:
   ```bash
   cd ../hardhat
   yarn install
   npx hardhat compile
   ```

5. **Add Foundry submodules** (optional but recommended):
   ```bash
   # From project root
   git submodule add https://github.com/OpenZeppelin/openzeppelin-contracts.git contracts/foundry/lib/openzeppelin-contracts
   git submodule add https://github.com/foundry-rs/forge-std contracts/foundry/lib/forge-std
   ```

## Smart Contract Development

### Using Hardhat

```bash
cd contracts/hardhat
npx hardhat compile
npx hardhat test
npx hardhat run scripts/deploy.ts --network primordial
```

### Using Foundry

```bash
cd contracts/foundry
forge build
forge test
forge script script/Deployer.s.sol --rpc-url $RPC_URL --broadcast --legacy --private-key $PRIVATE_KEY
```

## Frontend Development

```bash
cd frontend
yarn dev
```
