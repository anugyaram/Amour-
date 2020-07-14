import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Injector } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule,  MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {MatMenuModule} from '@angular/material/menu';


import { AppComponent } from './app.component';


import 'hammerjs';
import { ShopNowComponent } from './shop-now/shop-now.component';
import { FlowerdetailComponent } from './flowerdetail/flowerdetail.component';
import { FooterComponent } from './footer/footer.component';
import { TrendingsComponent } from './trendings/trendings.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import { FlowerService } from './services/flower.service';
import { PromotionService } from './services/promotion.service';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';

import { baseURL } from './shared/baseurl';
import { HighlightDirective } from './directives/highlight.directive';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material';
import { LuxeryComponent } from './luxery/luxery.component';
import { CartComponent } from './cart/cart.component';
import { LuxeryCollectionComponent } from './luxery-collection/luxery-collection.component';





@NgModule({
  declarations: [
    AppComponent,
    ShopNowComponent,
    FlowerdetailComponent,
    FooterComponent,
    TrendingsComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    HighlightDirective,
    CarouselComponent,
    NavbarComponent,
    LuxeryComponent,
    CartComponent,
    LuxeryCollectionComponent

    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    HttpClientModule,
    MatSidenavModule,
    LayoutModule,
    MatIconModule,
    SlickCarouselModule,
    MatMenuModule

  ],
  providers: [
    FlowerService,
    PromotionService,
    ProcessHTTPMsgService,
    {provide: 'BaseURL', useValue: baseURL}
  ],
  entryComponents:[
    LoginComponent,
    CarouselComponent,
    CartComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const slider = createCustomElement(CarouselComponent, { injector });
    customElements.define('motley-slider', slider);
  }
 
  ngDoBootstrap() {}
  
 }

