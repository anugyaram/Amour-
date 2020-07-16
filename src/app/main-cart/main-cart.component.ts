import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { PaymentComponent } from '../payment/payment.component';

@Component({
  selector: 'app-main-cart',
  templateUrl: './main-cart.component.html',
  styleUrls: ['./main-cart.component.scss']
})
export class MainCartComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MainCartComponent>, public dialog: MatDialog) { }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  payment(){
    this.dialog.open(PaymentComponent);
  }


}
