import { Component, OnInit,  ViewChild  } from '@angular/core';
import { Jeu } from '../../models/Jeu.models';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { JeuService } from 'src/app/services/jeu.service';
import * as script from 'src/assets/js/single-jeu';




@Component({
  selector: 'app-single-jeu',
  templateUrl: './single-jeu.component.html',
  styleUrls: ['./single-jeu.component.css']
})
export class SingleJeuComponent implements OnInit {
  public jeu: Jeu;




  constructor(private router:Router, private jeuService:JeuService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  //  script.init();


    this.route.params.subscribe(
      (params:Params)=>{
        this.jeuService.getJeuById(params.id).then(
          (jeu:Jeu)=>{
            this.jeu=jeu;
          }
        );


    })

  }





  onDelete(){

    this.jeuService.deleteJeu(this.jeu._id).then(
      ()=>{

      }

    );
    this.router.navigate(['/mesJeux']);
  }



}
