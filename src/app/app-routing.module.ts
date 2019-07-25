import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CourseComponent } from "./dashboard/course/course.component";
import { OneComponent } from "./mainpage/one/one.component";
import { JavscriptComponent } from "./dashboard/javscript/javscript.component";
import { RxjsComponent } from "./dashboard/project/rxjs/rxjs.component";
import { DemoprojectComponent } from "./dashboard/demoproject/demoproject.component";
import { ContactusComponent } from "./mainpage/contactus/contactus.component";
import { AboutusComponent } from "./mainpage/aboutus/aboutus.component";

const routes: Routes = [
  { path: "", component: OneComponent },
  {
    path: "javascript",
    component: CourseComponent,
    children: [{ path: "", component: JavscriptComponent }]
  },
  {
    path: "rxjs",
    component: DemoprojectComponent,
    children: [{ path: "", component: RxjsComponent }]
  },
  { path: "about-us", component: AboutusComponent },
  { path: "contact-us", component: ContactusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
