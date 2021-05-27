import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Jeu } from 'src/app/models/Jeu.models';
import { JeuService } from 'src/app/services/jeu.service';

@Component({
  selector: 'app-modifier-jeu-detail',
  templateUrl: './modifier-jeu-detail.component.html',
  styleUrls: ['./modifier-jeu-detail.component.css']
})
export class ModifierJeuDetailComponent implements OnInit {
  public jeu:Jeu;
  modifyForm: FormGroup;
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
  constructor(private router:Router, private route:ActivatedRoute, private jeuService:JeuService, private modifyBuilder: FormBuilder) {

   }

  ngOnInit(): void {

    this.modifyForm=this.modifyBuilder.group({
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
    this.route.params.subscribe(
      (params:Params)=>{
        this.jeuService.getJeuById(params.id).then(
          (jeu:Jeu)=>{
            this.jeu=jeu;
            this.modifyForm.get('title').setValue(this.jeu.title);
            this.modifyForm.get('price').setValue(this.jeu.price);
            this.modifyForm.get('plateaux').setValue(this.jeu.plateaux);
            this.modifyForm.get('taille').setValue(this.jeu.taille);
            this.modifyForm.get('referenceInterne').setValue(this.jeu.referenceInterne);
            this.modifyForm.get('description').setValue(this.jeu.description);
            this.modifyForm.get('alimentations').setValue(this.jeu.alimentations);
            this.modifyForm.get('etats').setValue(this.jeu.etats);
            this.modifyForm.get('reparation').setValue(this.jeu.reparation);
          }
        );
      }
    )




    }

    retour(){
      this.router.navigate(['/modifier']);
    }

    onUpdate(){

      const jeu = new Jeu();
      jeu.title = this.modifyForm.get('title').value;
      jeu.description=this.modifyForm.get('description').value;
      jeu.price = this.modifyForm.get('price').value;
      jeu.plateaux=this.modifyForm.get('plateaux').value;
      jeu.taille=this.modifyForm.get('taille').value;
      jeu.referenceInterne=this.modifyForm.get('referenceInterne').value;
      jeu.alimentations=this.modifyForm.get('alimentations').value;
      jeu.etats=this.modifyForm.get('etats').value;
      jeu.reparation=this.modifyForm.get('reparation').value;
      jeu._id=new Date().getTime().toString();
      console.log(this.modifyForm.value);


      this.jeuService.modifyJeu(this.jeu._id, jeu).then(
        ()=>{
          this.modifyForm.reset();
          console.log('jeu updaté')
          this.router.navigate(['/mesJeux']);
        }
      );
    }

}
