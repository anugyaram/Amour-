import { Component, OnInit, Inject , HostListener} from '@angular/core';
import { Flower } from '../shared/flower';
import { FlowerService } from '../services/flower.service';
import { MatDialog, MatDialogRef,MatDialogConfig } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-luxery-collection',
  templateUrl: './luxery-collection.component.html',
  styleUrls: ['./luxery-collection.component.scss']
})
export class LuxeryCollectionComponent implements OnInit {

  flowers: Flower[];
  errMess: string;

  constructor(private flowerService: FlowerService, @Inject('BaseURL') public baseURL, public dialog: MatDialog) {}


  ngOnInit() {
    this.flowerService.getFlowers().subscribe((flowers) => this.flowers = flowers, errmess => this.errMess = <any>errmess);
  }

 info(){
  this.dialog.open(CartComponent, {width: '350px', height: '220px'});
 }

}
