import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProcessComponent } from '../_components/process/process.component';
import { Router, RouterLink } from '@angular/router';
import { ProcessService } from '../_services/process.service';
import { Observable } from 'rxjs';
import { Process } from '../_interface/process';

@Component({
  selector: 'app-chrono-main',
  templateUrl: './chrono-main.page.html',
  styleUrls: ['./chrono-main.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ProcessComponent, RouterLink]
})
export class ChronoMainPage {
  private processService = inject(ProcessService);
  public process$: Observable<Process> = new Observable();

  @Input()
  set id(processId: string) {
    this.process$ = this.processService.getProcessById(processId);
  }

}
