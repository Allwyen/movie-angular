import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {

  mydata:Array<object> = [];

  constructor(private apiservice:ApiService) { }

  onSubmit(data:NgForm)
  {
    this.apiservice.insertmoviedata(data.value).subscribe((response:any)=>{
      console.log(response);
      this.mydata=response;
      if(response._id != null)
      {
        alert('Successfully Inserted');
      }
    });
  }

  ngOnInit() {
  }

}
