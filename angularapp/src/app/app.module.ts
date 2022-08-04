import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoComponent } from './Demo/demo.component';
import { CodemindComponent } from './codemind/codemind.component';
import { ChildComponent } from './child/child.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { Test1Directive } from './test1.directive';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { CustomDirective } from './customDirective/custom.directive';
import { HooksComponent } from './hooks/hooks.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { MustMatchDirective } from './must-match.directive';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NewsService } from './news.service';
import { DemoService } from './demo.service';
import { NotificationService } from './notification.service';
import {HttpClientModule} from '@angular/common/http';
import { UtilityService } from './services/utility.service';
import { CrudComponent } from './crud/crud.component';
import { PostService } from './services/post.service';
import { PostListComponent } from './post-list/post-list.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DigitcountPipe } from './pipes/digitcount.pipe';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { ChnagedetectionComponent } from './chnagedetection/chnagedetection.component';
import { LogintestComponent } from './logintest/logintest.component';
import { SerachpipePipe } from './pipes/serachpipe.pipe';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeFormComponent } from './employee-details/employee-form/employee-form.component';
import{DatePipe} from '@angular/common';
import { TestdirectiveDirective } from './customDirective/testdirective.directive';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    TestComponent,
    DemoComponent,
    CodemindComponent,
    ChildComponent,
    NgforComponent,
    NgswitchComponent,
    Test1Directive,
    NgstyleComponent,
    NgclassComponent,
    CustomDirective,
    HooksComponent,
    TemplateformComponent,
    MustMatchDirective,
    ReactiveformComponent,
    CrudComponent,
    PostListComponent,
    AboutusComponent,
    ContactusComponent,
    PagenotfoundComponent,
    DigitcountPipe,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    ChnagedetectionComponent,
    LogintestComponent,
    SerachpipePipe,
    EmployeeDetailsComponent,
    EmployeeFormComponent,
    TestdirectiveDirective
  ],
  
  providers: [NewsService, DemoService, NotificationService, UtilityService, PostService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
constructor() {
  console.log('AppModule constructor called')
}
 }
