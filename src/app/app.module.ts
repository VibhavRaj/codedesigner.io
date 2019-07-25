import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { CourseComponent } from './dashboard/course/course.component';
import { OneComponent } from './mainpage/one/one.component';
import { JavscriptComponent } from './dashboard/javscript/javscript.component';
import { NavComponent } from './mainpage/nav/nav.component';
import { FooterComponent } from './mainpage/footer/footer.component';
import { RxjsComponent } from './dashboard/project/rxjs/rxjs.component';
import { DemoprojectComponent } from './dashboard/demoproject/demoproject.component';
import { ContactusComponent } from './mainpage/contactus/contactus.component';
import { AboutusComponent } from './mainpage/aboutus/aboutus.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    OneComponent,
    JavscriptComponent,
    NavComponent,
    FooterComponent,
    RxjsComponent,
    DemoprojectComponent,
    ContactusComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
