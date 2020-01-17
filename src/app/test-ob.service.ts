import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/Operators";
import { from } from "rxjs";
import { HomeComponent } from "./home/home.component";

@Injectable({
  providedIn: "root"
})
export class TestObService {
  url = "https://jsonplaceholder.typicode.com/todos/";
  constructor(private http: HttpClient) {}

  addData() {
    return this.http.get(this.url);
  }
}
