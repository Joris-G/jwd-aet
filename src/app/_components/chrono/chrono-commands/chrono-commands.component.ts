import { Component, Inject, OnInit } from '@angular/core';
import { IonButton, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { ChronoService } from 'src/app/_services/chrono.service';

@Component({
  selector: 'app-chrono-commands',
  templateUrl: './chrono-commands.component.html',
  styleUrls: ['./chrono-commands.component.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonButtons]
})
export class ChronoCommandsComponent {
  private chronoService = Inject(ChronoService);
  onStartClick() { this.chronoService.start() }
  onPauseClick() { }
}
