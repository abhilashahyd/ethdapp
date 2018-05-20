import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'your first DApp in Angular';
  transferFrom = '0x08239087848932748932';
  balance ='37.9 ETH';
  transferTo='';
  amount=0;
  remarks='';

  transferEther(e){
    alert('hello');
    console.log(this.transferTo);
  }
}
