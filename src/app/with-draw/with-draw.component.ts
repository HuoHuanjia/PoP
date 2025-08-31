import { Component } from '@angular/core';
import Web3 from 'web3';
import { abi1 } from '../abis';
declare let window: any;

@Component({
  selector: 'app-with-draw',
  imports: [],
  templateUrl: './with-draw.component.html',
  styleUrl: './with-draw.component.css'
})
export class WithDrawComponent {

  address = '0x0000000000000000000000000000000000000000';
  connect="Conecta tu Wallet";

  async connectWallet() {
    const accounts: string[] = await window.ethereum.request({ method: 'eth_requestAccounts' });
    this.address = accounts[0];
    this.connect = this.address;
  }

  async withdraw(amount: number){
    const SCpayreward = '0x059a1e1C2BB3d23d28e13acC00AA46340D74BEdA';
    window.web3 = await new Web3(window.ethereum);
    window.contract1 = await new window.web3.eth.Contract(abi1, SCpayreward);
    await window.contract1.methods.payReward(BigInt(amount)).send({ from: this.address });
  }

  

}
