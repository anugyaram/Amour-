import { Component, OnInit, Inject } from '@angular/core';
import { Flower } from '../shared/flower';
import { FlowerService } from '../services/flower.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';


@Component({
  selector: 'app-luxery',
  templateUrl: './luxery.component.html',
  styleUrls: ['./luxery.component.scss']
})
export class LuxeryComponent implements OnInit {

  flowers: Flower[];
  errMess: string;

  constructor(private flowerService: FlowerService, @Inject('BaseURL') public baseURL, public dialog: MatDialog) { }

  ngOnInit() {
    this.flowerService.getFlowers().subscribe((flowers) => this.flowers = flowers, errmess => this.errMess = <any>errmess);
  }


  openCart() {
    this.dialog.open(CartComponent, {width:"500px"});
  }

}
