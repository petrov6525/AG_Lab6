import { Component } from '@angular/core';
import { Person } from '../models/Person';

@Component({
  selector: 'app-resume-component',
  templateUrl: './resume-component.component.html',
  styleUrls: ['./resume-component.component.css']
})
export class ResumeComponentComponent {
  
  
  
  person:Person=new Person();
  
}
