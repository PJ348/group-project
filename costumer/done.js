// ข้อมูลรายละเอียดของเมนูทั้งหมดที่มี
const menus = [
    {
        id: 0,
        name: 'ข้าวห่อหมกทะเลไข่ข้น',
        price: 55,
        img: '../img/food-menu1.jpg'
    },

    {
        id: 1,
        name: 'ข้าวผัดพริกแกง',
        price: 50,
        img: '../img/food-menu2.jpg'
    },

    {
        id: 2,
        name: 'ข้าวไข่ขยี้ปลากระป๋อง',
        price: 55,
        img: '../img/food-menu3.jpg'
    },

    {
        id: 3,
        name: 'ข้าวกะเพรา',
        price: 40,
        img: '../img/food-menu4.jpg'
    },

    {
        id: 4,
        name: 'ข้าวหมูคั่วพริกเกลือ',
        price: 45,
        img: '../img/food-menu5.jpg'
    },

    {
        id: 5,
        name: 'ข้าวไข่เจียว',
        price: 40,
        img: '../img/food-menu6.jpg'
    },

    {
        id: 6,
        name: 'ข้าวทะเลผัดผงกระหรี่',
        price: 55,
        img: '../img/food-menu7.jpg'
    },

    {
        id: 7,
        name: 'ข้าวหน้าหมูเทอริยากิ',
        price: 55,
        img: '../img/food-menu8.jpg'
    }
]

// ลิ้งหน้าไปหน้าhome
function goHomePage(){
    window.location.href = './index.html' ;
}

// กดยืนสั่งสั่งรายการอาหาร
function confirmOrder(groupId){
    const confirmOrder = document.getElementById('confirmOrder');
    const orderDone = document.getElementById('orderDone');

    const confirmOrderIcon = document.getElementById('confirmOrderIcon');
    const orderDoneIcon = document.getElementById('orderDoneIcon');

    const confirmOrderGoHome = document.getElementById('confirmOrderGoHome');
    const orderDoneGoHome = document.getElementById('orderDoneGoHome');

    const allFoodOrder = document.getElementById('allFoodOrder');

    if(groupId === 'confirmOrder'){

        if(allFoodOrder.children.length > 0){
            orderDone.classList.remove('hidden');
            confirmOrder.classList.add('hidden');
    
            orderDoneIcon.classList.remove('hidden');
            confirmOrderIcon.classList.add('hidden');
    
            orderDoneGoHome.classList.remove('hidden');
            confirmOrderGoHome.classList.add('hidden');
        }

        else{
            alert('ตะกร้าต้องมีอาหารอย่างน้อย1รายการ');
        }

    }
}

// ลบรายการอาหาร
function deleteOrder(){
    const foodOrder = document.getElementById('foodOrder');

    if(!confirm("คุณต้องการลบรายการนี้ใช่หรือไม่")) //ขึ้นมาให้เลือกว่าจะลบมั้ย ใช้confirm 
        return;

    if(foodOrder){
        foodOrder.remove();
    }

    bghfdgdfb();
}

// คำนวณราคาใหม่
function bghfdgdfb() {

    let total = 0 ;
    let list = 0;
    let cart = 0;

    const allFoodOrder = document.querySelectorAll('.allFoodOrder'); //เอากล่องที่อยู่ในall food order

    // allFoodOrder.forEach(item => {
    //     const price = parseInt(item.getAttribute('data-price')) || 0;
    //     total += price;
    // });

    document.getElementById('totalPrice').innerText = total + " บาท" ;
    document.getElementById('totalList').innerText = list + " รายการ" ;
    document.getElementById('totalCart').innerText = cart ;

    document.getElementById('totalPrice2').innerText = total + " บาท" ;
    document.getElementById('totalList2').innerText = list + " รายการ" ;
    document.getElementById('totalCart2').innerText = cart ;
    
}

