import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  // "HTML elements in your template that match this selector become instances of the component."
  // https://angular.io/guide/what-is-angular#components
  templateUrl: './navbar.component.html',
  // "An HTML template that instructs Angular how to render the component."
  // https://angular.io/guide/what-is-angular#components
  styleUrls: ['./navbar.component.css'],
  // "optional set of CSS styles that define the appearance of the template's HTML elements"
  // https://angular.io/guide/what-is-angular#components
})
export class NavbarComponent implements OnInit {	// code that drives the component behavior
  // https://angular.io/guide/what-is-angular#components

  constructor() { }

  ngOnInit(): void {
  }
}
