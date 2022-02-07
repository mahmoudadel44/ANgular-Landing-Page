import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MaterialcomponentModule } from 'src/app/materialcomponent/materialcomponent.module';
import { FeaturedComponent } from '../featured/featured.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesComponent } from '../categories/categories.component';
import { LatestComponent } from '../latest/latest.component';
import { PublicationsComponent } from '../publications/publications.component';
import { CustomersComponent } from '../customers/customers.component';
import { DownloadsComponent } from '../downloads/downloads.component';
import { CitiesadsComponent } from '../citiesads/citiesads.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactusComponent,
    FeaturedComponent,
    CategoriesComponent,
    LatestComponent,
    PublicationsComponent,
    CustomersComponent,
    DownloadsComponent,
    CitiesadsComponent,
  ],
  imports: [
    CommonModule,
    MaterialcomponentModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [HomeComponent, AboutComponent, ContactusComponent],
})
export class ViewModule {}
