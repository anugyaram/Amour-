import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { flyInOut,expand } from '../animations/app.animation';


@Component({
  selector: 'app-trendings',
  templateUrl: './trendings.component.html',
  styleUrls: ['./trendings.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations:[
    flyInOut(),
    expand()
  ]
})
export class TrendingsComponent implements OnInit {

  
  ngOnInit() {
  }

}
