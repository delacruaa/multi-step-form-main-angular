import { Component, OnInit } from '@angular/core';
import { StepService } from 'src/app/services/step.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
})
export class StepsComponent implements OnInit {
  public steps = ['YOUR INFO', 'SELECT PLAN', 'ADD-ONS', 'SUMMARY'];
  public currentStep!: string;
  constructor(private stepService: StepService) {}
  ngOnInit() {
    this.stepService.getCurrentStep().subscribe((data) => {
      this.steps.forEach((item, index) => {
        if (index + 1 == data) {
          this.currentStep = item;
        }
      });
    });
  }
}
