import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShowService } from './sumari/show.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  dados=[{id:1, link:'', resumo:''}]

  constructor(private showService: ShowService, private router: Router){
    this.gettexto();
  }

  gettexto = () => {
    this.showService.gettexto().subscribe(
      data=> {
        this.dados = data
      },
      error => {
        console.log("ERROR")
      }
    )
  }

  novolink(){
    this.router.navigate(['sumari'])

  }
}
