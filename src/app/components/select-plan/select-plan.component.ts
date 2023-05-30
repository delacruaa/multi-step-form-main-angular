import { Component, OnInit } from '@angular/core';
import { IPlan } from 'src/app/models/IPlan';
import { SelectPlanService } from 'src/app/services/select-plan.service';
import { StepService } from 'src/app/services/step.service';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.scss'],
})
export class SelectPlanComponent implements OnInit {
  public currentPlan!: IPlan;
  public isMonthly!: boolean;
  constructor(
    private selectPlanService: SelectPlanService,
    private stepService: StepService
  ) {}

  public plans = [
    { title: 'Arcade', img: 'assets/icon-arcade.svg', price: 9 },
    { title: 'Advanced', img: 'assets/icon-advanced.svg', price: 12 },
    { title: 'Pro', img: 'assets/icon-pro.svg', price: 15 },
  ];
  ngOnInit() {
    this.selectPlanService.getCurrentPlan().subscribe((data) => {
      this.currentPlan = data;
    });
    this.selectPlanService.getIsMonthly().subscribe((data) => {
      this.isMonthly = data;
    });
  }
  handleChangeCheckbox() {
    this.selectPlanService.isMonthly.next(!this.isMonthly);
  }

  handleChangePlan(plan: string) {
    this.plans.forEach((item) => {
      if (item.title == plan) {
        this.selectPlanService.currentPlan.next(item);
      }
    });
  }

  secondStep() {
    this.stepService.currentStep.next(3);
  }

  previousStep() {
    this.stepService.currentStep.next(1);
  }
}
