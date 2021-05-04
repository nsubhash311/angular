import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';
// import { User } from './user';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  topics = ['Angular','React', 'Vue'];

  topicHasError = true;

  userModel = new User('','',7598180720,'default','',true)

  validateTopic(value: string){
    if(value === 'default'){
      this.topicHasError = true;
    }
    else{
      this.topicHasError = false;
      }
    }
  
    onSubmit(){
      console.log(this.userModel);
      // this._enrollmentService.enroll(this.userModel)
      // .subscribe(
      //   data =>console.log('Sucess!',data),
      //   error => console.error('Error!',error)
      // )
    }

  
  // constructor(private _enrollmentService : EnrollmentService){
    
  // }

  ngOnInit(): void {
  }

}

export class User {
  constructor(
    public name: string,
    public email: string,
    public phone : number,
    public topic : string,
    public timePreference : string, 
    public subscribe : boolean
    ) {}
}
