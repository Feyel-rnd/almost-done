import { Component, VERSION } from '@angular/core';
import * as Realm from 'realm-web';
import { MainPageComponent } from '../main-page/main-page.component';
import { FormGroup, FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

async function createEmailPassword(email, password) {
  // Create an anonymous credential
  const app = new Realm.App('data-icqqg');
  const credentials = Realm.Credentials.emailPassword(email, password);
  try {
    // Authenticate the user
    await app.emailPasswordAuth.registerUser({ email, password });
    // `App.currentUser` updates to match the logged in user
    console.log("Successfull pending request !")
  } catch (err) {
    console.error('Failed', err);
    //return err.__zone_symbol__state
  }
}
//const user = loginEmailPassword("spalette@feyel-artzner.com", "FeyelR&D");
//console.log("Successfully logged in!", user);

@Component({
  selector: 'app-secondary-page',
  templateUrl: './secondary-page.component.html',
  styleUrls: ['./secondary-page.component.css'],
})
export class SecondaryPageComponent {
  connected = true;
  correctForm = true;
  hide = true;
  redirect = false;
   constructor(public router: Router){

   }
  loginUser() {
    if (
      this.signinForm.controls['email'].status == 'INVALID' ||
      this.signinForm.controls['password'].status == 'INVALID'
    ) {
      this.correctForm = false;
    } else {
      this.correctForm = true;
    }
  }
  signinForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmedPassword: new FormControl('', Validators.required),
  });
  app = new Realm.App('data-icqqg');
  Log(email: string, password: string) {
    //console.log
    this.loginUser();
    if (this.correctForm) {
      //console.log(this.correctForm)

      const user: any = createEmailPassword(email, password);
      //console.log(user.__zone_symbol__value[0])
    }else {
        this.connected = false;
      
    }
  }
  async insert_doc() {
    const mongo = this.app.currentUser.mongoClient('Cluster0');
    const collection = mongo.db('Data').collection('test');
    const result = await collection.insertOne({
      name: 'lily of the valley',
      sunlight: 'full',
      color: 'white',
      type: 'perennial',
      _partition: 'Store 47',
    });
    console.log(result);
  }
}
