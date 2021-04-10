import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListPageComponent } from './components/TodoListPage/TodoListPage.component';
//imports used while using mat-form-field
import  {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AroundSDGsCommunicationComponent } from './components/around-sdgs-communication/around-sdgs-communication.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes =[
  {path: '.', component:TodoListPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TodoListPageComponent,
    AroundSDGsCommunicationComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule
    
  ],
    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
