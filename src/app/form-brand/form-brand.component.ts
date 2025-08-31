import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-brand',
  imports: [],
  templateUrl: './form-brand.component.html',
  styleUrl: './form-brand.component.css'
})

export class FormBrandComponent {

  constructor(
    private router: Router,
  ) {    
  }

  goToStart(){
    this.router.navigate(['userIntroComponent']);
  }

  async submitForm(){
    const post=JSON.stringify({
      title: (document.getElementById('title') as HTMLInputElement).value,
      objetivo: (document.getElementById('objetivos') as HTMLInputElement).value,
      actividades: (document.getElementById('actividades') as HTMLInputElement).value,
      reward: (document.getElementById('remuneracion') as HTMLInputElement).value,
    });
    await fetch('http://localhost:3000/APISC/setCampaign',{
        method:'Post',
        body: post
    }).then(x=>x.json());
  }

}
