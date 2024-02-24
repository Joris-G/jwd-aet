import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Process, ProcessInitialization } from '../_interface/process';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {
  // private process$!: Subject<Process>;
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/process/';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    // Ajoute d'autres en-têtes si nécessaire
  });
  constructor() { }

  initializeProcess(process: ProcessInitialization): Observable<Process> {

    return this.http.post<Process>(this.apiUrl, process, { headers: this.headers });
  }

  getProcessById(id: string): Observable<Process> {
    return this.http.get<Process>(this.apiUrl + id, { headers: this.headers });
  }

  getAllProcess(): Observable<Process[]> {
    return this.http.get<Process[]>(this.apiUrl, { headers: this.headers });
  }
  // this.targetTime = targetTime;
  // this.workorder = ParseWorkorder(workorder);
  // this.processName = name;

  setStartProcess() {
    // this.process.setStartTime(new Date());
    // this.process$.next()
  }

  // // Méthode pour récupérer l'heure du début de chrono
  // getStartTime(): Date | null {
  //   if (this.startTime !== null) {
  //     return this.startTime;
  //   } else {
  //     // Si aucune étape n'a été enregistrée, retourne null
  //     return null;
  //   }
  // }

  // // Méthode pour calculer le temps écoulé depuis le début
  // getElapsedTime(): number | null {
  //   if (this.startTime !== null) {
  //     const currentTime: Date = new Date();
  //     return currentTime.getTime() - this.startTime.getTime();
  //   } else {
  //     // Si aucune étape n'a été enregistrée, retourne null
  //     return null;
  //   }
  // }

  // Méthode pour ajouter un groupe d'étapes au processus
  // addStepGroup(stepGroup: StepGroup): void {
  //     this.stepGroups = [...this.stepGroups, stepGroup];
  //     // Met à jour l'heure du début de chrono si ce n'est pas encore fait
  //     if (this.startTime === null && stepGroup.steps.length > 0) {
  //         this.startTime = stepGroup.steps[0].startTime;
  //     }
  // }
}
