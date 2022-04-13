import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.scss']
})
export class ParametresComponent implements OnInit {


  parametres:any = [

    {
      image : "translate.png",
      description : "Changer le language"
    },
    {
      image : "Notifications.png",
      description : "Gestion des notifications"
    },
    {
      image : "sun.png",
      description : "Affichage et Luminosité"
    },
    {
      image : "Profil.png",
      description : "Paramètres et profil"
    },
    {
      image : "about.png",
      description : "A propos"
    },
    {
      image : "accessible.png",
      description : "Accessibilité"
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
