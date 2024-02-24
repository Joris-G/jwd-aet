import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StepService {
  private steps: any[] = []
  createNewStep() {
    this.steps = [...this.steps, 1]
  }
}
