import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProdutosPage } from '../pages/produtos/produtos';
import { SimulacoesSalvasPage } from '../pages/simulacoes-salvas/simulacoes-salvas';
import { TroncosPage } from '../pages/troncos/troncos';
import { RamaisPage } from '../pages/ramais/ramais';
import { AcessoriosPage } from '../pages/acessorios/acessorios';
import { ResultadoPage } from '../pages/resultado/resultado';

import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Simular', component: HomePage },
     // { title: 'List', component: ListPage },
      { title: 'Simulações Salvas', component: SimulacoesSalvasPage },
      { title: 'Produtos', component: ProdutosPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
