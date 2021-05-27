import { Route } from '@angular/compiler/src/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Jeu } from 'src/app/models/Jeu.models';
import { JeuService } from 'src/app/services/jeu.service';

@Component({
  selector: 'app-reparer-jeu',
  templateUrl: './reparer-jeu.component.html',
  styleUrls: ['./reparer-jeu.component.css']
})
export class ReparerJeuComponent implements OnInit, OnDestroy {
  public jeu:Jeu[]= [];
  private jeuSub: Subscription;

  constructor(private router: Router, private route:ActivatedRoute, private jeuService:JeuService) {

  }

  ngOnInit(): void {
    this.jeuSub=this.jeuService.jeu$.subscribe(
      (response)=>{
        this.jeu=response;
      }
    );
    this.jeuService.getJeu();

  }
  ngOnDestroy(){
    this.jeuSub.unsubscribe();
      }

}
