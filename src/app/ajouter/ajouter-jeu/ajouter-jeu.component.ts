import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Jeu } from 'src/app/models/Jeu.models';
import { JeuService } from 'src/app/services/jeu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-jeu',
  templateUrl: './ajouter-jeu.component.html',
  styleUrls: ['./ajouter-jeu.component.css']
})
export class AjouterJeuComponent implements OnInit {


  ajouterForm: FormGroup;
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  plateaux = [
    {type:'Calculette'},
    {type:'Sensitif'},
    {type:'auto-répondeur'},
    {type:'Clavier'}
  ];

  alimentations=[
    {type:'Pile'},
    {type:'Secteur'},
    {type:'Les deux'}
  ];
  etats=[
    {etat:'Notice'},
    {etat:'Boite'},
    {etat:'Bonne état'}
  ];
  reparation=[
    {reparation:'oui'},
    {reparation:'non'}
  ]
  constructor(private fb :FormBuilder, private jeuService:JeuService, private router:Router) { }

  ngOnInit(): void {


    this.ajouterForm = this.fb.group({
      title:["",Validators.required],
      price:["", Validators.required],
      plateaux:['', Validators.required],
      taille:[''],
      referenceInterne:[''],
      description:[''],
      alimentations:[''],
      etats:[''],
      reparation:[''],






    });


  }

  enregisterJeu(){
    console.log(this.ajouterForm.value)
   const jeu = new Jeu();
    jeu.title=this.ajouterForm.get('title').value;
    jeu.price=this.ajouterForm.get('price').value;
    jeu.plateaux=this.ajouterForm.get('plateaux').value;
    jeu.taille=this.ajouterForm.get('taille').value;
    jeu.referenceInterne=this.ajouterForm.get('referenceInterne').value;
    jeu.description=this.ajouterForm.get('description').value;
    jeu.alimentations=this.ajouterForm.get('alimentations').value;
    jeu.etats=this.ajouterForm.get('etats').value;
    jeu.reparation=this.ajouterForm.get('reparation').value;
    jeu._id=new Date().getTime().toString();

   this.jeuService.createNewJeu(jeu).then(
      ()=>{
        this.router.navigate(['/mesJeux']);
      }
    );




}

}
