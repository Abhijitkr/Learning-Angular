import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  submitForm: FormGroup;

  ngOnInit() {
    this.submitForm = new FormGroup({
      "projectName": new FormControl(null),
      "email": new FormControl(null),
      "projectStatus": new FormControl(null)
    })
  }

  onSubmit() {
    console.log(this.submitForm);
    
  }
}
