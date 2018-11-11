import { Component, OnInit, Input } from '@angular/core';
import { Case } from '../model/case';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  case: Case;
  saveStatus: string;
  restItems: any;
  restItemsUrl = 'http://localhost:8181/customers';

  constructor(private http:HttpClient) { 
    this.case = new Case();
  }

  ngOnInit() {
  }

  saveCase(){
    console.log("save case");
    this.getRestItems();
    this.saveStatus = "save successfully";
  }

  // Read all REST Items
  getRestItems(): void {
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          console.log(this.restItems);
        }
      )
  }

  // Rest Items Service: Read all REST Items
  restItemsServiceGetRestItems() {
    return this.http
      .get<any[]>(this.restItemsUrl)
      .pipe(map(data => data));
  }

}
