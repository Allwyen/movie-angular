import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewmovie',
  templateUrl: './viewmovie.component.html',
  styleUrls: ['./viewmovie.component.css']
})
export class ViewmovieComponent implements OnInit {

  mydata:Array<object> = [];

  constructor(private apiservice:ApiService) { }

  ngOnInit() {
    this.apiservice.viewmoviedata().subscribe((response:Array<object>)=>{
      console.log(response);
      this.mydata=response;
    })
  }

}
