import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { StepService } from './step.service';

@Injectable({
  providedIn: 'root'
})
export class ChronoService {
  private stepService = Inject(StepService);
  private isRunning: BehaviorSubject<boolean> = new BehaviorSubject(false);
  start() {
    this.stepService.createNewStep();
    this.isRunning.next(true);
  }
}
