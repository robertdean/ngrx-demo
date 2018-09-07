import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromClient from './store/client.reducer';
import { ClientListComponent } from './client-list/client-list.component';
import { EffectsModule } from '@ngrx/effects';
import { ClientEffects } from './store/client.effects';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  imports: [
    CommonModule,
    ClientsRoutingModule,
    StoreModule.forFeature('client', fromClient.reducer),
    EffectsModule.forFeature([ClientEffects])
  ],
  declarations: [ClientListComponent, ClientDetailComponent]
})
export class ClientsModule {}
