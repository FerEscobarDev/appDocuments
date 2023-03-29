import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Document } from 'src/app/models/document.model';
import { DocumentsService } from 'src/app/services/documents.service';

@Component({
  selector: 'app-list-documents',
  templateUrl: './list-documents.component.html',
})
export class ListDocumentsComponent {
    
    customName: string = 'Foto mía';
    originalName: string = 'foto.png';
    extension: string = 'png';
    mimeType: string = 'image';

    documents: Document[] = [];

    constructor(private documentsService: DocumentsService, private router: Router){}

    ngOnInit(): void {
        this.documentsService.getDocuments()
            .subscribe((documents: Document[]) => {
                this.documents = documents;
            });
    }

    deleteDocument(id: number){
        this.documentsService.deleteDocument(id)
            .subscribe(() => {
                this.documentsService.getDocuments()
                    .subscribe((documents: Document[]) => {
                        this.documents = documents;
                    });
            });
    }
}
