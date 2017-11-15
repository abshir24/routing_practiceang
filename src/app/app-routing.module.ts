import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeattleComponent } from 'app/seattle/seattle.component';
import { DcComponent } from 'app/dc/dc.component';
import { SanjoseComponent } from 'app/sanjose/sanjose.component';
import { TexasComponent } from 'app/texas/texas.component';
import { ChicagoComponent } from 'app/chicago/chicago.component';
import { BurbankComponent } from 'app/burbank/burbank.component';

const routes: Routes = [
  { path: 'seattle', component: SeattleComponent },
  { path: 'dc', component: DcComponent },
  { path: 'sanjose', component: SanjoseComponent },
  { path: 'texas', component: TexasComponent },
  { path: 'chicago', component: ChicagoComponent },
  { path: 'burbank', component: BurbankComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
