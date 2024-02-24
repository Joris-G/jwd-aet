import { Component, Input, OnInit } from '@angular/core';
import { Process } from 'src/app/_interface/process';
import { MilliInMinutesPipe } from 'src/app/_pipes/milli-in-minutes.pipe';

@Component({
  selector: 'app-process-header',
  templateUrl: './process-header.component.html',
  styleUrls: ['./process-header.component.scss'],
  standalone: true,
  imports: [MilliInMinutesPipe],
})
export class ProcessHeaderComponent {
  @Input() process!: Process;


}
