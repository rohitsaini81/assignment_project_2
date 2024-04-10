
const createevent=(query)=>{
    const item = document.querySelectorAll('.MainContainer .item');
    item.forEach((element)=>{
        element.addEventListener('click',()=>{
            const item_id = element.getAttribute('data-id');
            window.location.href = `itempreview.html?id=${item_id}&type=${query}`;
        })
    })
}

const createElement = (imagesrc, alt, heading, p, button, price, dataid) => {
    const item = document.createElement('div');
    item.classList.add('item');
    item.classList.add('box-shadow')
    item.setAttribute('data-id', dataid);
    const item1 = document.createElement('div');
    item1.classList.add('item1');
    const img = document.createElement('img');
    img.src = imagesrc;
    img.alt = alt;
    const h1Element = document.createElement('h1'); 
    h1Element.textContent = heading;
    const pElement = document.createElement('p');
    pElement.textContent = p;
    const priceElement = document.createElement('p');
    priceElement.textContent = 'Price: ₹' + price;
    const buttonElement = document.createElement('button');
    buttonElement.textContent = button;
    item1.appendChild(img);
    item1.appendChild(h1Element);
    item1.appendChild(pElement);
    item1.appendChild(priceElement);
    item1.appendChild(buttonElement);
    item.appendChild(item1);
    // console.log(item);
    return item;
}

const main = async() => {
    // cart printing
        console.log("hii--")
        const cart_printbtn= document.getElementById("cartCount")
        const resp = await fetch(`http://localhost:3000/addtocart`).then((res)=>res.json())
        const cars=resp.length;
        cart_printbtn.innerText=cars;
        console.log("cart ",cars)
        // next




    const url = new URL(window.location.href);
    const query=url.search.slice(1)
    console.log(query)


    console.log('http://localhost:3000/database?type='+query)
    const container = document.querySelector('.MainContainer');

    const data=async()=>{
     const response=  await fetch('http://localhost:3000/database?type='+query).then(res=>res.json());
     console.log(response)

        response.forEach(i => {
            const item = createElement(i.image, i.productname, i.productname, i.description, 'View More', i.price, i.id);
            container.appendChild(item);
            
        });
    }
   await data();

    createevent(query);
}

// main();
document.onload = main();

function addToCart() {
    let cartCount = parseInt(localStorage.getItem("cartCount")) || 0;
    cartCount++;
    localStorage.setItem("cartCount", cartCount);
    updateCartCount();
  }
  
  function updateCartCount() {
    const cartCount = localStorage.getItem("cartCount");
    document.getElementById("cartCount").innerHTML = cartCount;
    document.getElementById("cartcount").innerHTML = cartCount; // Update this line to match the id of the span element in the second HTML file
  }