import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {}

  /*@Effect()
  ping$ = interval(1000).pipe(map(_ => new Ping()));
  */
  /*
  @Effect()
  online$ = merge(
    of(navigator.onLine),
    fromEvent(window, 'online').pipe(mapTo(true)),
    fromEvent(window, 'offline').pipe(mapTo(false))
  ).pipe(map(online => (online ? new IsOnline() : new IsOffline())));

  @Effect()
  openDialog = this.actions.pipe(
    ofType(LoginActionTypes.OpenLoginDialog),
    exhaustMap(_ => {
      let dialogRef = this.dialog.open(LoginDialog);
      return dialogRef.afterClosed();
    }),
    map((result: any) => {
      if (result === undefined) {
        return new CloseDialog();
      }
      return new LoginDialogSuccess(result);
    })
  );

@Effect({ dispatch: false })
reminder = this.actions.pipe(
  ofType<Reminder>(ActionTypes.Reminder),
  map(({ payload }) => {
    this.snackBar.openFromComponent(ReminderComponent, {
      data: payload,
    });
  })
)

@Effect({ dispatch: false })
error = this.actions.pipe(
 ofType<ServerError>(ActionTypes.ServerError),
 map(({ payload }) => {
   this.snackBar.open(payload.message, 'Close');
 })
)

@Effect({ dispatch: false })
logOut = this.actions.pipe(
  ofType(ActionTypes.LogOut),
  tap([payload, username] => {
    this.router.navigate(['/']);
  })
)

/* analytics */
  /*
@Effect({ dispatch: false })
trackEvents = this.actions.pipe(
  ofType(...),
  tap(({ type, payload }) => {
    appInsights.trackEvent(type, payload);
  })
)
  */

  /*
  @Effect()
  breakpoint = this.breakpointObserver
    .observe([Breakpoints.HandsetLandscape])
    .pipe(
      map(result => result.matches
        ? new ChangedToLandscape()
        : new ChangedToPortrait())
    );*/
}
