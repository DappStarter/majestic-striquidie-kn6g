require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope area off tragic educate ranch remind hub include entire front spy'; 
let testAccounts = [
"0xbbf235cdf0feb1b1099b984232ba1023a31719ddd8a4f14dad35b8dbf4acf993",
"0x6c7ce26637448b782969ea192ca0ec2c3729bbfa8281dd6e1e148a274c8602af",
"0xb5a27b620a25746e9bd99fd461a168b62a800b2538f6c46615ce0ec556db7f78",
"0x9c908b9b6db0e0408622cd38ea09bb2b52c6a60e1253c786f1339809f39e794a",
"0x0cb01375bbafc3c80a09fc082ca2246fb55363c9c83030f47db9c24e9f2f09f7",
"0x7a40d98424929f0cda3495e4452b70a6b814bc159225830f394d26db81d2cf77",
"0xce1fc61b078e4ec844e83d861416f03e1af25a113ab3f65852880994513da9ae",
"0x3ffa1fdc1d5d6a2e38f0ff114d39ed35c4b11991fceca42a9334241f043c4c8c",
"0x0e34e05fac888e28f842714483acef2fea194e91042d05fe4b0640a6171fffcc",
"0x5222a989e285bc3c4b689a2b0e11b3265d25d960674298020b1f72a2f041b642"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

