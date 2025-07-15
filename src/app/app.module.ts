import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FranceComponent } from './Components/country-details/france/france.component';
import { GermanyComponent } from './Components/country-details/germany/germany.component';
import { SwitzerlandComponent } from './Components/country-details/switzerland/switzerland.component';
import { NetherlandComponent } from './Components/country-details/netherland/netherland.component';
import { AustraliaComponent } from './Components/country-details/australia/australia.component';
import { CanadaComponent } from './Components/country-details/canada/canada.component';
import { GreeceComponent } from './Components/country-details/greece/greece.component';
import { ItalyComponent } from './Components/country-details/italy/italy.component';
import { UsaComponent } from './Components/country-details/usa/usa.component';
import { DropdownComponent } from './Components/dropdown/dropdown.component';
import { AboutUSComponent } from './Components/about-us/about-us.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './Components/contact/contact.component';
import { MessagesComponent } from './Components/messages/messages.component';
import { AdminComponent } from './Components/admin/admin.component';
import { MediaUploadComponent } from './Components/media-upload/media-upload.component';
import { MediaDisplayComponent } from './Components/media-display/media-display.component';
import { FaqComponent } from './Components/faq/faq.component';
import { TermsConditionComponent } from './Components/terms-condition/terms-condition.component';
import { PrivacyComponent } from './Components/privacy/privacy.component';
import { RefundComponent } from './Components/refund/refund.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    FranceComponent,
    GermanyComponent,
    SwitzerlandComponent,
    NetherlandComponent,
    AustraliaComponent,
    CanadaComponent,
    GreeceComponent,
    ItalyComponent,
    UsaComponent,
    AboutUSComponent,
    ContactComponent,
    MessagesComponent,
    AdminComponent,
    MediaUploadComponent,
    MediaDisplayComponent,
    FaqComponent,
    TermsConditionComponent,
    PrivacyComponent,
    RefundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownComponent,
    FormsModule,
    HttpClientModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
