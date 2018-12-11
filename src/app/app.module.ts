import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { ProdutosPage } from '../pages/produtos/produtos';
import { SimulacoesSalvasPage } from '../pages/simulacoes-salvas/simulacoes-salvas';
import { TroncosPage } from '../pages/troncos/troncos';
import { RamaisPage } from '../pages/ramais/ramais';
import { AcessoriosPage } from '../pages/acessorios/acessorios';
import { ResultadoPage } from '../pages/resultado/resultado';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    //ListPage,
    ProdutosPage,
    //SimulacoesSalvasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    //ListPage,
    ProdutosPage,
    //SimulacoesSalvasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
