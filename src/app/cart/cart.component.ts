import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  user = {username: '', password: '', remember: false};

  constructor(public dialogRef: MatDialogRef<CartComponent>) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('User:', this.user );
    this.dialogRef.close();
  }
  
  closeDialog() {
    this.dialogRef.close();
  }
}
