import { JsonPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonButton, IonItem, IonText, IonToolbar, IonButtons, IonTitle, IonContent, IonHeader, IonNote, IonInput } from '@ionic/angular/standalone';
import { Process, ProcessInitialization } from 'src/app/_interface/process';
import { ProcessService } from 'src/app/_services/process.service';


@Component({
  selector: 'app-process-creator',
  templateUrl: './process-creator.component.html',
  styleUrls: ['./process-creator.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, IonNote, IonHeader, IonContent, IonTitle, IonButtons, IonToolbar, IonItem, IonText, IonButton, JsonPipe, IonInput],
})
export class ProcessCreatorComponent implements OnInit {
  public processCreatorForm!: FormGroup;
  private fb = inject(FormBuilder);
  private processService = inject(ProcessService);
  private router = inject(Router);

  ngOnInit() {
    this.processCreatorForm = this.fb.group({
      processName: ['', Validators.required],
      // processWorkorder: new FormControl('', workorderValid),
      processPartNumber: new FormControl(''),
      processTargetTime: new FormControl(''),
    });

    this.processCreatorForm.patchValue({ processName: 'Process Test', processPartNumber: 'F46C5744121U1_A1', processTargetTime: '30min' });
  }

  onProcessSubmit() {

    if (this.processCreatorForm.valid) {
      const process: ProcessInitialization = {
        processName: this.processCreatorForm.controls['processName'].value,
        targetTime: this.processCreatorForm.controls['processTargetTime'].value,
        partNumber: this.processCreatorForm.controls['processPartNumber'].value
        // workorder: this.processCreatorForm.controls['processWorkorder'].value,
      };

      this.processService.initializeProcess(process)
        .subscribe((responseProcess: Process) => {
          this.router.navigate(['chrono-main', responseProcess.id])
        });

    }
  }
}
