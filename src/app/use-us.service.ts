import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UseUsService {
  constructor() {}
  welcomeMsg(component) {
    console.log("welcome in " + component);
  }
}
