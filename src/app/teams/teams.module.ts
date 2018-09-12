import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromTeams from './store/teams.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TeamEffects } from './store/teams.effects';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamsRoutingModule } from './team-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TeamsRoutingModule,

    StoreModule.forFeature('teams', fromTeams.reducer),
    EffectsModule.forFeature([TeamEffects])
  ],
  declarations: [TeamListComponent, TeamDetailComponent]
})
export class TeamsModule {}
