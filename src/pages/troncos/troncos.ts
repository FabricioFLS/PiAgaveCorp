import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';

/**
 * Generated class for the TroncosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-troncos',
  templateUrl: 'troncos.html',
})
export class TroncosPage {
    
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad TroncosPage');
  }
  onRamais(): void{
    this.navCtrl.push('RamaisPage');
  }
  postDados(req){  
    let obj = new Array();
    obj.push(req.value)
    //transforma o array de objetos em formato json
    let Obj_s = JSON.stringify(obj);
    //armazena a variável criada em formatto json e salva no localStorage
    localStorage.setItem("troncos", Obj_s);
 

 }

}
