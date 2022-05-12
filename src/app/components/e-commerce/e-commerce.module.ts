import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ECommerceRoutingModule } from './e-commerce-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { ArchwizardModule } from 'angular-archwizard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    WishlistComponent
  ],
  imports: [
    CommonModule,
    ECommerceRoutingModule,
    SharedModule,
    NgSelectModule,
    NgbModule,
    NgxGalleryModule,
    ArchwizardModule,
    FormsModule, ReactiveFormsModule
  ],
  providers:[
    ToastrService
  ]
})
export class ECommerceModule { }
