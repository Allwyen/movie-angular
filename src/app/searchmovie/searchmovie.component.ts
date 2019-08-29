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

  status=false;

  onSubmit(data:NgForm)
  {
    this.apiservice.searchmoviedata(data.value).subscribe((response:Array<object>)=>{
      console.log(response);
      this.mydata=response;

      if(response.length>0)
      {
        this.status=true;
      }
      else{
        alert('Movie Data Not Available');
      }
    });
  }

  ngOnInit() {
  }

}
