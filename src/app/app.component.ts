import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  restItems: any;
  restItemsUrl = 'https://public-api.wordpress.com/rest/v1.1/sites/vocon-it.com/posts';

  constructor(private router: Router) {}

  ngOnInit() {
  }

  
}