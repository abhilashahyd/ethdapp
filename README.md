This is an application to enable blockchain enthusiasts to get started with Distributed Applications in Angular.

The steps to get started:

1. Install Ganache for your OS. Ganache is a Personal blockchain for Ethereum development.

https://truffleframework.com/ganache

Once installed and launched it shows up the blocks with address as below
![Ganache](https://github.com/abhilashahyd/ethdapp/blob/master/transfer/src/assets/Ganache.PNG)

2. Compile the truffle contracts using below command.

````
truffle migrate --reset --network ganache --compile-all
````

2. The angular application resides in the transfer folder.

> cd transfer

> npm install

> ng serve --open


This should launch your angular application showing the ganache account details
![ETHDAPP](https://github.com/abhilashahyd/ethdapp/blob/master/transfer/src/assets/ethdapp.PNG)

You can get started with the transfer!
