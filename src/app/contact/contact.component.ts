import { Component, OnInit } from "@angular/core";
import { UseUsService } from "../use-us.service";
import { test } from "./test";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  constructor(private use: UseUsService) {}

  ngOnInit() {
    this.use.welcomeMsg("ContactComponent");
  }
  test: test = new test(455, "ali", "develper");
  onSubmit() {
    console.log(this.test);
  }
}
