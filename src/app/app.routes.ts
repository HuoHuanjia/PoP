import { Routes } from '@angular/router';
import { FormBrandComponent } from './form-brand/form-brand.component';
import { UserIntroComponent } from './user-intro/user-intro.component';
import { CampaignActiveComponent } from './campaign-active/campaign-active.component';
import { MyCampaignComponent } from './my-campaign/my-campaign.component';
import { WithDrawComponent } from './with-draw/with-draw.component';

export const routes: Routes = [
    { path: '', redirectTo: '/app', pathMatch: 'full' },
    { path: 'formBrandComponent', component: FormBrandComponent},
    { path: 'userIntroComponent', component: UserIntroComponent},
    { path: 'campaignActiveComponent', component: CampaignActiveComponent},
    { path: 'myCampaignComponent', component: MyCampaignComponent},
    { path: 'withDrawComponent', component: WithDrawComponent},

];
