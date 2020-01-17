import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ErrorComponent } from "./error/error.component";
import { HomeComponent } from "./home/home.component";
import { SignComponent } from "./sign/sign.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  { path: "home", component: HomeComponent, pathMatch: "full" },
  {
    path: "about",
    component: AboutComponent,
    pathMatch: "full"
  },
  {
    path: "sign",
    component: SignComponent,
    pathMatch: "full"
  },
  {
    path: "contact/sign",
    redirectTo: "sign",
    pathMatch: "full"
  },
  {
    path: "contact",
    component: ContactComponent,
    pathMatch: "full"
  },
  {
    path: "**",
    component: ErrorComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
