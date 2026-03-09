// ข้อมูลรายละเอียดของเมนูทั้งหมดที่มี
const menus = [
    {
        id: 0,
        name: 'ข้าวห่อหมกทะเล',
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

    let soldOut = [1, 2, 3, 5];
    let menu = null;

    if (soldOut.includes(groupId)) {
        console.log('อาหารหมด');
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

    document.getElementById('normal').checked = true;
} 

// กดหลับไปหน้าhomeเหมือนเดิม
function backHomePage() {
    
    const home = document.getElementById('home');
    const addMenu = document.getElementById('addMenu');
    const detailMenu = document.getElementById('detailMenu');

    const spicy = document.getElementsByName('spicy');
    const meat = document.getElementsByName('meat');
    const size = document.getElementsByName('size');
    const ricesize = document.getElementsByName('ricesize');

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
    for (let i = 0; i < ricesize.length; i++) {
        ricesize[i].checked = false;
    }

    window.scrollTo(0, 0);
}


// การ์ดเพิ่มเข้าตะกร้าเรียบร้อบ
function showSuccessAlert(message) {
    document.getElementById('successAlertMessage').innerText = message;
    document.getElementById('successAlert').classList.remove('hidden');
}
function closeshowSuccessAlert() {
    document.getElementById('successAlert').classList.add('hidden');
}


// การ์ดแจ้งเตือนเวลาเลือกไม่ครบ
function showAlert(message) {
    document.getElementById('alertMessage').innerText = message;
    document.getElementById('customAlert').classList.remove('hidden');
}
// กดปุ่ม ตกลง เพื่อปิดการ์ด
function closeAlert() {
    document.getElementById('customAlert').classList.add('hidden');
}

// เช็คว่ากดเลือกระดับต่างๆครบมั้ย
function isChecked(name) {
    return document.querySelector(`input[name="${name}"]:checked`);
}
//เช็คว่าเราติ้ก กรอกถูกมั้ย ทุกอันครบมั้ย
function checkSelection() {

    showSuccessAlert("เพิ่มรายการอาหารลงตะกร้าเรียบร้อยแล้ว"); 
    setTimeout(function() {
        closeshowSuccessAlert();
        backHomePage();
    }, 1500);
}

//กดเอากับพิเศษต(ต้องกำหนดตัวแปรที่มันเก็บราคาที่เรากดพิเศษแล้วค่อยเอาไปคำนวณราคารวม)
let count = 1;
let extraPrice = 0;
function updateDisplay() {
    document.getElementById('value').textContent = count;
    
    // คำนวณราคา (ราคาปกติ + ราคาพิเศษ) * จำนวนจาน
    let total = (Price + extraPrice) * count;
    document.getElementById('price').textContent = total + " บาท";
    
}

function changeSize() {
    // เช็คว่า id="extra" โดนเลือกอยู่หรือเปล่า
    const isExtra = document.getElementById('extra').checked;
    
    if (isExtra) {
        extraPrice = 10; 

    } else {
        extraPrice = 0;  
    }
    
    updateDisplay();
}

function plusMenu() {
    if (count < 10) {
        count += 1;
        updateDisplay();

    } else {
        showAlert("ไม่สามารถเพิ่มจำนวนได้เกิน 10 รายการ");
    }
}

function minusMenu() {
    if (count > 1) {
        count -= 1;
        updateDisplay();
    }
}

