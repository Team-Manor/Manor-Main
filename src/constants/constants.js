export const contract_address = "0x9C03F6C16956b56676bf3DC8Ab574B0aff607014";
export const contract_abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "postId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "commentId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "content",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "author",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint40",
        name: "timestamp",
        type: "uint40",
      },
    ],
    name: "CommentCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "commentId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "likes",
        type: "uint256",
      },
    ],
    name: "CommentLiked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "postId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "content",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "image",
        type: "string[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "author",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint40",
        name: "timestamp",
        type: "uint40",
      },
    ],
    name: "PostCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "postId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "likes",
        type: "uint256",
      },
    ],
    name: "PostLiked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "commentId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "comments",
    outputs: [
      {
        internalType: "uint256",
        name: "postId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "commentId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "likes",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "content",
        type: "string",
      },
      {
        internalType: "address",
        name: "author",
        type: "address",
      },
      {
        internalType: "uint40",
        name: "timestamp",
        type: "uint40",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_postId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_content",
        type: "string",
      },
    ],
    name: "createComment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_content",
        type: "string",
      },
      {
        internalType: "string[]",
        name: "_image",
        type: "string[]",
      },
      {
        internalType: "string",
        name: "_contractAddress",
        type: "string",
      },
    ],
    name: "createPost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllPosts",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "postId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "content",
            type: "string",
          },
          {
            internalType: "string[]",
            name: "image",
            type: "string[]",
          },
          {
            internalType: "address",
            name: "author",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "likes",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "commentCount",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "contractAddress",
            type: "string",
          },
          {
            internalType: "uint40",
            name: "timestamp",
            type: "uint40",
          },
        ],
        internalType: "struct Coterie.Post[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_postId",
        type: "uint256",
      },
    ],
    name: "getPostComments",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "postId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "commentId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "likes",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "content",
            type: "string",
          },
          {
            internalType: "address",
            name: "author",
            type: "address",
          },
          {
            internalType: "uint40",
            name: "timestamp",
            type: "uint40",
          },
        ],
        internalType: "struct Coterie.Comment[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_commentId",
        type: "uint256",
      },
    ],
    name: "likeComment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_postId",
        type: "uint256",
      },
    ],
    name: "likePost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "postId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "posts",
    outputs: [
      {
        internalType: "uint256",
        name: "postId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "content",
        type: "string",
      },
      {
        internalType: "address",
        name: "author",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "likes",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "commentCount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "contractAddress",
        type: "string",
      },
      {
        internalType: "uint40",
        name: "timestamp",
        type: "uint40",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];
export const nft_abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nftPrice",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
      {
        internalType: "address",
        name: "_creator",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "creator",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNftPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nftPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "safeMint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const bytecode = "0x60806040523480156200001157600080fd5b5060405162003ef738038062003ef7833981810160405281019062000037919062000468565b6040518060400160405280600981526020017f4d616e6f72506f737400000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f4d4e5000000000000000000000000000000000000000000000000000000000008152508160009081620000b4919062000724565b508060019081620000c6919062000724565b5050506000600760006101000a81548160ff02191690831515021790555062000104620000f86200016760201b60201c565b6200016f60201b60201c565b8260098190555080600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600b90816200015d919062000724565b505050506200080b565b600033905090565b6000600760019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6200025e8162000249565b81146200026a57600080fd5b50565b6000815190506200027e8162000253565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620002d9826200028e565b810181811067ffffffffffffffff82111715620002fb57620002fa6200029f565b5b80604052505050565b60006200031062000235565b90506200031e8282620002ce565b919050565b600067ffffffffffffffff8211156200034157620003406200029f565b5b6200034c826200028e565b9050602081019050919050565b60005b83811015620003795780820151818401526020810190506200035c565b60008484015250505050565b60006200039c620003968462000323565b62000304565b905082815260208101848484011115620003bb57620003ba62000289565b5b620003c884828562000359565b509392505050565b600082601f830112620003e857620003e762000284565b5b8151620003fa84826020860162000385565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620004308262000403565b9050919050565b620004428162000423565b81146200044e57600080fd5b50565b600081519050620004628162000437565b92915050565b6000806000606084860312156200048457620004836200023f565b5b600062000494868287016200026d565b935050602084015167ffffffffffffffff811115620004b857620004b762000244565b5b620004c686828701620003d0565b9250506040620004d98682870162000451565b9150509250925092565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200053657607f821691505b6020821081036200054c576200054b620004ee565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620005b67fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000577565b620005c2868362000577565b95508019841693508086168417925050509392505050565b6000819050919050565b600062000605620005ff620005f98462000249565b620005da565b62000249565b9050919050565b6000819050919050565b6200062183620005e4565b6200063962000630826200060c565b84845462000584565b825550505050565b600090565b6200065062000641565b6200065d81848462000616565b505050565b5b8181101562000685576200067960008262000646565b60018101905062000663565b5050565b601f821115620006d4576200069e8162000552565b620006a98462000567565b81016020851015620006b9578190505b620006d1620006c88562000567565b83018262000662565b50505b505050565b600082821c905092915050565b6000620006f960001984600802620006d9565b1980831691505092915050565b6000620007148383620006e6565b9150826002028217905092915050565b6200072f82620004e3565b67ffffffffffffffff8111156200074b576200074a6200029f565b5b6200075782546200051d565b6200076482828562000689565b600060209050601f8311600181146200079c576000841562000787578287015190505b62000793858262000706565b86555062000803565b601f198416620007ac8662000552565b60005b82811015620007d657848901518255600182019150602085019450602081019050620007af565b86831015620007f65784890151620007f2601f891682620006e6565b8355505b6001600288020188555050505b505050505050565b6136dc806200081b6000396000f3fe6080604052600436106101665760003560e01c80636871ee40116100d1578063a22cb4651161008a578063c87b56dd11610064578063c87b56dd146104bf578063e985e9c5146104fc578063eac989f814610539578063f2fde38b1461056457610166565b8063a22cb46514610442578063b88d4fde1461046b578063c49127741461049457610166565b80636871ee401461037757806370a0823114610381578063715018a6146103be5780638456cb59146103d55780638da5cb5b146103ec57806395d89b411461041757610166565b806323b872dd1161012357806323b872dd1461028f5780633f4ba83a146102b857806342842e0e146102cf5780635c975abb146102f85780635fd8c710146103235780636352211e1461033a57610166565b806301ffc9a71461016b57806302d05d3f146101a857806306fdde03146101d3578063081812fc146101fe578063095ea7b31461023b5780630d39fc8114610264575b600080fd5b34801561017757600080fd5b50610192600480360381019061018d919061238d565b61058d565b60405161019f91906123d5565b60405180910390f35b3480156101b457600080fd5b506101bd61066f565b6040516101ca9190612431565b60405180910390f35b3480156101df57600080fd5b506101e8610695565b6040516101f591906124dc565b60405180910390f35b34801561020a57600080fd5b5061022560048036038101906102209190612534565b610727565b6040516102329190612582565b60405180910390f35b34801561024757600080fd5b50610262600480360381019061025d91906125c9565b61076d565b005b34801561027057600080fd5b50610279610884565b6040516102869190612618565b60405180910390f35b34801561029b57600080fd5b506102b660048036038101906102b19190612633565b61088a565b005b3480156102c457600080fd5b506102cd6108ea565b005b3480156102db57600080fd5b506102f660048036038101906102f19190612633565b6108fc565b005b34801561030457600080fd5b5061030d61091c565b60405161031a91906123d5565b60405180910390f35b34801561032f57600080fd5b50610338610933565b005b34801561034657600080fd5b50610361600480360381019061035c9190612534565b610a49565b60405161036e9190612582565b60405180910390f35b61037f610acf565b005b34801561038d57600080fd5b506103a860048036038101906103a39190612686565b610b9f565b6040516103b59190612618565b60405180910390f35b3480156103ca57600080fd5b506103d3610c56565b005b3480156103e157600080fd5b506103ea610c6a565b005b3480156103f857600080fd5b50610401610c7c565b60405161040e9190612582565b60405180910390f35b34801561042357600080fd5b5061042c610ca6565b60405161043991906124dc565b60405180910390f35b34801561044e57600080fd5b50610469600480360381019061046491906126df565b610d38565b005b34801561047757600080fd5b50610492600480360381019061048d9190612854565b610d4e565b005b3480156104a057600080fd5b506104a9610db0565b6040516104b69190612618565b60405180910390f35b3480156104cb57600080fd5b506104e660048036038101906104e19190612534565b610dba565b6040516104f391906124dc565b60405180910390f35b34801561050857600080fd5b50610523600480360381019061051e91906128d7565b610dcc565b60405161053091906123d5565b60405180910390f35b34801561054557600080fd5b5061054e610e60565b60405161055b91906124dc565b60405180910390f35b34801561057057600080fd5b5061058b60048036038101906105869190612686565b610eee565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061065857507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610668575061066782610f71565b5b9050919050565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600080546106a490612946565b80601f01602080910402602001604051908101604052809291908181526020018280546106d090612946565b801561071d5780601f106106f25761010080835404028352916020019161071d565b820191906000526020600020905b81548152906001019060200180831161070057829003601f168201915b5050505050905090565b600061073282610fdb565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061077882610a49565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036107e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107df906129e9565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610807611026565b73ffffffffffffffffffffffffffffffffffffffff161480610836575061083581610830611026565b610dcc565b5b610875576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086c90612a7b565b60405180910390fd5b61087f838361102e565b505050565b60095481565b61089b610895611026565b826110e7565b6108da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d190612b0d565b60405180910390fd5b6108e583838361117c565b505050565b6108f2611475565b6108fa6114f3565b565b61091783838360405180602001604052806000815250610d4e565b505050565b6000600760009054906101000a900460ff16905090565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461098d57600080fd5b610995611556565b6000479050600081116109dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d490612b9f565b60405180910390fd5b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610a45573d6000803e3d6000fd5b5050565b600080610a55836115a0565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610ac6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610abd90612c0b565b60405180910390fd5b80915050919050565b610ad7611556565b600954341015610ae657600080fd5b6000610af260086115dd565b9050610afe60086115eb565b610b083382611601565b610b9c81600b8054610b1990612946565b80601f0160208091040260200160405190810160405280929190818152602001828054610b4590612946565b8015610b925780601f10610b6757610100808354040283529160200191610b92565b820191906000526020600020905b815481529060010190602001808311610b7557829003601f168201915b505050505061161f565b50565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610c0f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0690612c9d565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610c5e611475565b610c68600061168c565b565b610c72611475565b610c7a611752565b565b6000600760019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060018054610cb590612946565b80601f0160208091040260200160405190810160405280929190818152602001828054610ce190612946565b8015610d2e5780601f10610d0357610100808354040283529160200191610d2e565b820191906000526020600020905b815481529060010190602001808311610d1157829003601f168201915b5050505050905090565b610d4a610d43611026565b83836117b5565b5050565b610d5f610d59611026565b836110e7565b610d9e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d9590612b0d565b60405180910390fd5b610daa84848484611921565b50505050565b6000600954905090565b6060610dc58261197d565b9050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600b8054610e6d90612946565b80601f0160208091040260200160405190810160405280929190818152602001828054610e9990612946565b8015610ee65780601f10610ebb57610100808354040283529160200191610ee6565b820191906000526020600020905b815481529060010190602001808311610ec957829003601f168201915b505050505081565b610ef6611475565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610f65576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f5c90612d2f565b60405180910390fd5b610f6e8161168c565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610fe481611a8f565b611023576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161101a90612c0b565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff166110a183610a49565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000806110f383610a49565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061113557506111348185610dcc565b5b8061117357508373ffffffffffffffffffffffffffffffffffffffff1661115b84610727565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661119c82610a49565b73ffffffffffffffffffffffffffffffffffffffff16146111f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111e990612dc1565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611261576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161125890612e53565b60405180910390fd5b61126e8383836001611ad0565b8273ffffffffffffffffffffffffffffffffffffffff1661128e82610a49565b73ffffffffffffffffffffffffffffffffffffffff16146112e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112db90612dc1565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46114708383836001611aea565b505050565b61147d611026565b73ffffffffffffffffffffffffffffffffffffffff1661149b610c7c565b73ffffffffffffffffffffffffffffffffffffffff16146114f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114e890612ebf565b60405180910390fd5b565b6114fb611af0565b6000600760006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa61153f611026565b60405161154c9190612582565b60405180910390a1565b61155e61091c565b1561159e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161159590612f2b565b60405180910390fd5b565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600081600001549050919050565b6001816000016000828254019250508190555050565b61161b828260405180602001604052806000815250611b39565b5050565b61162882611a8f565b611667576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161165e90612fbd565b60405180910390fd5b806006600084815260200190815260200160002090816116879190613189565b505050565b6000600760019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61175a611556565b6001600760006101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25861179e611026565b6040516117ab9190612582565b60405180910390a1565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611823576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161181a906132a7565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161191491906123d5565b60405180910390a3505050565b61192c84848461117c565b61193884848484611b94565b611977576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161196e90613339565b60405180910390fd5b50505050565b606061198882610fdb565b60006006600084815260200190815260200160002080546119a890612946565b80601f01602080910402602001604051908101604052809291908181526020018280546119d490612946565b8015611a215780601f106119f657610100808354040283529160200191611a21565b820191906000526020600020905b815481529060010190602001808311611a0457829003601f168201915b505050505090506000611a32611d1b565b90506000815103611a47578192505050611a8a565b600082511115611a7c578082604051602001611a64929190613395565b60405160208183030381529060405292505050611a8a565b611a8584611d32565b925050505b919050565b60008073ffffffffffffffffffffffffffffffffffffffff16611ab1836115a0565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b611ad8611556565b611ae484848484611d9a565b50505050565b50505050565b611af861091c565b611b37576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b2e90613405565b60405180910390fd5b565b611b438383611ec0565b611b506000848484611b94565b611b8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b8690613339565b60405180910390fd5b505050565b6000611bb58473ffffffffffffffffffffffffffffffffffffffff166120dd565b15611d0e578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611bde611026565b8786866040518563ffffffff1660e01b8152600401611c00949392919061347a565b6020604051808303816000875af1925050508015611c3c57506040513d601f19601f82011682018060405250810190611c3991906134db565b60015b611cbe573d8060008114611c6c576040519150601f19603f3d011682016040523d82523d6000602084013e611c71565b606091505b506000815103611cb6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611cad90613339565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611d13565b600190505b949350505050565b606060405180602001604052806000815250905090565b6060611d3d82610fdb565b6000611d47611d1b565b90506000815111611d675760405180602001604052806000815250611d92565b80611d7184612100565b604051602001611d82929190613395565b6040516020818303038152906040525b915050919050565b6001811115611eba57600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614611e2e5780600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611e269190613537565b925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614611eb95780600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611eb1919061356b565b925050819055505b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611f2f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f26906135eb565b60405180910390fd5b611f3881611a8f565b15611f78576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f6f90613657565b60405180910390fd5b611f86600083836001611ad0565b611f8f81611a8f565b15611fcf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611fc690613657565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46120d9600083836001611aea565b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60606000600161210f846121ce565b01905060008167ffffffffffffffff81111561212e5761212d612729565b5b6040519080825280601f01601f1916602001820160405280156121605781602001600182028036833780820191505090505b509050600082602001820190505b6001156121c3578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816121b7576121b6613677565b5b0494506000850361216e575b819350505050919050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000831061222c577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000838161222257612221613677565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310612269576d04ee2d6d415b85acef8100000000838161225f5761225e613677565b5b0492506020810190505b662386f26fc10000831061229857662386f26fc10000838161228e5761228d613677565b5b0492506010810190505b6305f5e10083106122c1576305f5e10083816122b7576122b6613677565b5b0492506008810190505b61271083106122e65761271083816122dc576122db613677565b5b0492506004810190505b6064831061230957606483816122ff576122fe613677565b5b0492506002810190505b600a8310612318576001810190505b80915050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61236a81612335565b811461237557600080fd5b50565b60008135905061238781612361565b92915050565b6000602082840312156123a3576123a261232b565b5b60006123b184828501612378565b91505092915050565b60008115159050919050565b6123cf816123ba565b82525050565b60006020820190506123ea60008301846123c6565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061241b826123f0565b9050919050565b61242b81612410565b82525050565b60006020820190506124466000830184612422565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561248657808201518184015260208101905061246b565b60008484015250505050565b6000601f19601f8301169050919050565b60006124ae8261244c565b6124b88185612457565b93506124c8818560208601612468565b6124d181612492565b840191505092915050565b600060208201905081810360008301526124f681846124a3565b905092915050565b6000819050919050565b612511816124fe565b811461251c57600080fd5b50565b60008135905061252e81612508565b92915050565b60006020828403121561254a5761254961232b565b5b60006125588482850161251f565b91505092915050565b600061256c826123f0565b9050919050565b61257c81612561565b82525050565b60006020820190506125976000830184612573565b92915050565b6125a681612561565b81146125b157600080fd5b50565b6000813590506125c38161259d565b92915050565b600080604083850312156125e0576125df61232b565b5b60006125ee858286016125b4565b92505060206125ff8582860161251f565b9150509250929050565b612612816124fe565b82525050565b600060208201905061262d6000830184612609565b92915050565b60008060006060848603121561264c5761264b61232b565b5b600061265a868287016125b4565b935050602061266b868287016125b4565b925050604061267c8682870161251f565b9150509250925092565b60006020828403121561269c5761269b61232b565b5b60006126aa848285016125b4565b91505092915050565b6126bc816123ba565b81146126c757600080fd5b50565b6000813590506126d9816126b3565b92915050565b600080604083850312156126f6576126f561232b565b5b6000612704858286016125b4565b9250506020612715858286016126ca565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61276182612492565b810181811067ffffffffffffffff821117156127805761277f612729565b5b80604052505050565b6000612793612321565b905061279f8282612758565b919050565b600067ffffffffffffffff8211156127bf576127be612729565b5b6127c882612492565b9050602081019050919050565b82818337600083830152505050565b60006127f76127f2846127a4565b612789565b90508281526020810184848401111561281357612812612724565b5b61281e8482856127d5565b509392505050565b600082601f83011261283b5761283a61271f565b5b813561284b8482602086016127e4565b91505092915050565b6000806000806080858703121561286e5761286d61232b565b5b600061287c878288016125b4565b945050602061288d878288016125b4565b935050604061289e8782880161251f565b925050606085013567ffffffffffffffff8111156128bf576128be612330565b5b6128cb87828801612826565b91505092959194509250565b600080604083850312156128ee576128ed61232b565b5b60006128fc858286016125b4565b925050602061290d858286016125b4565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061295e57607f821691505b60208210810361297157612970612917565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b60006129d3602183612457565b91506129de82612977565b604082019050919050565b60006020820190508181036000830152612a02816129c6565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b6000612a65603d83612457565b9150612a7082612a09565b604082019050919050565b60006020820190508181036000830152612a9481612a58565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b6000612af7602d83612457565b9150612b0282612a9b565b604082019050919050565b60006020820190508181036000830152612b2681612aea565b9050919050565b7f436f6e747261637420686173206e6f2045746865722062616c616e636520746f60008201527f2077697468647261770000000000000000000000000000000000000000000000602082015250565b6000612b89602983612457565b9150612b9482612b2d565b604082019050919050565b60006020820190508181036000830152612bb881612b7c565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000612bf5601883612457565b9150612c0082612bbf565b602082019050919050565b60006020820190508181036000830152612c2481612be8565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000612c87602983612457565b9150612c9282612c2b565b604082019050919050565b60006020820190508181036000830152612cb681612c7a565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000612d19602683612457565b9150612d2482612cbd565b604082019050919050565b60006020820190508181036000830152612d4881612d0c565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000612dab602583612457565b9150612db682612d4f565b604082019050919050565b60006020820190508181036000830152612dda81612d9e565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000612e3d602483612457565b9150612e4882612de1565b604082019050919050565b60006020820190508181036000830152612e6c81612e30565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000612ea9602083612457565b9150612eb482612e73565b602082019050919050565b60006020820190508181036000830152612ed881612e9c565b9050919050565b7f5061757361626c653a2070617573656400000000000000000000000000000000600082015250565b6000612f15601083612457565b9150612f2082612edf565b602082019050919050565b60006020820190508181036000830152612f4481612f08565b9050919050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b6000612fa7602e83612457565b9150612fb282612f4b565b604082019050919050565b60006020820190508181036000830152612fd681612f9a565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261303f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82613002565b6130498683613002565b95508019841693508086168417925050509392505050565b6000819050919050565b600061308661308161307c846124fe565b613061565b6124fe565b9050919050565b6000819050919050565b6130a08361306b565b6130b46130ac8261308d565b84845461300f565b825550505050565b600090565b6130c96130bc565b6130d4818484613097565b505050565b5b818110156130f8576130ed6000826130c1565b6001810190506130da565b5050565b601f82111561313d5761310e81612fdd565b61311784612ff2565b81016020851015613126578190505b61313a61313285612ff2565b8301826130d9565b50505b505050565b600082821c905092915050565b600061316060001984600802613142565b1980831691505092915050565b6000613179838361314f565b9150826002028217905092915050565b6131928261244c565b67ffffffffffffffff8111156131ab576131aa612729565b5b6131b58254612946565b6131c08282856130fc565b600060209050601f8311600181146131f357600084156131e1578287015190505b6131eb858261316d565b865550613253565b601f19841661320186612fdd565b60005b8281101561322957848901518255600182019150602085019450602081019050613204565b868310156132465784890151613242601f89168261314f565b8355505b6001600288020188555050505b505050505050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000613291601983612457565b915061329c8261325b565b602082019050919050565b600060208201905081810360008301526132c081613284565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000613323603283612457565b915061332e826132c7565b604082019050919050565b6000602082019050818103600083015261335281613316565b9050919050565b600081905092915050565b600061336f8261244c565b6133798185613359565b9350613389818560208601612468565b80840191505092915050565b60006133a18285613364565b91506133ad8284613364565b91508190509392505050565b7f5061757361626c653a206e6f7420706175736564000000000000000000000000600082015250565b60006133ef601483612457565b91506133fa826133b9565b602082019050919050565b6000602082019050818103600083015261341e816133e2565b9050919050565b600081519050919050565b600082825260208201905092915050565b600061344c82613425565b6134568185613430565b9350613466818560208601612468565b61346f81612492565b840191505092915050565b600060808201905061348f6000830187612573565b61349c6020830186612573565b6134a96040830185612609565b81810360608301526134bb8184613441565b905095945050505050565b6000815190506134d581612361565b92915050565b6000602082840312156134f1576134f061232b565b5b60006134ff848285016134c6565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000613542826124fe565b915061354d836124fe565b925082820390508181111561356557613564613508565b5b92915050565b6000613576826124fe565b9150613581836124fe565b925082820190508082111561359957613598613508565b5b92915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b60006135d5602083612457565b91506135e08261359f565b602082019050919050565b60006020820190508181036000830152613604816135c8565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000613641601c83612457565b915061364c8261360b565b602082019050919050565b6000602082019050818103600083015261367081613634565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fdfea26469706673582212209056786a448767cce694c318140d6187bea48a2a854f8c64607155f41dd9e6e764736f6c63430008110033"