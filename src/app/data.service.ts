import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { DataSnapshot } from '@angular/fire/database/interfaces';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { Message, MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users:AngularFireList<any>;
  user:any;
  s:any;
  currentUser:any[];
  y:any;
  id:any;
  msgs: Message[] = [];

  constructor(private dbb:AngularFireDatabase,private db:AngularFirestore,private friebase: AngularFireDatabase,public  afAuth:  AngularFireAuth, public  router:  Router) { }

signOutUser() {
  firebase.auth().signOut();
}

getCurentUser(email,password){
  this.currentUser=[];
  console.log(email);
  var x= this.getUser();
  x.snapshotChanges().subscribe(item=>{
  item.forEach(element=>{ 
  var y=element.payload.toJSON();
  y['$key']=element.key
  if(y['email']==email && y['password']==password)
    {this.currentUser.push(y);
    if(email=="admin@gmail.com")
   { this.router.navigate(['/listeTache']);
    }
    else
    {this.router.navigate(['/tache']);
      }
    console.log(this.currentUser);}
      });
  this.y=this.currentUser[0];
  console.log(this.y);
});
}

getUser(){
  this.users=this.friebase.list('/users');
 return this.users;
}

save(product:any,date:any,datefin){
  console.log(product.nom);
  let obj={
     debut:date,
     deadline:datefin,
     tache:product.tache,
     detail:product.detail
   }
   this.dbb.list('users').update(product.$key,obj);
}
}
