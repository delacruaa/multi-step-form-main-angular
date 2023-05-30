import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPlan } from '../models/IPlan';

@Injectable({
  providedIn: 'root',
})
export class SelectPlanService {
  public currentPlan = new BehaviorSubject<IPlan>({
    title: 'Arcade',
    img: 'assets/icon-arcade.svg',
    price: 9,
  });
  public isMonthly = new BehaviorSubject<boolean>(false);

  getCurrentPlan() {
    return this.currentPlan.asObservable();
  }
  getIsMonthly() {
    return this.isMonthly.asObservable();
  }
}
