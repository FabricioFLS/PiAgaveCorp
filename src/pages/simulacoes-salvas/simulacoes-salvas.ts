import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { FormBuilder, Validators } from '@angular/forms';


/**
 * Generated class for the SimulacoesSalvasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-simulacoes-salvas',
  templateUrl: 'simulacoes-salvas.html',
})
export class SimulacoesSalvasPage {

  ionViewDidLoad() {
    console.log('ionViewDidLoad SimulacoesSalvasPage');
    let centralTelefonica = JSON.parse(localStorage.getItem("centralTelefonica"));


    
    document.getElementById("central").innerHTML = centralTelefonica[0][0].central;  
    document.getElementById("interface").innerHTML = centralTelefonica[0][0].interface;  
    document.getElementById("placaAnalogica").innerHTML = centralTelefonica[0][0].placaAnalogica;  
    document.getElementById("placaCodec").innerHTML = centralTelefonica[0][0].placaCodec;  
    document.getElementById("placaRamalAnalogico").innerHTML = centralTelefonica[0][0].placaRamalAnalogico;  
    document.getElementById("placaRamalDigital").innerHTML = centralTelefonica[0][0].placaRamalDigital;  
    document.getElementById("placaRamalMista").innerHTML = centralTelefonica[0][0].placaRamalMista;  
    document.getElementById("placaTroncoGsm").innerHTML = centralTelefonica[0][0].placaTroncoGsm;  

    console.log(centralTelefonica);
    

  }

}
