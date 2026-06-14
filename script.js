
let cart = JSON.parse(localStorage.getItem('cart')||'[]');
update();
function add(item){
 cart.push(item);
 localStorage.setItem('cart',JSON.stringify(cart));
 update();
}
function update(){
 document.getElementById('count').textContent=cart.length;
}
