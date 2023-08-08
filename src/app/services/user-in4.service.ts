import { Injectable } from '@angular/core';
import { BehaviorSubject, async } from 'rxjs';
import { User } from '../models/user.model';
import { Auth, onAuthStateChanged, signOut } from '@angular/fire/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AuthState } from '../ngrx/states/auth.state';
import * as IdTokenActions from '../ngrx/actions/idToken.actions'


@Injectable({
  providedIn: 'root'
})
export class UserIn4Service {

  
  userInfo: BehaviorSubject<User | null> ;
  constructor(private auth:Auth,public httpService: HttpClient, private store: Store<{idToken: AuthState}>) {
    this.userInfo = new BehaviorSubject<User | null>({
      id: 'id-001',
      name: 'Mập đẹp trai',
      email: 'map@gmail.com',
      imgUrl:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    } as User);
    onAuthStateChanged(this.auth, async (user)=>{
      if(user){
        let idToken = await user!.getIdToken(true);
        console.log(idToken);
        this.store.dispatch(IdTokenActions.getIdToken({idToken}))
        this.sendMessages(idToken)
        console.log(user);
        this.userInfo.next({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          imgUrl: user.photoURL
        } as User)
      } else{
        this.userInfo.next(null);
      }
    },
    (error)=>{
      console.log(error);
    })
   }
   
   async logout() {
    await signOut(this.auth);
  }
  sendMessages(idToken: string){
    console.log(idToken);
    this.httpService.get('http://localhost:3000',{
    headers: new HttpHeaders({
      Authorization:`${idToken}`
    })
    })
    .subscribe(res=>{
      console.log(res);
    })
  }
}
