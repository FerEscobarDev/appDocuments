import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Document } from 'src/app/models/document.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataDocumentsService{
    constructor(private httpClient: HttpClient){}

    getDocumentsList(queryParams: any = {}){
        return this.httpClient.get<Document[]>('https://localhost:44361/api/v1/document', { params: queryParams });
    }

    getDocumentById(id:number){
        return this.httpClient.get<Document>(`https://localhost:44361/api/v1/document/${id}`);
    }

    updateDocument(id: number, customName: string, documentFile: File){
        const formData = new FormData();
        formData.append('customName', customName);
        formData.append('documentFile', documentFile);
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Accept': 'application/json'
            })
        }

        return this.httpClient.put(`https://localhost:44361/api/v1/document/${id}`, formData, httpOptions);
    };

    deleteDocument(id: number){
        return this.httpClient.delete(`https://localhost:44361/api/v1/document/${id}`);
    }

    storeDocument(customName: string, documentFile: File){
        const formData = new FormData();
        formData.append('customName', customName);
        formData.append('documentFile', documentFile);
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Accept': 'application/json'
            })
        }

        return this.httpClient.post('https://localhost:44361/api/v1/document', formData, httpOptions);
    }
}