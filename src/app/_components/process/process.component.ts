import { Component, Input, inject } from '@angular/core';
import { ChronoCommandsComponent } from '../chrono/chrono-commands/chrono-commands.component';
import { ProcessHeaderComponent } from '../process-header/process-header.component';
import { IonAccordion, IonAccordionGroup, IonFooter, IonTitle, IonToolbar, IonItem, IonLabel } from '@ionic/angular/standalone';
import { GroupComponent } from '../group/group.component';
import { Process } from 'src/app/_interface/process';
import { MeasureService } from 'src/app/_services/measure.service';
import { Measure } from 'src/app/_interface/measure.model';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss'],
  standalone: true,
  imports: [IonItem, ProcessHeaderComponent, ChronoCommandsComponent, GroupComponent, IonFooter, IonTitle, IonToolbar,
    IonAccordionGroup, IonAccordion, IonItem, IonLabel],
})
export class ProcessComponent {
  @Input() process!: Process;
  measures: Measure[] = [];
  private measureService = inject(MeasureService);
  ionViewWillEnter() {
    this.measureService.getMeasures(this.process.id).
      subscribe({
        next(value) {

        },
        error(err) {

        }
      })
  }
}
