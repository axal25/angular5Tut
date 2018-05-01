import { Component, OnInit } from '@angular/core';

import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  animations: [

    trigger('animation_name', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true} ),

        query( ':enter',
          stagger('300ms', [
            animate('.6s ease-in',
              keyframes([
                style({opacity: 0, transform: 'translateY( -75% )', offset: 0 }),
                style({opacity: .5, transform: 'translateY( 35px )', offset: .3 }),
                style({opacity: 1, transform: 'translateY( 0 )', offset: 1 }),
              ])
            )
          ]),
          {optional: true} ),

        query( ':leave',
          stagger('300ms', [
            animate('.6s ease-in',
              keyframes([
                style({opacity: 1, transform: 'translate( 0 )', offset: 0 }),
                style({opacity: .5, transform: 'translate( 35px )', offset: .3 }),
                style({opacity: 0, transform: 'translate( -75% )', offset: 1 }),
              ])
            )
          ]),
          {optional: true} )
      ])
    ])

  ]
})
export class ContainerComponent implements OnInit {

  itemCount: number = 4; //nadpisane w ngOnInit()
  btnText: String = 'btnText_AddItem';
  placeholderText: String = 'placeholderText_ItemYouWantToBeAdded...';
  goalText: String = 'goalText_MyFirstLifeGoal';
  goals = [];
  currentIndex: number = 0;

  tmpString: String = '';

  constructor() { }

  ngOnInit() {
    this.itemCount = 1;
    this.itemCount = this.goals.length;
    this.currentIndex = 0;
    this.goals = [];

    this.tmpString = this.goalText;
    this.goalText = 'My first life goal.';
    this.addItem();
    this.goalText = this.tmpString;

    this.goals.push( 'My second life goal.');
    this.itemCount = this.goals.length;

    this.addItemWithParam( 'My third life goal.');

  }

  addItem() {
    this.goals.push( this.goalText );
    this.itemCount = this.goals.length;
    this.goalText = '';
  }

  addItemWithParam( newGoal: String = this.goalText ) {
    this.goals.push( newGoal );
    this.itemCount = this.goals.length;
    if( newGoal === this.goalText )
    {
      this.goalText = '';
    }
    this.itemCount = this.goals.length;
  }

  removeItem( index: number = 0 ) {
    // this.goals.pop( index ); //nie przyjmuje parametru
    // this.goals.pop(); //usuwa ostatni element na liscie
    this.goals.splice( index, 1 );
    this.itemCount = this.goals.length;
  }

}
