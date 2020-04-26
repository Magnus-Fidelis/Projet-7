import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuListService {

  private menuSource = new BehaviorSubject('default');
  currentMenu = this.menuSource.asObservable();

  constructor() { }

  setMenuSelected(menu: string) {
    this.menuSource.next(menu)
	}

}
