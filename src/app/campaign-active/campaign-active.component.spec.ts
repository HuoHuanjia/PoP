import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignActiveComponent } from './campaign-active.component';

describe('CampaignActiveComponent', () => {
  let component: CampaignActiveComponent;
  let fixture: ComponentFixture<CampaignActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignActiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
