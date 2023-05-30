import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IAddons } from '../models/IAddOns';

@Injectable({
  providedIn: 'root',
})
export class AddOnsService {
  public addons = new BehaviorSubject<IAddons[]>([
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
  ]);

  constructor() {}
  getAddons() {
    return this.addons.asObservable();
  }
}
