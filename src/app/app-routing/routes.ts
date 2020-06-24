import { Routes } from '@angular/router';
import { FlowerdetailComponent } from '../flowerdetail/flowerdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { ShopNowComponent } from '../shop-now/shop-now.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'shop-now', component: ShopNowComponent},
  { path: 'contactus', component: ContactComponent },
  { path: 'aboutus', component: AboutComponent},
  { path: 'flowerdetail/:id',     component: FlowerdetailComponent },
  {path: '', redirectTo:'/home', pathMatch:'full'},
];
