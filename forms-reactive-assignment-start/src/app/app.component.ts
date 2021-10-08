import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

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
      "projectName": new FormControl(null, Validators.required, this.forbiddenProjects.bind(this)),
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "projectStatus": new FormControl(null)
    })
  }

  onSubmit() {
    console.log(this.submitForm);
  }

  // forbiddenProjects(control: FormControl): {[s: string]: boolean}{
  //   if(this.forbiddenProjectName.indexOf(control.value) !== -1){
  //     return {'nameIsForbidden': true};
  //   }
  //   return null;
  // }

  forbiddenProjects(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(this.forbiddenProjectName.indexOf(control.value) !== -1){
          resolve({'nameIsForbidden': true});
        }else{
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
