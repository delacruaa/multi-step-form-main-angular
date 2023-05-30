import { Component, OnInit } from '@angular/core';
import { StepService } from './services/step.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'multi-step-form-main-angular';
  public currentStep!: number;
  constructor(private stepService: StepService) {}

  ngOnInit(): void {
    this.stepService.getCurrentStep().subscribe((data) => {
      this.currentStep = data;
    });
  }
}
