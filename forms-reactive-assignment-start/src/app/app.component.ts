import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  submitForm: FormGroup;
  forbiddenProjectName = ['Test'];

  ngOnInit() {
    this.submitForm = new FormGroup({
      "projectName": new FormControl(null, [Validators.required, this.forbiddenProjects.bind(this)]),
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "projectStatus": new FormControl(null)
    })
  }

  onSubmit() {
    console.log(this.submitForm);
  }

  forbiddenProjects(control: FormControl): {[s: string]: boolean}{
    if(this.forbiddenProjectName.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true};
    }
    return null;
  }
}
