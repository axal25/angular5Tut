import { Component, OnInit } from '@angular/core';

import { DataService} from '../data.service';
//import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  goals = [];
  goalText: String = 'homeComponent_goalText';
  btnText: String = 'homeComponent_btnText';
  itemCount: number = 0;


  constructor( private dataFromService: DataService ) { }

  ngOnInit() {

    //goal = podajemy obserwator na goals'y
      //goal: Observable<any> = this.dataFromService.goal;
    //this.goal = this.dataFromService.goal;
    //this.goal.subscribe( res => this.goals = res );
    this.dataFromService.goal.subscribe( res => this.goals = res );

    //wywolujemy na DataService.goal.changeGoal( this.goals );
    this.dataFromService.changeGoal( this.goals );
    this.itemCount = this.goals.length;

  }

  addItem( newGoal: String = this.goalText ) {
    this.goals.push( newGoal );
    this.itemCount = this.goals.length;
    if( newGoal === this.goalText )
    {
      this.goalText = '';
    }
    this.dataFromService.changeGoal( this.goals );
    this.itemCount = this.goals.length;
  }

  removeItem( index: number = 0 ) {
    // this.goals.pop( index ); //nie przyjmuje parametru
    // this.goals.pop(); //usuwa ostatni element na liscie
    this.goals.splice( index, 1 );
    this.dataFromService.changeGoal( this.goals );
    this.itemCount = this.goals.length;
  }

}
