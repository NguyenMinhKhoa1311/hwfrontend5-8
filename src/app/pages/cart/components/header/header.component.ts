import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserIn4Service } from 'src/app/services/user-in4.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private loginService: LoginService,  private router: Router, public userIn4Service: UserIn4Service){
    this.userIn4Service.userInfo.subscribe((user)=>{
      if(user){
        this.isLogin = true;
      }else{
        this.isLogin = false;
      }
    })
  }
  isLogin: boolean = false;
  async login(){
    let loginResult = await this.loginService.loginWithGoogle();
    if(loginResult==null){
      console.log('login failed');

    }else{
      console.log('login sucess');

    }
  }
  async logout(){
    this.loginService.logout();
  }
  toAdmin(){
    if(this.userIn4Service.userInfo.value?.name)
    {
      this.router.navigate(['/admin']);
    }
    else{
      alert('đăng nhập đi !!!!')
    }

  }
}
