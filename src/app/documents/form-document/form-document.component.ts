import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Document } from 'src/app/models/document.model';
import { DocumentsService } from 'src/app/services/documents.service';

@Component({
  selector: 'app-form-document',
  templateUrl: './form-document.component.html',
})
export class FormDocumentComponent {

    customName:string;
    documentFile:File;
    document:Document;
    id:number;

    constructor(private documentsService: DocumentsService, 
                private router: Router,
                private route: ActivatedRoute
    ){}
    
    ngOnInit(){
        this.id = this.route.snapshot.params['id'];
        if(this.id) {
            this.documentsService.getDocument(this.id)
                .subscribe((document:Document) => {
                    this.document = document;
                    this.customName = document.customName;
                });
        }
    }

    saveDocument(){
        if(this.id){
            this.documentsService.updateDocument(this.id, this.customName, this.documentFile)
                .subscribe(() => {
                    this.router.navigate(['documents']);
                });
        }

        this.documentsService.storeDocument(this.customName, this.documentFile)
            .subscribe(() => {
                this.router.navigate(['documents']);
            });
    }

    onFileChange(event: Event): void {
        const target = event.target as HTMLInputElement;
        const file = target.files?.item(0);
    
        if (file) {
            this.documentFile = file;
        }
    }

}
