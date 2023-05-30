import { Component, OnInit } from '@angular/core';
import { IAddons } from 'src/app/models/IAddOns';
import { IPlan } from 'src/app/models/IPlan';
import { AddOnsService } from 'src/app/services/add-ons.service';
import { SelectPlanService } from 'src/app/services/select-plan.service';
import { StepService } from 'src/app/services/step.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  public selectPlan!: IPlan;
  public addOns!: IAddons[];
  public isMonthly!: boolean;
  public totalPrice = 0;
  public isConfirm = false;
  constructor(
    private selectPlanService: SelectPlanService,
    private stepService: StepService,
    private addOnsService: AddOnsService
  ) {}
  ngOnInit(): void {
    this.selectPlanService.getCurrentPlan().subscribe((data) => {
      this.selectPlan = data;
    });
    this.addOnsService.getAddons().subscribe((data) => {
      this.addOns = data;
    });
    this.selectPlanService.getIsMonthly().subscribe((data) => {
      this.isMonthly = data;
    });
    this.totalPrice =
      this.addOns
        .filter((item) => item.checked)
        .reduce((sum, item) => item.price + sum, 0) + this.selectPlan.price;
  }
  changePlan() {
    this.stepService.currentStep.next(2);
  }
  previousStep() {
    this.stepService.currentStep.next(3);
  }

  confirm() {
    this.isConfirm = true;
    setTimeout(() => {
      this.isConfirm = false;
    }, 1000);
  }
}
