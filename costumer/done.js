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
function goHomePage() {
    window.location.href = './index.html';
}

// เช้คว่าทานที่ร้าน หรือ สั่งกลับบ้าน
function toggleEatMode(mode) {

    const eatHere = document.getElementById('eatHere');
    const backHome = document.getElementById('backHome');

    const detailBackHome = document.getElementById('detailBackHome');
    const detailEatHere = document.getElementById('detailEatHere');

    const allStates = ['bg-[#EDF7ED]', 'text-[#4CAF50]', 'border-[#4CAF50]',
        'bg-[#FFF5E5]', 'text-[#FF9800]', 'border-[#FF9800]',
        'bg-white', 'hover:bg-gray-50', 'border-[#B3B3B3]'];

    [eatHere, backHome].forEach(btn => btn.classList.remove(...allStates));


    if (mode === 'eat-here') {

        eatHere.classList.add('bg-[#EDF7ED]', 'text-[#4CAF50]', 'border-[#4CAF50]');
        backHome.classList.add('bg-white', 'border-[#B3B3B3]', 'hover:bg-gray-50');

        detailEatHere.classList.remove('hidden');
        detailBackHome.classList.add('hidden');

        document.getElementById('nameBuy').value = '';
        document.getElementById('phoneBuy').value = '';

    }

    if (mode === 'back-home') {

        backHome.classList.add('bg-[#FFF5E5]', 'text-[#FF9800]', 'border-[#FF9800]');
        eatHere.classList.add('bg-white', 'border-[#B3B3B3]', 'hover:bg-gray-50');

        detailBackHome.classList.remove('hidden');
        detailEatHere.classList.add('hidden');

        document.getElementById('numberTable').value = '';

        Price = menu.price;
        document.getElementById('price').innerText = Price;
    }

}
document.addEventListener('DOMContentLoaded', () => {
    // กำหนดให้ 'eat-here' เป็นค่าเริ่มต้นทันทีที่เปิดหน้านี้
    toggleEatMode('eat-here');
});


// กดยืนสั่งสั่งรายการอาหาร
function confirmOrder(groupId) {
    const numberTable = document.getElementById('numberTable');
    const table = numberTable.value.trim();
    const nameBuy = document.getElementById('nameBuy');
    const name = nameBuy.value.trim();
    const phoneBuy = document.getElementById('phoneBuy');
    const phone = phoneBuy.value.trim();

    const allFoodOrder = document.getElementById('allFoodOrder');
    const activeItems = allFoodOrder.querySelectorAll('#foodOrder:not(.hidden)');

    const eatHere = document.getElementById('eatHere').classList.contains('border-[#4CAF50]');

    if (activeItems.length === 0) {
        alert('ตะกร้าต้องมีอาหารอย่างน้อย 1 รายการ');
        return;
    }

    if (eatHere) {

        if (numberTable.value === '') {
            alert('กรุณากรอกหมายเลขโต๊ะ');
            return;
        }
        if (!/^[1-4]$/.test(table)) {
            alert('กรุณากรอกเลขโต๊ะให้ถูกต้อง (1-4)');
            return;
        }

    } else {

        if (name === '') {
            alert('กรุณาระบุชื่อผู้รับอาหาร');
            return;
        }
        if (!/^[ก-๙]+$/.test(name)) {
            alert('กรุณาระบุชื่อผู้รับอาหารให้ถูกต้อง (เป็นภาษาไทยเท่านั้น)');
            return;
        }

        if (phone === '') {
            alert('กรุณากรอกเบอร์โทรศัพท์');
            return;
        }
        if (!/^0\d{9}$/.test(phone)) {
            alert('กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10หลัก)');
            return;
        }

    }

    document.getElementById('addOrderIcon').classList.add('hidden');
    document.getElementById('detailPayment').classList.add('hidden');
    document.getElementById('confirmOrder').classList.add('hidden');
    document.getElementById('backIcon').classList.add('hidden');
    document.getElementById('closeIcon').classList.add('hidden');
    document.getElementById('backHomeIcon').classList.remove('hidden');
    document.getElementById('confirmOrderDone').classList.remove('hidden');

    document.getElementById('totalCartList').innerText = "0";

    let queue = 9;
    queue += 1;
    document.getElementById('queue').innerText = queue;
    document.getElementById('queueNumber').innerText = "#" + queue;

    if (!eatHere) {
        document.getElementById('queueType').classList.add('bg-[#FF9800]');
        document.getElementById('queueType').innerText = "สั่งกลับบ้าน";
    }
    window.scrollTo(0, 0);

}


// ลบรายการอาหาร
function deleteOrder() {
    const foodOrder = document.getElementById('foodOrder');

    if (!confirm("คุณต้องการลบรายการนี้ใช่หรือไม่")) //ขึ้นมาให้เลือกว่าจะลบมั้ย ใช้confirm
        return;

    if (foodOrder) {
        foodOrder.remove();
    }

    bghfdgdfb();
}

// คำนวณราคาใหม่
function bghfdgdfb() {

    document.getElementById('totalPrice').innerText = "-- บาท";
    document.getElementById('totalList').innerText = "-- รายการ";
    document.getElementById('allTotalPrice').innerText = "-- บาท";

    document.getElementById('totalCartList').innerText = "0";
    document.getElementById('totalList2').innerText = list + " รายการ";
    document.getElementById('totalCart2').innerText = cart;

}
