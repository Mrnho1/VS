import { Component } from '@angular/core';

class Item {
  constructor(public id: number, public titulo: string, public texto: string) {}
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  itens: Item[] = [
    new Item(1, 'Item 1','texto1'),
    new Item(2, 'Item 2','texto2'),
    new Item(3, 'Item 3','texto3'),
    new Item(4, 'Item 4','texto4')
  ];
}
