import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
@Component({
  selector: 'app-sidebar',
  imports: [MatListModule, MatExpansionModule, MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {

  menuItems = [
    {
      title: 'Dashboard',
      icon: 'dashboard',
      subItems: ['Resumen', 'Actividad'],
    },
    // {
    //   title: 'Métricas',
    //   icon: 'bar_chart',
    //   subItems: ['Estadísticas', 'Comparativas'],
    // },
    {
      title: 'Productos',
      icon: 'inventory_2',
      subItems: ['Lista de productos', 'Agregar producto'],
    },
    {
      title: 'Ventas',
      icon: 'shopping_cart',
      subItems: ['Historial', 'Facturación'],
    },
    {
      title: 'Usuarios',
      icon: 'people',
      subItems: ['Clientes', 'Administradores'],
    },
  ];
}
