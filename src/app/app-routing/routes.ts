import { Routes } from '@angular/router';
import { FlowerdetailComponent } from '../flowerdetail/flowerdetail.component';
import { HomeComponent } from '../home/home.component';
import { VarietyComponent } from '../variety/variety.component';
import { ShopNowComponent } from '../shop-now/shop-now.component';
import { LuxeryComponent } from '../luxery/luxery.component';
import { LuxeryCollectionComponent } from '../luxery-collection/luxery-collection.component';
import { ShopOccassionComponent } from '../shop-occassion/shop-occassion.component';
import { DesignComponent } from '../design/design.component';


export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'shop-now', component: ShopNowComponent},
  { path: 'variety', component: VarietyComponent },
  { path: 'shop-occassion', component:  ShopOccassionComponent},
  { path: 'design', component: DesignComponent },
  { path: 'flowerdetail/:id',     component: FlowerdetailComponent },
  {path: '', redirectTo:'/home', pathMatch:'full'},
  { path: 'luxery',component: LuxeryComponent},
  { path: 'luxery-collection',component: LuxeryCollectionComponent}
];
