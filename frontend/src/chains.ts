import { Chain } from 'viem';

export const blockdagPrimordial = {
  id: 1043,
  name: 'BlockDAG Primordial',
  nativeCurrency: {
    decimals: 18,
    name: 'BlockDAG',
    symbol: 'BDAG',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.primordial.bdagscan.com'],
    },
    public: {
      http: ['https://rpc.primordial.bdagscan.com'],
    },
  },
  blockExplorers: {
    default: {
      name: 'BDAGScan',
      url: 'https://primordial.bdagscan.com',
    },
  },
} as const satisfies Chain; 