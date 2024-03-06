import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { FormSaveService, ResponseType } from '../form-save.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MaterialModule,
    // BrowserAnimationsModule,
    CommonModule,
  ],
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.scss',
})
export class FormPageComponent implements OnInit {
  constructor(private fb: FormBuilder, private formService: FormSaveService) {}

  pastResponses: ResponseType[] = [];

  demoForm = this.fb.group({
    favoriteGame: [''],
    favoriteConsole: [''],
    number: [0, Validators.required],
  });

  ngOnInit() {
    this.pastResponses = this.formService.responseList;
  }

  onSubmit() {
    const response: ResponseType = {
      favoriteGame: this.demoForm.value.favoriteGame ?? undefined,
      favoriteConsole: this.demoForm.value.favoriteConsole ?? undefined,
      number: this.demoForm.value.number ?? -1,
    };

    this.formService.saveResponse(response);
  }
}
