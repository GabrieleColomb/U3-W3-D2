import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
registrationForm: FormGroup;

constructor(private formBuilder: FormBuilder) {
  this.registrationForm = this.formBuilder.group({
    nome: ['', Validators.required],
    cognome: ['', Validators.required],
    password: ['', Validators.required],
    confermaPassword: ['', Validators.required],
    genere: ['', Validators.required],
    immagineProfilo: [''],
    biografia: [''],
    username: ['', Validators.required]
  });
}

onSubmit() {
  if (this.registrationForm.valid) {
    console.log(this.registrationForm.value);
  }
}
}
