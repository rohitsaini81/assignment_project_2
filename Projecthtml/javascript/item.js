const createevent=()=>{
    const item = document.querySelectorAll('.MainContainer .item');
    item.forEach((element)=>{
        element.addEventListener('click',()=>{
            const item_id = element.getAttribute('data-id');
            window.location.href = `itempreview.html?id=${item_id}`;
        })
    })
}

const createElement = (imagesrc, alt, heading, p, button, price, dataid) => {
    const item = document.createElement('div');
    item.classList.add('item');
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
    priceElement.textContent = 'Price: $' + price;
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
    const container = document.querySelector('.MainContainer');

    const data=async()=>{
     const response=  await fetch('http://localhost:3000/database').then(res=>res.json());
        response.forEach(i => {
            const item = createElement(i.image, i.productname, i.productname, i.description, 'View More', i.price, i.id);
            container.appendChild(item);
            
        });
    }
   await data();

    createevent();
}

main();
// window.onload = main();