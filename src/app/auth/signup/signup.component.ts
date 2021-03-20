import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email?:any="";
  nom?:any="";
  prenom?:any="";
  password?:any="";
  id:any;
  user:any;
  constructor(private db:AngularFirestore,private dataService:DataService,private router:Router,private dbb:AngularFireDatabase) { }

  ngOnInit(): void {
  }
  
  Submit(form) {
   this.dbb.list('/users').push({
      nom:form.value.nom,
      prenom:form.value.prenom,
      email:form.value.email,
      password:form.value.password,
      debut:"",
      deadline:"",
      tache:"",
      detail:"",
      progression:0
      });
      this.router.navigate(['/login']);
    }
}
