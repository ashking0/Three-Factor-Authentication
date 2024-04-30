Three-Phase-Authentication
This project implements a three-phase authentication system using Ethereum, Hardhat, and Webpack. The authentication system involves the installation of dependencies, deploying smart contracts, and launching the front-end. Follow the steps below to set up and run the code on your local machine.

Prerequisites
Node.js and npm installed on your machine.
Visual Studio Code or any preferred code editor.
Installation
git clone https://github.com/ashking0/Three-Phase-Authentication.git
npm install
Running the Authentication System

Install Dependencies
npm install
Launch Ethereum Node Open a second terminal in your code editor and run:
npx hardhat node
Deploy Smart Contracts Open a third terminal and run:
npx hardhat run --network localhost deploy/deploy.js
Launch Front-end Back in the first terminal, run:
npm run dev
This will launch the front-end of the three-phase authentication system. Open your browser and navigate to the specified address to interact with the authentication interface.

Ensure that you have Metamask or a similar Ethereum wallet extension installed to interact with the deployed smart contracts. Feel free to customize the code and explore the functionalities of the authentication system.

Author
ashking0
Feel free to modify and expand upon this README to include additional information or context specific to your project.

Three-Factor-Authentication/README.md at main · ashking0/Three-Factor-Authentication
