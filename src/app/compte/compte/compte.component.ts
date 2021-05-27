import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  accountForm: FormGroup;

  constructor(private accountBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.accountForm=this.accountBuilder.group({
      email:['', Validators.required],
      mdp:['', Validators.required],
    })
  }

  saveAccount(){
    console.log(this.accountForm.value);
  }
}
