import { Component } from "@angular/core";
import { TestObService } from "./test-ob.service";
import { from } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map, filter } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  arr;
  constructor(public emp: TestObService) {
    this.emp.addData().subscribe(req => (this.arr = req));
    console.log(this.arr);
  }
}
