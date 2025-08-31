import { Component, OnInit } from '@angular/core';
import { campaign } from '../campaign';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-my-campaign',
  imports: [NgFor],
  templateUrl: './my-campaign.component.html',
  styleUrl: './my-campaign.component.css'
})
export class MyCampaignComponent {

  campana=campaign;
  oculto=true

  details = new Map<number, boolean>();
  apply = new Map<number, boolean>();

  showContent(i: number) {
    this.details.set(i, !this.details.get(i));
  }

  showApply(i: number) {
    this.apply.set(i, !this.apply.get(i));
  }

}
