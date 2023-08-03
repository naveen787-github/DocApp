import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoService } from '../cognito.service';
import { IUser } from '../user';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {

  user: IUser = {} as IUser;

  constructor(private router: Router, private cognitoService: CognitoService) {
  }

  public signIn(): void {
    this.cognitoService.signIn(this.user).then(() => {
      this.cognitoService.getUser().then((user: any) => {
        const userRole = user.attributes['custom:role'];
  
        // Use conditional statements to determine which page to navigate to
        if (userRole === 'Doctor') {
          this.router.navigate(['/doctor-register']);
        } else if (userRole === 'Patient') {
  
          this.router.navigate(['/Doctorslist']);
        } else {
          this.router.navigate(['/']);
        }
      });
    }).catch((error) => {
      alert(error);
    });
  }

}