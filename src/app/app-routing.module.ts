import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AustraliaComponent } from './Components/country-details/australia/australia.component';
import { GermanyComponent } from './Components/country-details/germany/germany.component';
import { NetherlandComponent } from './Components/country-details/netherland/netherland.component';
import { FranceComponent } from './Components/country-details/france/france.component';
import { SwitzerlandComponent } from './Components/country-details/switzerland/switzerland.component';
import { GreeceComponent } from './Components/country-details/greece/greece.component';
import { ItalyComponent } from './Components/country-details/italy/italy.component';
import { CanadaComponent } from './Components/country-details/canada/canada.component';
import { UsaComponent } from './Components/country-details/usa/usa.component';
import { AboutUSComponent } from './Components/about-us/about-us.component';
import { ContactComponent } from './Components/contact/contact.component';
import { MessagesComponent } from './Components/messages/messages.component';
import { AdminComponent } from './Components/admin/admin.component';
import { MediaUploadComponent } from './Components/media-upload/media-upload.component';
import { MediaDisplayComponent } from './Components/media-display/media-display.component';
import { RefundComponent } from './Components/refund/refund.component';
import { PrivacyComponent } from './Components/privacy/privacy.component';
import { TermsConditionComponent } from './Components/terms-condition/terms-condition.component';
import { FaqComponent } from './Components/faq/faq.component';
const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'australia', component: AustraliaComponent },
   { path: 'germany', component: GermanyComponent },
   { path: 'netherlands', component: NetherlandComponent },
   { path: 'france', component: FranceComponent },
   { path: 'switzerland', component: SwitzerlandComponent },
   { path: 'greece', component: GreeceComponent },
   { path: 'italy', component: ItalyComponent },
   { path: 'canada', component: CanadaComponent },
   { path: 'usa', component: UsaComponent },
   { path: 'about-us', component: AboutUSComponent },
   { path: 'contact-us', component: ContactComponent }, 
   { path: 'messages', component: MessagesComponent },
   { path: 'admin', component: AdminComponent },
   { path: 'media-upload', component: MediaUploadComponent },
   { path: 'media-display', component: MediaDisplayComponent },
   { path: 'refund', component: RefundComponent },
   { path: 'privacy', component: PrivacyComponent },
   { path: 'terms-condition', component: TermsConditionComponent },
   { path: 'faq', component: FaqComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
