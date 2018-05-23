import { Component } from '@angular/core';
import { EthcontractService } from './ethcontract.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements ngOnInit {
  title = 'your first DApp in Angular';
  accounts:any;
  transferFrom = '0x0';
  balance ='0 ETH';
  transferTo='';
  amount=0;
  remarks='';

  constructor( private ethcontractService: EthcontractService ){
    this.initContract();
  }

  initContract = () => {
    let that = this;
    this.ethcontractService.getAccountInfo().then(function(acctInfo){
      console.log(acctInfo);
      that.transferFrom = acctInfo.fromAccount;
      that.balance = acctInfo.balance;
    }).catch(function(error){
      console.log(error);
    });

  };

  transferEther(event){
    let that = this;

    this.ethcontractService.transferEther(
      this.transferFrom,
      this.transferTo,
      this.amount,
      this.remarks
    ).then(function(){
      that.initContract();
    }).catch(function(error){
      console.log(error);
      that.initContract();
    });
  }
}
