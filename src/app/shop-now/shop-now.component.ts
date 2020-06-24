import { Component, OnInit, Inject } from '@angular/core';
import { Flower } from '../shared/flower';
import { FlowerService } from '../services/flower.service';
import { flyInOut,expand} from '../animations/app.animation';


@Component({
  selector: 'app-shop-now',
  templateUrl: './shop-now.component.html',
  styleUrls: ['./shop-now.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations:[
    flyInOut(),
    expand()
  ]
})
export class ShopNowComponent implements OnInit {

  flowers: Flower[];
  errMess: string;

  
  constructor(private flowerService: FlowerService, @Inject('BaseURL') public baseURL) { }

  ngOnInit() {
    this.flowerService.getFlowers().subscribe((flowers) => this.flowers = flowers, errmess => this.errMess = <any>errmess);
  }

}