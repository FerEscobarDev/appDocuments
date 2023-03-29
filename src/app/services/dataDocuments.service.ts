import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Document } from 'src/app/models/document.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataDocumentsService{

    url:string = 'https://localhost:44361/api/v1/document';

    constructor(private httpClient: HttpClient){}

    getDocumentsList(queryParams: any = {}){
        return this.httpClient.get<Document[]>(this.url, { params: queryParams });
    }

    getDocumentById(id:number){
        return this.httpClient.get<Document>(this.url + id);
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

        return this.httpClient.put(this.url + id, formData, httpOptions);
    };

    deleteDocument(id: number){
        return this.httpClient.delete(this.url + id);
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

        return this.httpClient.post(this.url, formData, httpOptions);
    }
}