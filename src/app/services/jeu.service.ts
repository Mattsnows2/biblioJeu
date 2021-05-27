
import { Subject, Observable, of } from 'rxjs';
import {Jeu} from '../models/Jeu.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class JeuService{
  jeuUrl = "http://localhost:3000/api/jeu";
  constructor(private http :HttpClient){}

  private jeu: Jeu[]=[

  ];

  public jeu$ = new Subject<Jeu[]>();

  deleteJeu(id:string){
    return new Promise((resolve, reject)=>{
      this.http.delete('http://localhost:3000/api/jeu/'+id).subscribe(
        (response)=>{
          resolve(response);
        },
        (error)=>{
          reject(error);
        }
      );
    });
  }

  getJeu() {
    this.http.get('http://localhost:3000/api/jeu').subscribe(
      (jeu:Jeu[])=>{
        if(jeu){
          this.jeu=jeu;
          this.emitJeu();
        }
      },
      (error)=>{
        console.log(error)
      }
    );
  }

  getJeuById(id:string){
    return new Promise((resolve,reject)=>{
      this.http.get('http://localhost:3000/api/jeu/'+id).subscribe(
        (response)=>{
          resolve(response);
        },
        (error)=>{
          reject(error)
        }
      );
    });
  }
  emitJeu(){
    this.jeu$.next(this.jeu);
  }

  modifyJeu(id:string, jeu:Jeu){
    return new Promise ((resolve, reject)=>{
      this.http.put('http://localhost:3000/api/jeu/'+id, jeu).subscribe(
        (response)=>{
          resolve(response);
        },
        (error)=>{
          reject(error)
        }
      );
    });
  }

  createNewJeu(jeu:Jeu){
    return new Promise((resolve, reject)=>{
      this.http.post('http://localhost:3000/api/jeu', jeu).subscribe(
        (response)=>{
          resolve(response);
        },
        (error)=>{
          reject(error);
        }
      );
    });
  }

  searchJeu(term: string): Observable<Jeu[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Jeu[]>(`${this.jeuUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         console.log(`found heroes matching "${term}"`) :
         console.log(`no heroes matching "${term}"`)),

    );
  }

}






