import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  addr = 'New address';
  balance ='1002937.90$';
  transferTo='';
  amount=0;
  remarks='';

  transferEther(e){
    alert('hello');
    console.log(this.transferTo);
  }
}
