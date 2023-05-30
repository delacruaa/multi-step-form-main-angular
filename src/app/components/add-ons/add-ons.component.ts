import { Component, OnInit } from '@angular/core';
import { IAddons } from 'src/app/models/IAddOns';
import { AddOnsService } from 'src/app/services/add-ons.service';
import { SelectPlanService } from 'src/app/services/select-plan.service';
import { StepService } from 'src/app/services/step.service';

@Component({
  selector: 'app-add-ons',
  templateUrl: './add-ons.component.html',
  styleUrls: ['./add-ons.component.scss'],
})
export class AddOnsComponent implements OnInit {
  public isMonthly!: boolean;
  public addOns = [
    {
      title: 'Online service',
      subtitle: 'Access to multiplayer games',
      price: 1,
      checked: false,
    },
    {
      title: 'Larger storage',
      subtitle: 'Extra 1TB of cloud save',
      price: 2,
      checked: false,
    },
    {
      title: 'Customizable profile',
      subtitle: 'Custom theme on your profile',
      price: 3,
      checked: false,
    },
  ];

  constructor(
    private selectPlanService: SelectPlanService,
    private stepService: StepService,
    private addOnsService: AddOnsService
  ) {}
  ngOnInit(): void {
    this.selectPlanService.getIsMonthly().subscribe((data) => {
      this.isMonthly = data;
    });
    this.addOnsService.getAddons().subscribe((data) => {
      this.addOns = data;
    });
  }

  handleChangeCheckbox(plan: string) {
    this.addOns = this.addOns.map((item) => {
      if (item.title == plan) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    this.addOnsService.addons.next(this.addOns);
  }

  secondStep() {
    this.stepService.currentStep.next(4);
  }

  previousStep() {
    this.stepService.currentStep.next(2);
  }
}
