import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private loginService: LoginService,  private router: Router){}
  async login(){
    let loginResult = await this.loginService.loginWithGoogle();
    if(loginResult==null){
      console.log('login failed');
    }else{
      console.log('login sucess');
      this.router.navigate(['/admin']);
    }
  }
}
