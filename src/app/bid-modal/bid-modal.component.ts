import { Component,Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-bid-modal',
  templateUrl: './bid-modal.component.html',
  styleUrls: ['./bid-modal.component.css']
})
export class BidModalComponent{

    constructor(
      public dialogRef: MatDialogRef<BidModalComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) {
        console.log("inside bid modal")
      }
  
    onNoClick(): void {
      this.dialogRef.close();
    }

}
