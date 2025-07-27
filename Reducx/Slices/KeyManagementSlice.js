import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const info = [
  {
    key: "0x4c0883a6910395bae3f0d5a0c1977fefb2c0a1feff2a9f3e470c7d1be0c6bca0",
    publicKey:
      "0x04a34bf9bd4a9c8124c3db3e36489d674c5b64b3b4912a2f2b414a290ac1e8e83b0a417ac3d92d3b6fc9d09b6b16e6e57e7ea4d81c1df5e3cc2048d4720f4e34aa",
    address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    id: uuidv4(),
    KeyTypes: "ETH",
  },
  {
    key: "L5BmYJv7tDaGxw2RzNeS4Y2V6ZWf9pQHnEVFf3bKH4UsSWQtkU4g",
    publicKey: "L5BmYJv7tDaGxw2RzNeS4Y2V6ZWf9pQHnEVFf3bKH4UsSWQtkU4g",
    address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    id: uuidv4(),
    KeyTypes: "BTC",
  },
  {
    key: "6PYLnyJBLdNhnjLKkY4UvB7DQb4QtRYN2eHcsYh8HgSoFSVLVYpVtuRrZj",
    publicKey:
      "0x04a34bf9bd4a9c8124c3db3e36489d674c5b64b3b4912a2f2b414a290ac1e8e83b0a417ac3d92d3b6fc9d09b6b16e6e57e7ea4d81c1df5e3cc2048d4720f4e34aa",
    address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    id: uuidv4(),
    KeyTypes: "Encrypted_keys",
  },
  {
    key: "abandon ability able about above absent absorb abstract absurd abuse access accident",
    publicKey:
      "04bfcabcfcb10a5a0cb4f3423cbfd3e6bde309f48696c814a6a8e8f80d7c7e7d0bcb7a75cb1cf80ffdf1b36e2a4d74c6ddbc8501c95b3b7fd7815e7b69d2c7c5fc",
    address: "1BoatSLRHtKNngkdXEeobR76b53LETtpyT",
    id: uuidv4(),
    KeyTypes: "SeedPhrase",
  },
];

export const KeyManagementSlice = createSlice({
  name: "manage",
  initialState: info,
  reducers: {
    add: (state, action) => {
      state.push({
        key: action.payload.key,
        publicKey: action.payload.publicKey,
        address: action.payload.address,
        id: uuidv4(),
        KeyTypes: action.payload.privateKeyTypes,
        edit: false,
      });
    },

    keydelete: (state, action) => {
      return state.filter((key) => key.id !== action.payload);
    },
  },
});

export const { add, keydelete } = KeyManagementSlice.actions;
export default KeyManagementSlice.reducer;
