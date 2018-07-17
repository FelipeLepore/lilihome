import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menuItems = [
    { name: 'Pedidos', icon: 'assets/icons/_MENU-ESQ/ICON_pedidos.svg', iconHover: 'assets/icons/_MENU-ESQ/ICON_pedidos_hover.svg' },
    { name: 'Estoque', icon: 'assets/icons/_MENU-ESQ/ICON_estoque.svg', iconHover: 'assets/icons/_MENU-ESQ/ICON_estoque_hover.svg' },
    { name: 'Financeiro', icon: 'assets/icons/_MENU-ESQ/ICON_financeiro.svg', iconHover: 'assets/icons/_MENU-ESQ/ICON_financeiro_hover.svg' },
    { name: 'Pagamentos', icon: 'assets/icons/_MENU-ESQ/ICON_debitos.svg', iconHover: 'assets/icons/_MENU-ESQ/ICON_debitos_hover.svg' },
    { name: 'Perfil', icon: 'assets/icons/_MENU-ESQ/ICON_perfil.svg', iconHover: 'assets/icons/_MENU-ESQ/ICON_perfil_hover.svg' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
