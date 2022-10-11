import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShowService } from '../sumari/show.service';
import { ShowText } from './show.model';

import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sumari',
  templateUrl: './sumari.component.html',
  styleUrls: ['./sumari.component.css']
})

export class SumariComponent {

  texto = { id: 1, link: '', resumo: '' };
  public myForm: FormGroup;

  constructor(private showService: ShowService,
    private router: Router,
    private appcomponent: AppComponent,
    private formBuilder: FormBuilder
  ) {
    this.myForm = formBuilder.group({
      url: ['', [Validators.required, Validators.pattern('(http(s?)://)([\\da-z.-]+)\\.([(a-z).]{2,6})[/\\w .-]*/?')]]
    })
  }

  getText(item: any) {
    alert(item.value)
  }

  salvar() {
    this.showService.salvarlink(this.texto).subscribe(
      data => {
        this.appcomponent.dados.push(this.texto);
        this.router.navigate(['ready', this.texto.id])
      },
      error => {
        alert("Link inválido")
      }
    )
  }

  voltar(){
    this.router.navigate([''])
  }

  get m(){
    return this.myForm.controls;
  }

  onSubmit(){
    console.log(this.myForm.value);
  }
}

