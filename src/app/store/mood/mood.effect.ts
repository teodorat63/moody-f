import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { ApiService } from "../../services/api-service.service";
import { AppState } from "../app.state";
import { catchError, from, map, of, switchMap } from "rxjs";
import { loadMoods, loadMoodsFailure, loadMoodsSuccess } from "./mood.actions";

@Injectable()
export class MoodEffects {
  constructor(private store: Store<AppState>) {}

  private actions$ = inject(Actions);
  private moodService = inject(ApiService);


  //this code will run when loadMoods is dispatched
  loadMoods$ = createEffect(()=>
  this.actions$.pipe(
    ofType(loadMoods),
    switchMap(() =>
      //call the methid abd convert to an observable
    from(this.moodService.getMoods()).pipe(
      map((moods) => loadMoodsSuccess({moods: moods})),
      catchError((error)=> of(loadMoodsFailure({error})))
    )
  )
  ))

}
