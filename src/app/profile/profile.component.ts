import { Component, OnInit } from '@angular/core';
import { CognitoService } from '../cognito.service';
import { IUser } from '../user';
import { Router } from '@angular/router';
export interface IUserWithRole extends IUser {
  'custom:role': string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})



export class ProfileComponent implements OnInit {

  //user: IUser = {} as IUser;
  user: IUserWithRole = {} as IUserWithRole;


  constructor(private cognitoService: CognitoService, private router: Router) {
    
  }

  public ngOnInit(): void {
    this.cognitoService.getUser().then((user) => {
      this.user = user.attributes;

     
      
    });
  }

  
  public update(): void {
    this.cognitoService.updateUser(this.user).then(() => {
      
      const userRole = this.user['custom:role'];
      alert("Updated Successfully");

      // Use conditional statements to determine which page to navigate to
      if (userRole === 'Doctor') {
        this.router.navigate(['/doctor-register']);
      } else if (userRole === 'Patient') {

        this.router.navigate(['/Doctorslist']);
      } else {
        this.router.navigate(['/']);
      }
    }).catch((error) => {
      alert(error);
    });
  }

}