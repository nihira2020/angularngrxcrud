import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDocViewerModule } from 'ngx-doc-viewer';

@Component({
  selector: 'app-documentviewer',
  standalone: true,
  imports: [CommonModule,NgxDocViewerModule],
  templateUrl: './documentviewer.component.html',
  styleUrl: './documentviewer.component.css'
})
export class DocumentviewerComponent {
  documenturl='https://www.africau.edu/images/default/sample.pdf';
}
