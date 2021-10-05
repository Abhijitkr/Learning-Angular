import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultSubs = "Advanced";
  wasSubmitted = false;
  formData = {
    email: "",
    subscription: "",
    pass: ""
  }

  onSubmit(form: NgForm) {

    this.wasSubmitted = true;

    this.formData.email = form.value.email;
    this.formData.subscription = form.value.subscriptions;
    this.formData.pass = form.value.password;

    console.log(this.formData.email);
    console.log(this.formData.subscription);
    console.log(this.formData.pass);
  }
}


