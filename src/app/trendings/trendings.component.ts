import { Component, OnInit, Inject } from '@angular/core';
import { LeaderService} from '../services/leader.service';
import { Leader } from '../shared/leader';
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
  leaders:Leader[];
  leadErrMess: string;

  constructor(private leaderservice:LeaderService,@Inject('BaseURL') public baseURL) { }

  ngOnInit() {
    this.leaderservice.getLeaders().subscribe((leader) => this.leaders = leader, errmess => this.leadErrMess = <any>errmess);
  }


}
