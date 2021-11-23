import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { TeamComponent } from './pages/team/team.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'product',component:ProductComponent},
  {path:'about',component:AboutComponent},
  {path:'team',component:TeamComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
