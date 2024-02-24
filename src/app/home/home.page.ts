import { Component, ViewChild, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonModal, IonItem, IonInput, IonSplitPane, IonRouterOutlet, IonMenu, IonList, IonLabel } from '@ionic/angular/standalone';
import { ProcessComponent } from '../_components/process/process.component';
import { ProcessCreatorComponent } from '../_components/process-creator/process-creator.component';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { ProcessService } from '../_services/process.service';
import { Observable } from 'rxjs';
import { Process } from '../_interface/process';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonLabel, IonList, IonRouterOutlet, IonSplitPane,
    ProcessCreatorComponent,
    IonInput,
    IonItem,
    IonModal,
    IonIcon,
    IonButton,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonMenu,
    IonContent,
    ProcessComponent, AsyncPipe],
})
export class HomePage {
  @ViewChild(IonModal) modal!: IonModal;
  private processService = inject(ProcessService);
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  public process$: Observable<Process[]> = new Observable();


  constructor() {
    addIcons({ add })
  }

  ionViewWillLeave() {
    this.modal.dismiss();

  }

  ionViewWillEnter() {
    this.process$ = this.processService.getAllProcess();
  }
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }
}
