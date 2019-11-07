import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  private view: Subject<number> = new Subject();
  public $view: Observable<number> = this.view.asObservable();

  constructor() { }

  setView(viewin: number){
    this.view.next(viewin);
  }
  
}
