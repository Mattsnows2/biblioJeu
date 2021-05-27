import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable} from 'rxjs';
import { Jeu } from '../models/Jeu.models';
import { Router } from '@angular/router';
import {JeuService} from '../services/jeu.service';
@Component({
  selector: 'app-mes-jeux',
  templateUrl: './mes-jeux.component.html',
  styleUrls: ['./mes-jeux.component.scss']
})
export class MesJeuxComponent implements OnInit, OnDestroy {
  page:Number=1;
  public jeu : Jeu[]=[];



  private jeuSub: Subscription;


  constructor(private jeuService: JeuService, private router: Router) {

   }



  ngOnInit(){
    this.jeuSub=this.jeuService.jeu$.subscribe(
      (jeu)=>{
        this.jeu=jeu;
        console.log(jeu)

      }
    );
    this.jeuService.getJeu();




  }

  jeuDetail(id:string){


    this.router.navigate(['/mesJeux/'+id]);

  }

  ngOnDestroy(){
this.jeuSub.unsubscribe();
  }



}
