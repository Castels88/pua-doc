import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MAT_DATE_LOCALE,
  MatNativeDateModule,
  provideNativeDateAdapter,
} from '@angular/material/core';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  providers: [
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'it-IT' },
  ],
})
export class HomepageComponent {
  form: FormGroup;
  value = 'Pulisci testo';
  servizoIstituzionePubblica = [
    { id: 1, descrizione: 'Servizio A' },
    { id: 2, descrizione: 'Servizio B' },
  ];

  natureConferimento = [
    { id: 1, descrizione: 'Conferimento A' },
    { id: 2, descrizione: 'Conferimento B' },
  ];

  ambitoTematico = [
    { id: 1, descrizione: 'Ambito 1' },
    { id: 2, descrizione: 'Ambito 2' },
  ];

  oggettiIncarico = [
    { id: 1, descrizione: 'Oggetto 1' },
    { id: 2, descrizione: 'Oggetto 2' },
  ];

  saldoId = [
    { id: 1, descrizione: 'Saldo 1' },
    { id: 2, descrizione: 'Saldo 2' },
  ];

  tutor = {
    upload_cv: 'https://example.com/cv.pdf',
  };

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      // Verifiche (checkboxes)
      verificaInsussistenza: [false],
      usoRiferimentoRegolamento: [false],
      componenteVariabileCompenso: [false],
      consulenteInformato: [false],

      // Selects
      servizoIstituzionePubblicaId: [''],
      naturaConferimentoId: [''],
      ambitoTematicoConsulenteId: [''],
      oggettoIncaricoConsulenteId: [''],
      tipoDiSaldoId: [''],

      // Docente info
      codiceFiscale: [''],
      nome: [''],
      cognome: [''],
      dataNascita: [''],
      genere: [''],
      estero: [false],

      // File base64 o dati upload
      dichiarazioneSvolgimentoAltriIncarichiBase64: [''],
      cv: [''],
      // Date
      dataInizio: [''],
      dataFine: [''],
      dataConferimento: [''],

      // Altro
      Compenso: [''],
    });
  }

  onFileChange(event: Event, controlName: string) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = (reader.result as string).split(',')[1];
        this.form.get(controlName)?.setValue(base64);
      };
      reader.readAsDataURL(file);
    }
  }

  handleSubmit(): void {
    if (this.form.valid) {
      console.log('Form inviato:', this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
