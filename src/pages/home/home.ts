import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public form;
  public counter = 0;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: [null, Validators.required],
      gender: ['m'],
    });
  }
  submit() {
    console.log(this.form.value);
    this.counter++;
  }
}
