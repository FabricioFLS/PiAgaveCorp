import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResultadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultado',
  templateUrl: 'resultado.html',
})
export class ResultadoPage {

  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadoPage'); 

    

    let Obj_troncos = JSON.parse(localStorage.getItem("troncos"));
    let Obj_ramais = JSON.parse(localStorage.getItem("ramais"));
    let Obj_acessorios = JSON.parse(localStorage.getItem("acessorios"));
    
    var centralTelefonicaParametros = [
      {
        troncosDigitais:parseInt(Obj_troncos[0].troncosDigitais) || 0,
        troncosAnalogicos:parseInt(Obj_troncos[0].troncosAnalogicos) || 0,
        troncosGsm:parseInt(Obj_troncos[0].troncosGsm) || 0,
        troncosIp:parseInt(Obj_troncos[0].troncosIp) || 0,
    
        ramaisAnalogicos:parseInt(Obj_ramais[0].ramaisAnalogicos)|| 0,
        ramaisDigitais:parseInt(Obj_ramais[0].ramaisDigitais)|| 0,
        ramaisIp:parseInt(Obj_ramais[0].ramaisIp)|| 0,
        ramaisIpSemDisplay:parseInt(Obj_ramais[0].semDisplay)|| 0,
        ramaisIpComDisplay:parseInt(Obj_ramais[0].comDisplay)|| 0,
        ramaisIpVideoChamada:parseInt(Obj_ramais[0].comVideo)|| 0,
        ramaisIpSoftphone:parseInt(Obj_ramais[0].softphone)|| 0,
    
        tarifacaoChamadas:Obj_acessorios[0].tarifacaoChamadas,
        gravacaoChamadas:parseInt(Obj_acessorios[0].gravacaoChamadas)|| 0,
        correioVoz:parseInt(Obj_acessorios[0].correioVoz),
        mesaVirtual:parseInt(Obj_acessorios[0].mesaVirtual)|| 0,
        disa:parseInt(Obj_acessorios[0].disa)|| 0,
    
        
      }
    ];
    
