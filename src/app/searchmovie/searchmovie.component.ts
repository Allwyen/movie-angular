import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-searchmovie',
  templateUrl: './searchmovie.component.html',
  styleUrls: ['./searchmovie.component.css']
})
export class SearchmovieComponent implements OnInit {

  mydata:Array<object> = [];

  constructor(private apiservice:ApiService) { }

  onSubmit(data:NgForm)
  {
    this.apiservice.searchmoviedata(data.value).subscribe((response:Array<object>)=>{
      console.log(response);
      this.mydata=response;
    });
  }

  ngOnInit() {
  }

}
