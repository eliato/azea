import { Component, OnInit } from '@angular/core';

interface cart{
  id: number;
  image: string;
  title: string;
  quantity: number;
  price: string;
  total: string;
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {


  objectArray: cart[];
  constructor() { 
    this.objectArray = [
      { id: 1, image: "../../assets/images/orders/7.jpg", title : "Book", price : "$411", total :'$411', quantity: 1},
      { id: 2, image: "../../assets/images/orders/5.jpg", title : "Shoes", price : "$5436", total : '$5436', quantity: 2},
      { id: 4, image: "../../assets/images/orders/6.jpg", title : "Watch", price : "$540", total : '$540', quantity: 1},
      { id: 5, image: "../../assets/images/orders/3.jpg", title : "Cosmetics", price : "$1543", total : '$1543', quantity: 1},
      { id: 6, image: "../../assets/images/orders/10.jpg", title : "Head set", price : "$6427", total : '$6427', quantity: 3},
      { id: 7, image: "../../assets/images/orders/11.jpg", title : "Ear Buds", price : "$67", total : '$67', quantity: 2},
      { id: 8, image: "../../assets/images/orders/12.jpg", title : "Smart Watch", price : "$427",total : '	$427', quantity: 4 },
      { id: 8, image: "../../assets/images/orders/13.jpg", title : "Canvas Shoes", price : "$647",total : '$647', quantity: 4 }

    ];
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    const plus:any = document.querySelectorAll('.plus');
    const minus:any = document.querySelectorAll('.minus');
    function perfectChart(){
      plus.forEach( (element:any)=>{
        let parentDiv = element.parentElement.parentElement;
          element.addEventListener('click',()=>{
            parentDiv.children[3].children[1].innerHTML++
          })
      } )
      minus.forEach( (element:any)=>{
        let parentDiv = element.parentElement.parentElement;
          element.addEventListener('click',()=>{
             if(parentDiv.children[3].children[1].innerHTML  > 0){
              parentDiv.children[3].children[1].innerHTML-- 
             }
          })
      } )
    }
    perfectChart()
  }
  RemoveElementFromObjectArray(key: any) {
    this.objectArray.forEach((value,index)=>{
        if(value.id==key) this.objectArray.splice(index,1);
    });
  }
}
