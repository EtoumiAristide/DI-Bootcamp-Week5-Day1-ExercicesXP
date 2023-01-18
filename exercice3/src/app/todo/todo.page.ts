import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  newTodo: string = "";

  listItem: string[] = [];

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  addTodo() {
    //console.log(this.newTodo);
    if (this.newTodo.trim() == '') {
      this.presentAlert('Saisie incorrecte', 'Veuillez renseigner le champ svp');
    } else {
      this.listItem.push(this.newTodo);
      this.newTodo = "";
    }
  }

  async presentAlert(headerText: string, messageText: string) {
    const alert = await this.alertController.create({
      //header: 'Alert',
      subHeader: headerText,
      message: messageText,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
