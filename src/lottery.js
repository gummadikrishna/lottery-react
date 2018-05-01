import web3 from "./web3";

const address = "0x9DB67Daa31bf44EeaDbd6200196fFd413309672d";

const abi = [{
    constant: true,
    inputs: [],
    name: "listEntries",
    outputs: [{
      name: "",
      type: "address[]"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "manager",
    outputs: [{
      name: "",
      type: "address"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "enterDraw",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "pickWinner",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [{
      name: "",
      type: "uint256"
    }],
    name: "players",
    outputs: [{
      name: "",
      type: "address"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  }
];

export default new web3.eth.Contract(abi, address);
