import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Document } from 'src/app/models/document.model';

@Injectable()
export class DataDocumentsService{
    constructor(private httpClient: HttpClient){}

    getDocumentsList(){
        return this.httpClient.get<Document[]>('https://localhost:44361/api/v1/document');
    }

    getDocumentById(id:number){
        return this.httpClient.get<Document>(`https://localhost:44361/api/v1/document/${id}`);
    }
}