// ข้อมูลรายละเอียดของเมนูทั้งหมดที่มี
const menus = [
    {
        id: 0,
        name: 'ข้าวห่อหมกทะเลไข่ข้น',
        price: 55,
        img: './img/food-menu1.jpg'
    },

    {
        id: 1,
        name: 'ข้าวผัดพริกแกง',
        price: 50,
        img: './img/food-menu2.jpg'
    },

    {
        id: 2,
        name: 'ข้าวไข่ขยี้ปลากระป๋อง',
        price: 55,
        img: './img/food-menu3.jpg'
    },

    {
        id: 3,
        name: 'ข้าวกะเพรา',
        price: 40,
        img: './img/food-menu4.jpg'
    },

    {
        id: 4,
        name: 'ข้าวหมูคั่วพริกเกลือ',
        price: 45,
        img: './img/food-menu5.jpg'
    },

    {
        id: 5,
        name: 'ข้าวไข่เจียว',
        price: 40,
        img: './img/food-menu6.jpg'
    },

    {
        id: 6,
        name: 'ข้าวทะเลผัดผงกระหรี่',
        price: 55,
        img: './img/food-menu7.jpg'
    },

    {
        id: 7,
        name: 'ข้าวหน้าหมูเทอริยากิ',
        price: 55,
        img: './img/food-menu8.jpg'
    }
]

// ลิ้งไปหน้าตะกร้า
function goCartPage(){
    window.location.href = './cart.html' ;
}

// กดเพิ่มเมนูแล้วซ่อนหน้าหลักแล้วให้หน้ารายละเอียดเมนูขึ้นมาแทน
function addMenuPage(groupId) {
    const home = document.getElementById('home');
    const addMenu = document.getElementById('addMenu');
    const detailMenu = document.getElementById('detailMenu')

    let soldOut = [1, 4, 6];
    let menu = null;

    if (soldOut.includes(groupId)) {
        alert('อาหารหมด');
        return;
    }

    for (let i = 0; i < menus.length; i++) {
        if (menus[i].id === groupId) {
            menu = menus[i];
            break;
        }
    }

    Price = menu.price; //กำหนดตัวแปรไว้ใช้กับบวก ลบ ราคาอาหารด้านล่าง

    window.scrollTo(0, 0);
    home.classList.add('hidden');
    addMenu.classList.remove('hidden');
    detailMenu.classList.add('hidden');
    document.getElementById('addMenuName').innerText = menu.name;
    document.getElementById('addMenuPrice').innerText = menu.price + ' บาท';
    document.getElementById('addMenuImg').src = menu.img;
    document.getElementById('price').innerText = menu.price + ' บาท';

} 

// กดหลับไปหน้าhomeเหมือนเดิม
function backHomePage() {
    
    const home = document.getElementById('home');
    const addMenu = document.getElementById('addMenu');
    const detailMenu = document.getElementById('detailMenu');

    const spicy = document.getElementsByName('spicy');
    const meat = document.getElementsByName('meat');
    const size = document.getElementsByName('size');
    const eatWhere = document.getElementsByName('eat-where');

    home.classList.remove('hidden');
    addMenu.classList.add('hidden');
    detailMenu.classList.remove('hidden');

    for (let i = 0; i < spicy.length; i++) {
        spicy[i].checked = false;
    }
    for (let i = 0; i < meat.length; i++) {
        meat[i].checked = false;
    }
    for (let i = 0; i < size.length; i++) {
        size[i].checked = false;
    }
    for (let i = 0; i < eatWhere.length; i++) {
        eatWhere[i].checked = false;
    }

    document.getElementById('nameBuy').value = '';
    document.getElementById('phoneBuy').value = '';
    document.getElementById('numberTable').value = '';
    document.getElementById('req').value = '';

    document.getElementById('value').innerText = '1';


    window.scrollTo(0, 0);
}

// เช็คว่ากดเลือกระดับต่างๆครบมั้ย
function isChecked(name) {
    return document.querySelector(`input[name="${name}"]:checked`);
}
//เช็คว่าเราติ้ก กรอกถูกมั้ย ทุกอันครบมั้ย
function checkSelection() {

    if (!isChecked('spicy')) {
        alert("กรุณาเลือกระดับความเผ็ด");
        return;
    }

    if (!isChecked('meat')) {
        alert("กรุณาเลือกประเภทเนื้อสัตว์");
        return;
    }

    alert("เพิ่มเมนูลงตะกร้าเรียบร้อยแล้ว");
    // const detailEatHere = document.getElementById('detailEatHere');
    // const isEatHere = !detailEatHere.classList.contains('hidden');

    // if (isEatHere) {
    //     const numberTable = document.getElementById('numberTable');
    //     const table = numberTable.value.trim();

    //     if (table === '') {
    //         alert('กรุณาระบุเลขโต๊ะ');
    //         return;
    //     }

    //     if (!/^[1-4]$/.test(table)) {
    //         alert('กรุณากรอกเลขโต๊ะให้ถูกต้อง (1-3)');
    //         return;
    //     }
    // }

    // else{
    //     const nameBuy = document.getElementById('nameBuy');
    //     const name = nameBuy.value.trim();
    //     const phoneBuy = document.getElementById('phoneBuy');
    //     const phone = phoneBuy.value.trim();

    //     if (name === '') {
    //         alert('กรุณาระบุชื่อผู้รับอาหาร');
    //         return;
    //     }
    //     if(!/^[ก-๙]+$/.test(name)){
    //         alert('กรุณาระบุชื่อผู้รับอาหารให้ถูกต้อง (เป็นภาษาไทยเท่านั้น)');
    //         return;
    //     }

    //     if (phone === ''){
    //         alert('กรุณากรอกเบอร์โทรศัพท์');
    //         return;
    //     }
    //     if (!/^0\d{9}$/.test(phone)) {
    //         alert('กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10หลัก)');
    //         return;
    //     }

    // }


    
}

//กดเอากับพิเศษต(ต้องกำหนดตัวแปรที่มันเก็บราคาที่เรากดพิเศษแล้วค่อยเอาไปคำนวณราคารวม)
//let priceExtra = null+10;
// กดเพิ่มจำนวนเมนู + ราคารวม
let count = 1;
let Price = null;
let extraPrice = 0;

function updateDisplay() {
    document.getElementById('value').textContent = count;
    
    // คำนวณราคา: (ราคาปกติ + ราคาพิเศษ) * จำนวนจาน
    let total = (Price + extraPrice) * count;
    document.getElementById('price').textContent = total + " บาท";
    
}

function changeSize() {
    // เช็คว่า id="extra" โดนเลือกอยู่หรือเปล่า
    const isExtra = document.getElementById('extra').checked;
    
    if (isExtra) {
        extraPrice = 10; // ถ้าเลือกพิเศษ ให้ค่าบวกเพิ่มเป็น 10
    } else {
        extraPrice = 0;  // ถ้าเลือกธรรมดา (หรือไม่ได้เลือกพิเศษ) ค่าบวกเพิ่มกลับเป็น 0
    }
    
    // อัปเดตราคาใหม่ทันทีที่เปลี่ยนไซส์
    updateDisplay();
}

function plusMenu() {
    // count += 1;
    // document.getElementById('value').textContent = count;
    // document.getElementById('price').textContent = (Price * count) + " บาท";

    if (count < 10) {
        count += 1;
        updateDisplay(); // เรียกใช้ฟังก์ชันกลาง
    } else {
        alert("ไม่สามารถเพิ่มจำนวนได้เกิน 10 รายการ");
    }
}

function minusMenu() {
    if (count > 1) {
        count -= 1;
        updateDisplay();
    }
}

