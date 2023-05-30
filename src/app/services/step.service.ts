import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StepService {
  public currentStep = new BehaviorSubject<number>(1);
  getCurrentStep() {
    return this.currentStep.asObservable();
  }
}
