import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialcomponentModule } from '../materialcomponent/materialcomponent.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, AppRoutingModule, MaterialcomponentModule],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedModule {}