    var centralTelefonica = [{
      central:"",
      interface:"",
      centralUnniti2000:0,
      centralUnniti3000:0,
      interface1e:0,
      interface2e:0,
      placaAnalogica:0,
      placaCodec:0,
  
      placaTroncoGsm:0,
      placaRamalAnalogico:0,
      placaRamalDigital:0,
      placaRamalMista:0,

    }];
    
//Definição da Central
if ((centralTelefonicaParametros[0].ramaisDigitais + centralTelefonicaParametros[0].ramaisAnalogicos) > 96) {
  centralTelefonica[0].centralUnniti3000++;
}else {
  centralTelefonica[0].centralUnniti2000++;
}
if (centralTelefonica[0].centralUnniti3000 > centralTelefonica[0].centralUnniti2000) {
  centralTelefonica[0].central = "Unniti 3000";
} else {
  centralTelefonica[0].central = "Unniti 2000";
}
//Interface
if (centralTelefonicaParametros[0].troncosDigitais > 30) {
  centralTelefonica[0].interface2e++;
}else {
  centralTelefonica[0].interface1e++;
}
if (centralTelefonica[0].interface2e > centralTelefonica[0].interface1e) {
  centralTelefonica[0].interface = "Interface 2E1"
} else {
  centralTelefonica[0].interface = "Interface 1E1"

}
//Placa Troncos Analógicos
if (centralTelefonicaParametros[0].troncosAnalogicos > 0) {
  if ((centralTelefonicaParametros[0].troncosAnalogicos % 8) == 0) {
    centralTelefonica[0].placaAnalogica = centralTelefonicaParametros[0].troncosAnalogicos / 8;
  }else {
    centralTelefonica[0].placaAnalogica = Math.floor((centralTelefonicaParametros[0].troncosAnalogicos / 8)) + 1;
  }

}
//Placas Troncos IP
if (centralTelefonicaParametros[0].troncosIp > 0) {
  centralTelefonica[0].placaCodec ++;
}
//Placas Troncos GSM
if (centralTelefonicaParametros[0].troncosGsm > 0) {
  if (centralTelefonicaParametros[0].troncosGsm % 4 == 0) {
    centralTelefonica[0].placaTroncoGsm = centralTelefonicaParametros[0].troncosGsm / 4;
  }else {
    centralTelefonica[0].placaTroncoGsm = Math.floor(centralTelefonicaParametros[0].troncosGsm / 8 + 1);
  }
}
//Placas Ramal Analógico Digital e Mista
if (centralTelefonicaParametros[0].ramaisAnalogicos > 0 && centralTelefonicaParametros[0].ramaisDigitais > 0) {
  if (centralTelefonicaParametros[0].ramaisAnalogicos <= 12 && centralTelefonicaParametros[0].ramaisDigitais <= 4)  {
    centralTelefonica[0].placaRamalMista++;
  }else if (centralTelefonicaParametros[0].ramaisAnalogicos % 16 > centralTelefonicaParametros[0].ramaisAnalogicos % 12 && centralTelefonicaParametros[0].ramaisDigitais % 12 > 4 ) {
    centralTelefonica[0].placaRamalAnalogico = centralTelefonicaParametros[0].ramaisAnalogicos/16 + 1;
    centralTelefonica[0].placaRamalDigital = centralTelefonicaParametros[0].ramaisDigitais/12 + 1;
  }else if(centralTelefonicaParametros[0].ramaisAnalogicos % 16 != 0 && centralTelefonicaParametros[0].ramaisDigitais % 12 != 0){
    centralTelefonica[0].placaRamalAnalogico = centralTelefonicaParametros[0].ramaisAnalogicos / 16;
    centralTelefonica[0].placaRamalDigital = centralTelefonicaParametros[0].ramaisDigitais / 12;
    centralTelefonica[0].placaRamalMista++;
  }else if(centralTelefonicaParametros[0].ramaisAnalogicos % 12 == 0 && centralTelefonicaParametros[0].ramaisDigitais % 4 == 0){
    centralTelefonica[0].placaRamalMista = centralTelefonicaParametros[0].ramaisAnalogicos / 12;
  }else{
    centralTelefonica[0].placaRamalAnalogico = centralTelefonicaParametros[0].ramaisAnalogicos / 16;
    centralTelefonica[0].placaRamalDigital = centralTelefonicaParametros[0].ramaisDigitais / 12;
  }

  }

    document.getElementById("central").innerHTML = centralTelefonica[0].central;  
    document.getElementById("interface").innerHTML = centralTelefonica[0].interface;  
    document.getElementById("placaAnalogica").innerHTML = centralTelefonica[0].placaAnalogica.toFixed(0);  
    document.getElementById("placaCodec").innerHTML = centralTelefonica[0].placaCodec.toFixed(0);  
    document.getElementById("placaRamalAnalogico").innerHTML = centralTelefonica[0].placaRamalAnalogico.toFixed(0);  
    document.getElementById("placaRamalDigital").innerHTML = centralTelefonica[0].placaRamalDigital.toFixed(0);  
    document.getElementById("placaRamalMista").innerHTML = centralTelefonica[0].placaRamalMista.toFixed(0);  
    document.getElementById("placaTroncoGsm").innerHTML = centralTelefonica[0].placaTroncoGsm.toFixed(0);  
    
    //salvar centralTelefonica no LocalStorage
    let obj = new Array();
    obj.push(centralTelefonica);   
    //transforma o array de objetos em formato json
    let Obj_s = JSON.stringify(obj);
    //armazena a variável criada em formatto json e salva no localStorage
    localStorage.setItem("centralTelefonica", Obj_s);
  


  }

  onSimulacoesSalvas() : void {  
    this.navCtrl.push('SimulacoesSalvasPage');



  }

}
