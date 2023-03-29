import { Component } from '@angular/core';
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

    constructor(private documentsService: DocumentsService){}

    ngOnInit(): void {
        this.documentsService.getDocuments()
            .subscribe((documents: Document[]) => {
                this.documents = documents;
            });
    }
}
