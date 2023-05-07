const btnCart=document.querySelector('#cart-icon');
const cart=document.querySelector('.cart');
const btnClose=document.querySelector('#cart-close');
// this one cart aa show panna 
btnCart.addEventListener('click',()=>{
    cart.classList.add('cart-active');

});
// this one cart aa remove panna 
btnClose.addEventListener('click',()=>{
    cart.classList.remove('cart-active');

});

//this one content aa load panna 
document.addEventListener('DOMContentLoaded',loadfood);

function loadfood(){
    loadcontent();
}
function loadcontent(){
    //remove ice Item from cart
    let btnRemove=document.querySelectorAll('.cart-remove');
    btnRemove.forEach((btn)=>{
        btn.addEventListener('click',removeItem);
    });

    //product ice Item change event

    let qtyElement=document.querySelectorAll('.cart-quantity');
    qtyElement.forEach((input)=>{
        input.addEventListener('change',changeQty);
    });
//product cart

let cartBtns=document.querySelectorAll('#add-cart');
cartBtns.forEach((btn)=>{
  btn.addEventListener('click',addCart);
});

updateTotal();
}
//remove Item
function removeItem(){
    if(confirm('are you sure to remove')){
        let title=this.parentElement.querySelector('.cart-food-title').innerHTML;
        itemlist=itemlist.filter(ele=>ele.title!=title);
    this.parentElement.remove();
    loadcontent();
    }
}

//chnage  Item
function changeQty(){
    if(isNaN(this.value)|| this.value<1){
        this.value=1;
    }

}
// this one addcart la again again same content display aguthu so display agama irukka use pandrom

let itemlist=[];


//add cart
function addCart(){
    let food=this.parentElement;
    let title=food.querySelector('.ice-title').innerHTML;
    let price=food.querySelector('.ice-price').innerHTML;
    let imgsrc=food.querySelector('.ice-img').src;

   // console.log(title,price,imgsrc);

   let newproduct={ title,price,imgsrc}
   //check product already exist in cart if condition use panniirukka 

   if(itemlist.find((el)=>el.title==newproduct.title))
   {
    alert("product already in cart");
    return;
   }
   else{
    itemlist.push(newproduct);
   }

   let newproductElement=createcartproduct(title,price,imgsrc);//this one namaku code aa irukku 
let element=document.createElement('div');// antha code aa element create panniachi
element.innerHTML=newproductElement;
   let cartBasket=document.querySelector('.cart-content'); //antha element aa enodiya basket kulla pottuta
cartBasket.append(element);

loadcontent();// delete option vara  already iruntha load content aa inga call pannikitta 
}

function createcartproduct(title,price,imgsrc){
    return `
    <div class="cart-box">
    <img src="${imgsrc}" class="cart-img"> 
<div class="detail-box">
        <div class="cart-food-title">${title}</div>
<div class="price-box">
   <div class="cart-price">${price}</div>
   <div class="cart-amt">${price}</div>
</div>
<input type="number" value="1" class="cart-quantity">
</div>
<ion-icon name="trash" class="cart-remove"></ion-icon>
</div> 
`;

}


