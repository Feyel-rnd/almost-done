import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Realm from 'realm-web';


async function verify(token, tokenId) {
  const app = new Realm.App('data-icqqg');
  
  try {
    await app.emailPasswordAuth.confirmUser({ token, tokenId });
    
  } catch (err) {
    console.error('Failed', err);
    console.log (err.__zone_symbol__state)
    result = "Erreur"
  }
}

@Component({
  selector: 'app-check-page',
  templateUrl: './check-page.component.html',
  styleUrls: ['./check-page.component.css']
})
export class CheckPageComponent implements OnInit {
  token: string;
  tokenId : string;
  result = "Chargement ..."
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { order: "popular" }

        this.token = params.token;
        this.tokenId = params.tokenId;
        verify(this.token,this.tokenId)
        //console.log(this.token); // popular
      }
    );
  }
}