import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { ShowService } from '../sumari/show.service';

@Component({
  selector: 'app-ready',
  templateUrl: './ready.component.html',
  styleUrls: ['./ready.component.css']
})
export class ReadyComponent implements OnInit {

  texto_selecionado = { id: 0, link: '', resumo: '' }
  dados = [{ id: 1, link: '', resumo: '', resumo1: '' },]

  constructor(
    private route: ActivatedRoute,
    private showService: ShowService,
    private router: Router,
    private appcomponent: AppComponent
  ) { }

  id_selecionado = 0;
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id')!);
      this.gettexto();
    })
  }
  voltar() {
    this.router.navigate(['sumari'])
  }
  gettexto = () => {
    this.showService.gettexto().subscribe(
      data => {
        this.dados = data
      },
      error => {
        console.log("ERROR")
      }
    )
  }

}
