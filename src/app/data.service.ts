import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class DataService {

  private goals = new BehaviorSubject<any> (['The data_service initial goal', 'The data_service 2nd goal', 'The data_service 3rd goal']);
  goal: Observable<any> = this.goals.asObservable(); //goal = podajemy obserwator na goals'y //goal: Observable< Response > =...

  constructor() { }

  changeGoal( goal ) {
    this.goals.next( goal );
  }

}
