import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListDocumentsComponent } from './documents/list-documents/list-documents.component';
import { FormDocumentComponent } from './documents/form-document/form-document.component';
import { DataDocumentsService } from './services/dataDocuments.service';
@NgModule({
  declarations: [
    AppComponent,
    ListDocumentsComponent,
    FormDocumentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataDocumentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
