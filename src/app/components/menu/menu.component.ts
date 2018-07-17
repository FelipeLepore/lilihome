import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems = [
    { 
      name: 'Pedidos',
      icon: 'assets/icons/_MENU-ESQ/ICON_pedidos.svg',
      iconHover: 'assets/icons/_MENU-ESQ/ICON_pedidos_hover.svg',
      link: '/ordered'
    },
    { 
      name: 'Estoque',
      icon: 'assets/icons/_MENU-ESQ/ICON_estoque.svg',
      iconHover: 'assets/icons/_MENU-ESQ/ICON_estoque_hover.svg',
      link: '/stock'
    },
    { 
      name: 'Financeiro',
      icon: 'assets/icons/_MENU-ESQ/ICON_financeiro.svg',
      iconHover: 'assets/icons/_MENU-ESQ/ICON_financeiro_hover.svg',
      link: '/financial'
    },
    { 
      name: 'Pagamentos',
      icon: 'assets/icons/_MENU-ESQ/ICON_debitos.svg',
      iconHover: 'assets/icons/_MENU-ESQ/ICON_debitos_hover.svg',
      link: '/payments'
    },
    { 
      name: 'Perfil',
      icon: 'assets/icons/_MENU-ESQ/ICON_perfil.svg',
      iconHover: 'assets/icons/_MENU-ESQ/ICON_perfil_hover.svg',
      link: '/profile'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
