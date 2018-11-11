import {Component,Inject} from '@angular/core';
import { Case } from '../model/case';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { BidModalComponent } from '../bid-modal/bid-modal.component';

@Component({
  selector: 'app-case-tables',
  templateUrl: './case-tables.component.html',
  styleUrls: ['./case-tables.component.css']
})
export class CaseTablesComponent {
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  displayedColumns: string[] = ['caseId', 'customerName', 'vehicleInfo', 'origin','destination','comments'];
  customerSample: Case[] = [
    {caseId: "1", customerName: "test1", vehicleInfo:"info1",origin:"Swizz",destination:"Thailand",comments:null},
    {caseId: "2", customerName: "test2", vehicleInfo:"info2",origin:"Swizz",destination:"Thailand",comments:null}
  ];
  dataSource = this.customerSample;
  panelOpenState = false;


  onClickRow(row:any): void {
    const dialogRef = this.dialog.open(BidModalComponent, {
      width: '250px',
      data: {row}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
