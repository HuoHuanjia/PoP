import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { campaign } from '../campaign';

@Component({
  selector: 'app-user-intro',
  imports: [],
  templateUrl: './user-intro.component.html',
  styleUrl: './user-intro.component.css'
})
export class UserIntroComponent {

  constructor(
    private router: Router,
  ) {    
  }

  ngOnInit(){
    let cont=1;
    for(let camp of campaign){

      localStorage.setItem(cont.toString(), JSON.stringify(camp));
      cont+=1;
    }
    localStorage.setItem("contador", JSON.stringify(cont));
    
  }

  formBrand(){
    this.router.navigate(['formBrandComponent']);
  }

  campaignActive(){
    this.router.navigate(['campaignActiveComponent']);
  }
  

}
