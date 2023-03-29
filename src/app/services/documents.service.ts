import { Injectable } from '@angular/core';
import { DataDocumentsService } from './dataDocuments.service';

@Injectable()
export class DocumentsService{
    constructor(private dataDocumentsService: DataDocumentsService){}

    getDocuments(){
        return this.dataDocumentsService.getDocumentsList();
    }

    getDocument(id:number){
        return this.dataDocumentsService.getDocumentById(id);
    }
}