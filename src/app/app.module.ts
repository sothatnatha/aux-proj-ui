import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroductionSectionComponent } from './introduction-section/introduction-section.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsSectionComponent } from './about-us-section/about-us-section.component';
import { GlobalCommunitySectionComponent } from './global-community-section/global-community-section.component';
import { ChooseusSectionComponent } from './chooseus-section/chooseus-section.component';
import { WorkGallerySectionComponent } from './work-gallery-section/work-gallery-section.component';
import { PagBrandsSectionComponent } from './pag-brands-section/pag-brands-section.component';
import { GrabPlanSectionComponent } from './grab-plan-section/grab-plan-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

 import { MatButtonModule } from '@angular/material/button';
import { SubscribePlanSectionComponent } from './subscribe-plan-section/subscribe-plan-section.component';
import { FreqeuntlyAskedSectionComponent } from './freqeuntly-asked-section/freqeuntly-asked-section.component'; 
import { AcordionModule } from './acordion/acordion.module';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    IntroductionSectionComponent,
    FooterComponent,
    AboutUsSectionComponent,
    GlobalCommunitySectionComponent,
    ChooseusSectionComponent,
    WorkGallerySectionComponent,
    PagBrandsSectionComponent,
    GrabPlanSectionComponent,
    SubscribePlanSectionComponent,
    FreqeuntlyAskedSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AcordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
