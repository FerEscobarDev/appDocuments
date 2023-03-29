import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDocumentComponent } from './documents/form-document/form-document.component';
import { ListDocumentsComponent } from './documents/list-documents/list-documents.component';

const routes: Routes = [
    { path: '', component: ListDocumentsComponent },
    { path: 'documents', component: ListDocumentsComponent },
    { path: 'document/create', component: FormDocumentComponent },
    { path: 'document/edit/:id', component: FormDocumentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
