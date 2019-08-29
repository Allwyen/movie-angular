import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  insertmoviedata(data)
  {
    return this.http.post("https://movie-nodejs.herokuapp.com/insertmovie",data);
  }

  viewmoviedata()
  {
    return this.http.get("https://movie-nodejs.herokuapp.com/viewmovie");
  }

  searchmoviedata(data)
  {
    return this.http.post("https://movie-nodejs.herokuapp.com/searchmovie",data);
  }
}
