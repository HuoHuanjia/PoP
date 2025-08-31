import { Component, OnInit } from '@angular/core';
import { campaign } from '../campaign';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campaign-active',
  imports: [NgFor],
  templateUrl: './campaign-active.component.html',
  styleUrl: './campaign-active.component.css'
})
export class CampaignActiveComponent {

  campana=campaign;
  oculto=true

  details = new Map<number, boolean>();
  apply = new Map<number, boolean>();

  constructor(
    private router: Router,
  ) {    
  }

  showContent(i: number) {
    this.details.set(i, !this.details.get(i));
  }

  showApply(i: number) {
    this.apply.set(i, !this.apply.get(i));
  }

  goToStart(){
    this.router.navigate(['userIntroComponent']);
  }

  async setApply(i:number){
    const post=JSON.stringify({
      num:i,
      volunteer:localStorage.getItem("usuario")
    });
    await fetch('http://localhost:3000/APISC/setVolunteers',{
        method:'Post',
        body: post
    }).then(x=>x.json());

  }

}
