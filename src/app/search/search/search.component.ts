import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Jeu } from 'src/app/models/Jeu.models';
import { JeuService } from 'src/app/services/jeu.service';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  jeu$:Observable<Jeu[]>;
  private searchTerms=new Subject<string>();

  constructor(private jeuService:JeuService) { }

  search(term:string):void{
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.jeu$=this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term:string)=>this.jeuService.searchJeu(term)),
    );
  }

}
