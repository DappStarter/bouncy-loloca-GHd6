require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune shoulder name renew sad mistake gloom another army gesture'; 
let testAccounts = [
"0x56389c7a0779bcfdc7075e8fd70de467faf440c577e0493663bcf12027d7810c",
"0x63acd71fbdb8f892423f93a8438e28f943b49758f0690e9fec59fcf130d391f6",
"0xd6514e88c658f0c01ed80e95ae9370d3e37317b6228aa1ba0d06cc9743f9e548",
"0xfe77914e4a8896594406e24ef9545cf4bc030008dd595f5290eeaee61c6f90d9",
"0xcd240f608981ec5783706bec01576a5ca0af6fd835d1178cd00c6dfe1cad051d",
"0x1483f18bf3b28f1df51f9c87a5d6725cd7b8d1cabf388eba458d60fd2fafd4f6",
"0x7e85b6b7547153ad5bae38d2a9d16442b7d205d8018c7e353dbb1c588cfe48cc",
"0xbb5cccf36f1daabf74ef93911ff3e902483b1f281dc663487b65f9979508a5d6",
"0xe51f3f641c8c411bb02f94e45a9a109b1120ce90c59715fe5ad6650a991c5adc",
"0x6a543b1c736bff3ae63832eb364989aa38104a339f732802113b0bf9a5b46df0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

