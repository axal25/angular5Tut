import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContainerComponent} from './container/container.component';

const routes: Routes = [
  { path: '',
    component: HomeComponent
  },
  { path: 'about/:id', /* multiple route parameters (' id ') are possible - like so path: 'about/:id/:whatever */
    component: AboutComponent
  },
  { path: 'container',
    component: ContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
