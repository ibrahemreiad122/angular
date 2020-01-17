import { Component, OnInit } from "@angular/core";
import { myd } from "./test";
import { from } from "rxjs";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  test: myd = new myd("dsfsdf");
  onSubmit() {
    console.log(this.test.name);
  }
}
