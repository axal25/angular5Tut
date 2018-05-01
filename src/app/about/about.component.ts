import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';

import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  id: number = -1;
  goals: any;
  itemCount: number = -1;

  constructor( private route: ActivatedRoute,
               private router: Router,
               private dataFromDataService: DataService)
  {
    this.route.params.subscribe(res => console.log( this.id = res.id ) );
  }

  ngOnInit() {
    this.dataFromDataService.goal.subscribe(res => { this.goals = res, this.itemCount = this.goals.length } );
  }

  sendMeHome() {
    this.router.navigate(['']);
  }

}
