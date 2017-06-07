import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent }   from './common/footer/footer.component';
import { AboutComponent }   from './about/about.component';
import { HomeComponent }   from './home/home.component';
import { TermsComponent }   from './terms/terms.component';
import { PaymentsComponent }   from './payments/payments.component';
import { FaqComponent }   from './faq/faq.component';
import { DeliveryComponent }   from './delivery/delivery.component';
import { ProfileComponent }   from './customer/profile/profile.component';
import { CartComponent }   from './cart/cart.component';
import { CategoryComponent }   from './product/category/category.component';
import { SubCategoryComponent }   from './product/subCategory/subCategory.component';
import { SellerComponent }   from './product/seller/seller.component';
import { DetailsComponent }   from './product/details/details.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'terms', component: TermsComponent},
    { path: 'payments', component: PaymentsComponent},
    { path: 'faq', component: FaqComponent},
    { path: 'delivery', component: DeliveryComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'cart', component: CartComponent},
    { path: 'category', component: CategoryComponent},
    { path: 'items', component: SubCategoryComponent},
    { path: 'seller', component: SellerComponent},
    { path: 'details', component: DetailsComponent},
    { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    TermsComponent,
    PaymentsComponent,
    FaqComponent,
    DeliveryComponent,
    ProfileComponent,
    CartComponent,
    CategoryComponent,
    SubCategoryComponent,
    SellerComponent,
    DetailsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
