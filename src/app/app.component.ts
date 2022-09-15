import { Component, VERSION } from '@angular/core';
import * as Realm from "realm-web";
import {MainPageComponent} from './main-page/main-page.component';


async function loginEmailPassword(email, password) {
  // Create an anonymous credential
  const app = new Realm.App("data-icqqg")
  const credentials = Realm.Credentials.emailPassword(email, password);
  try {
    // Authenticate the user
    const user = await app.logIn(credentials);
    // `App.currentUser` updates to match the logged in user
    console.assert(user.id === app.currentUser.id);
    return user;
  } catch (err) {
    console.error("Failed to log in", err);
    console.log(email)
  }
}
//const user = loginEmailPassword("spalette@feyel-artzner.com", "FeyelR&D");
//console.log("Successfully logged in!", user);


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  app = new Realm.App("data-icqqg")
  Log(a:string,b:string) {
    //console.log
  const user = loginEmailPassword(a, b);
  console.log("Successfully logged in!", user);
  }
async insert_doc() {
  const mongo = this.app.currentUser.mongoClient("Cluster0");
const collection = mongo.db("Data").collection("test");
const result = await collection.insertOne({
  name: "lily of the valley",
  sunlight: "full",
  color: "white",
  type: "perennial",
  _partition: "Store 47",
});
console.log(result);
}

}
