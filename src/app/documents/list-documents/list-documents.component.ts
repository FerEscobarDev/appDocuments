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

    filterCustomName: string = '';
    filterOriginalName: string = '';
    filterExtension: string = '';
    filterMimeType: string = '';

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

    filterDocuments() {
        const queryParams: any = {};
    
        if (this.filterCustomName) {
            queryParams.customName = this.filterCustomName;
        }
        if (this.filterOriginalName) {
            queryParams.originalName = this.filterOriginalName;
        }
        if (this.filterExtension) {
            queryParams.extension = this.filterExtension;
        }
        if (this.filterMimeType) {
            queryParams.mimeType = this.filterMimeType;
        }
    
        this.documentsService.getDocuments(queryParams)
        .subscribe((documents: Document[]) => {
            this.documents = documents;
        });
    }

}
