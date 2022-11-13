import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { CreateSentenceComponent } from './pages/create-sentence/create-sentence.component';
import { ListSentencesComponent } from './pages/list-sentences/list-sentences.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  { path: '', component: ListSentencesComponent },
  { path: 'create-sentence', component: CreateSentenceComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateSentenceComponent,
    ListSentencesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
