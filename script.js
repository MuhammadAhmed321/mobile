const phones = [
    {
        img: './image/mobile4.jpg',
        brand: 'Samsung',
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 60000
    },
    {
        img: './image/mobile3.webp',
        brand: 'Xiomi',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 25000
    },
    {
        img: './image/mobile13.jpeg',
        brand: 'Infinix',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 70000
    },
    {
        img: './image/mobile14.png',
        brand: 'Tecno',
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 30000
    },
    {
        img: './image/mobile5.jpg',
        brand: 'Iphone',
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 100000
    },
    {
        img: './image/mobile15.jpg',
        brand: 'Oppo',
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 35000
    },
    {
        img: './image/mobile16.jpg',
        brand: 'Vivo',
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 27000
    },
    {
        img: './image/mobile17.jpeg',
        brand: 'Nokia',
        model: 'X30',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 20000
    },
    {
        img: './image/mobile12.webp',
        brand: 'NUU',
        model: 'B10',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 30000
    },
    {
        img: './image/mobile18.webp',
        brand: 'Samsung',
        model: 'S21',
        ram: 8,
        rom: 256,
        camera: '8 megapixel',
        price: 50000
    },
    {
        img: './image/mobile19.webp',
        brand: 'OPPO',
        model: 'F21',
        ram: 6,
        rom: 128,
        camera: '10 megapixel',
        price: 90000
    }



]
const div = document.querySelector('.containers');


for (let i = 0; i < phones.length; i++) {
    // console.log(phones[i]);
    div.innerHTML += `
    <div class="p-[2rem] border-black-200 border-solid border-2 rounded-lg drop-shadow-2xl">
            <p><span class="font-bold text-lg">brand:</span> ${phones[i].brand}</p>
            <img class = "img" src = "${phones[i].img}">
            <p><span class="font-bold text-lg">Model:</span> ${phones[i].model}</p>
            <p><span class="font-bold text-lg">RAM:</span> ${phones[i].ram}</p>
            <p><span class="font-bold text-lg">ROM:</span> ${phones[i].rom}</p>
            <p><span class="font-bold text-lg">Camera:</span> ${phones[i].camera}</p>
            <p><span class="font-bold text-lg">Price:</span> ${phones[i].price}</p>
            <button onclick='addToCart(${i})' class="bg-[#38bdf8] rounded-md px-2 py-1 text-white mt-4 hover:bg-[#00a4ec]">Add to Cart</button>
    </div>
    `

}

const cartArr = []

function addToCart(index) {
    if (cartArr.includes(phones[index])) {
        console.log('mujood ha');
        for (let i = 0; i < cartArr.length; i++) {
            if (cartArr[i] === phones[index]) {
                cartArr[i].quantity += 1
            }
        }
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Item quantity updated successfully',
            showConfirmButton: false,
            timer: 1500
        })
    } else {
        console.log('mujood NAHI ha');
        phones[index].quantity = 1
        cartArr.push(phones[index]);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Item added to cart successfully',
            showConfirmButton: false,
            timer: 1500
        })
    }
    console.log(cartArr);
}


function goToCart() {
    const cart = JSON.stringify(cartArr);
    localStorage.setItem('cartItem', cart);
    console.log('cart called');
    window.location = 'cart.html';
}