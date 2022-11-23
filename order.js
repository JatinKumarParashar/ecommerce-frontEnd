const container=document.getElementById('order');
const cart_items = document.querySelector('#cart .cart-items');


// container.addEventListener('click',(e)=>{
//     if (e.target.className == 'cart-btn-bottom' || e.target.className == 'cart-bottom' || e.target.className == 'cart-holder') {
//         axios.get('http://localhost:3000/cart').then(carProducts => {
//             showProductsInCart(carProducts.data);
//             document.querySelector('#cart').style = "display:block;"

//         })
//     }
//     if (e.target.className == 'cancel') {
//         document.querySelector('#cart').style = "display:none;"
//     }
//     if (e.target.className == 'purchase-button') {
//         if (parseInt(document.querySelector('.cart-number').innerText) === 0) {
//             alert('You have Nothing in Cart , Add some products to purchase !');
//             return
//         }
//         axios.post('http://localhost:3000/post-order')
//         //.then(() => deleteCartItem(e,prodId))
//         .then((result)=>{
//            // console.log(result);
//             showNotification( `Order sucessfully placed with ${result.data[0].orderId}`,false);
//         }).catch((err)=>{
//             console.log(err);
//             showNotification(err, true);
//         })
//         alert('Thanks for the purchase')
//         cartItem.innerHTML = ""
//         document.querySelector('.cart-number').innerText = 0
//         document.querySelector('#total-value').innerText = `0`;
//     }

// })


// let total_cart_price = document.querySelector('#total-value').innerText;

// function showProductsInCart(listofproducts) {
//     console.log('in the order showcart');
//     cart_items.innerHTML = "";
//     document.querySelector('.cart-number').innerText = 0;
//     listofproducts.forEach(product => {
//         const id = `album-${product.id}`;
//         const name = product.title;
//         const img_src = product.image;
//         const price = product.price;
//         document.querySelector('.cart-number').innerText = parseInt(document.querySelector('.cart-number').innerText) + 1;
//         total_cart_price = parseFloat(total_cart_price) + parseFloat(price)
//         total_cart_price = total_cart_price.toFixed(2)
//         document.querySelector('#total-value').innerText = `${total_cart_price}`;
//         const cart_item = document.createElement('div');
//         cart_item.classList.add('cart-row');
//         cart_item.setAttribute('id', `in-cart-${id}`);
//         cart_item.innerHTML = `
//         <span class='cart-item cart-column'>
//         <img class='cart-img' src="${img_src}" alt="">
//             <span>${name}</span>
//         </span>
//         <span class='cart-price cart-column'>${price}</span>
//         <form onsubmit='deleteCartItem(event, ${product.id},${price})' class='cart-quantity cart-column'>
//             <input type="text" value="1">
//             <button>REMOVE</button>
//         </form>`
//         cart_items.appendChild(cart_item)
//         console.log('after adding product in cart from order page')
//     })
// }
// function deleteCartItem(e, prodId,price) {
//     e.preventDefault();
//     total_cart_price = parseFloat(total_cart_price) - parseFloat(price)
//     total_cart_price = total_cart_price.toFixed(2)
//     document.querySelector('#total-value').innerText = `${total_cart_price}`;
//     axios.post('http://localhost:3000/cart/delete-item', { productId: prodId })
//         .then(() => removeElementFromCartDom(prodId))
// }


// function orderItem(e, prodId) {
//     e.preventDefault();
//     console.log(prodId);
//     axios.post('http://localhost:3000/post-order', { productId: prodId })

//         .then((result)=>{
//             console.log('456',result.data);
//             showNotification(` Order sucessfully placed with ${result.data[0].orderId}`,false);
//             deleteCartItem(e,prodId);
//         }).catch((err)=>{
//             console.log(err);
//             showNotification(err, true);
//         })
// }

// function showNotification(message, iserror) {
//     const container = document.getElementById('container');
//     const notification = document.createElement('div');
//     notification.style.backgroundColor = iserror ? 'red' : 'green';
//     notification.classList.add('notification');
//     notification.innerHTML = `<h4>${message}<h4>`;
//     container.appendChild(notification);
//     setTimeout(() => {
//         notification.remove();
//     }, 2500)
// }

// function removeElementFromCartDom(prodId) {
//     document.getElementById(`in-cart-album-${prodId}`).remove();
//     showNotification('Succesfuly removed product')
// }





window.addEventListener('DOMContentLoaded',(e)=>{
    axios.get('http://localhost:3000/orders')
    .then(result=>{
        console.log('get order result',result.data);
        for(let i=0;i<result.data.length;i++){
            //console.log(result.data[i].products[0]);
            showOnScreen(result.data[i]);

        }
    })
})


function showOnScreen(data){
    
        const child = `<div id="product-${data._id}">
        <h3>${data.items[0].title} ordered with orderId ${data._id}</h3>
        <div class="image-container">
            <img src="${data.items[0].imageUrl}" alt="">
        </div>
        <div class="prod-details">
            <span> $
                <span>${data.items[0].price}</span>
            </span>
    
        </div>
    
    </div><br>`;
        console.log('456', child)
    
        container.innerHTML += child;
    
   
}