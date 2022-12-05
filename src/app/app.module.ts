import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { AuthGuard } from './guards/auth.guard';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateSentenceComponent } from './pages/create-sentence/create-sentence.component';
import { ListSentencesComponent } from './pages/list-sentences/list-sentences.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';


const appRoutes: Routes = [
  { path: '', component: ListSentencesComponent },
  { path: 'create-sentence', component: CreateSentenceComponent, canActivate: [AuthGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateSentenceComponent,
    ListSentencesComponent,
    FooterComponent,
    AdminComponent,
    UploadFileComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
