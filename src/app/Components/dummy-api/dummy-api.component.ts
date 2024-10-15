import { Component } from '@angular/core';

@Component({
  selector: 'app-dummy-api',
  templateUrl: './dummy-api.component.html',
  styleUrls: ['./dummy-api.component.css']
})
export class DummyApiComponent {
  quote:any='';
  constructor(private dummyApiServices: DummyApiServices){}

  getQuote(){
    this.dummyApiServices.getQuote().subscribe((Response)) => {
      this.quote=response.quote;
      console.log(response);
    };


  }

}
