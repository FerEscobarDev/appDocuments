import { Component } from '@angular/core';

@Component({
  selector: 'app-list-documents',
  templateUrl: './list-documents.component.html',
})
export class ListDocumentsComponent {
    
    customName: string = 'Foto mía';
    originalName: string = 'foto.png';
    extension: string = 'png';
    mimeType: string = 'image';
    

}
