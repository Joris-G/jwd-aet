import { Component, Input, OnInit } from '@angular/core';
import { StepComponent } from '../steps/step/step.component';
import { IonItem, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, StepComponent],
})
export class GroupComponent {
  @Input() group: any[] = [];

}