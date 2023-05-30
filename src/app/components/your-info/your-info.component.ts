import { Component, OnInit } from '@angular/core';

import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  NgForm,
} from '@angular/forms';
import { StepService } from 'src/app/services/step.service';
@Component({
  selector: 'app-your-info',
  templateUrl: './your-info.component.html',
  styleUrls: ['./your-info.component.scss'],
})
export class YourInfoComponent {
  public submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private stepService: StepService
  ) {}

  form = this.formBuilder.group({
    username: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(10)],
    ],
    email: ['', [Validators.required, Validators.email]],
    tel: ['', [Validators.required, Validators.minLength(11)]],
  });

  submitForm() {
    this.submitted = true;
    if (this.form.valid) {
      this.submitted = false;
      console.log(this.form.value.tel?.length);
      this.secondStep();
    }
  }

  secondStep() {
    this.stepService.currentStep.next(2);
  }
}
