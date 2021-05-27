import { Component, OnInit, OnDestroy } from '@angular/core';
import { Jeu } from 'src/app/models/Jeu.models';
import { Subscription } from 'rxjs';
import { JeuService } from 'src/app/services/jeu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supprimer-jeu',
  templateUrl: './supprimer-jeu.component.html',
  styleUrls: ['./supprimer-jeu.component.scss']
})
export class SupprimerJeuComponent implements OnInit, OnDestroy {
  page:Number=1;
  public jeu:Jeu[]=[];

  private jeuSub: Subscription;


  constructor(private jeuService : JeuService, private router:Router) { }
  ngOnDestroy(): void {
   this.jeuSub.unsubscribe();
  }

  ngOnInit(): void {

   this.jeuSub=this.jeuService.jeu$.subscribe(
     (response)=>{
      this.jeu=response
     },
     (error)=>{console.log(error)}
   );
   this.jeuService.getJeu();

}

    modifierJeuDetail(id:string){
      this.router.navigate(['/modifier/'+id]);

    }


}
