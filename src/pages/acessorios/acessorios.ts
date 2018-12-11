import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';

/**
 * Generated class for the AcessoriosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acessorios',
  templateUrl: 'acessorios.html',
})
export class AcessoriosPage {

  public tarifacaoChamadas:boolean = false;  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcessoriosPage');
  }
  postDados(req){
    let obj = new Array();
    obj.push(req.value)
   
    //transforma o array de objetos em formato json
    let Obj_s = JSON.stringify(obj);
    //armazena a variável criada em formatto json e salva no localStorage
    localStorage.setItem("acessorios", Obj_s);
    
    

 }
  onResultado(): void{
    this.navCtrl.push('ResultadoPage');
  }

}
