import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadyComponent } from './ready/ready.component';
import { SumariComponent } from './sumari/sumari.component';  

const routes: Routes = [
  {path:'sumari', component: SumariComponent },
  {path:'ready/:id', component: ReadyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ SumariComponent]
