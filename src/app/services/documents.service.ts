import { Injectable } from '@angular/core';
import { DataDocumentsService } from './dataDocuments.service';
import { Document } from 'src/app/models/document.model';

@Injectable()
export class DocumentsService{
    constructor(private dataDocumentsService: DataDocumentsService){}

    getDocuments(queryParams: any = {}){
        return this.dataDocumentsService.getDocumentsList(queryParams);
    }

    getDocument<Document>(id:number){
        return this.dataDocumentsService.getDocumentById(id);
    }

    updateDocument(id: number, customName: string, documentFile: File){
        return this.dataDocumentsService.updateDocument(id, customName, documentFile);
    }

    deleteDocument(id: number){
        return this.dataDocumentsService.deleteDocument(id);
    }

    storeDocument(customName: string, documentFile: File){
        return this.dataDocumentsService.storeDocument(customName, documentFile);
    }
}