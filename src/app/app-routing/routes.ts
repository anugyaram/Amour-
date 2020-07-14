import { Routes } from '@angular/router';
import { FlowerdetailComponent } from '../flowerdetail/flowerdetail.component';
import { HomeComponent } from '../home/home.component';
import { TrendingsComponent } from '../trendings/trendings.component';
import { ContactComponent } from '../contact/contact.component';
import { ShopNowComponent } from '../shop-now/shop-now.component';
import { LuxeryComponent } from '../luxery/luxery.component';
import { LuxeryCollectionComponent } from '../luxery-collection/luxery-collection.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'shop-now', component: ShopNowComponent},
  { path: 'contactus', component: ContactComponent },
  { path: 'trendings', component: TrendingsComponent},
  { path: 'flowerdetail/:id',     component: FlowerdetailComponent },
  {path: '', redirectTo:'/home', pathMatch:'full'},
  { path: 'luxery',component: LuxeryComponent},
  { path: 'luxery-collection',component: LuxeryCollectionComponent}
];
