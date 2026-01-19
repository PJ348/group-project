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
        name: 'ข้าวไข่ขยร้ปลากระป๋อง',
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
        name: 'ข้าวหน้าหมูเทอริยากา',
        price: 55,
        img: '../img/food-menu8.jpg'
    }
]

// กดเพิ่มเมนูแล้วซ่อนหน้าหลักแล้วให้หน้ารายละเอียดเมนูขึ้นมาแทน
function addMenuPage(groupId) {
    const home = document.getElementById('home');
    const addMenu = document.getElementById('addMenu');

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

    document.getElementById('addMenuName').innerText = menu.name;
    document.getElementById('addMenuPrice').innerText = menu.price + 'บาท';
    document.getElementById('addMenuImg').src = menu.img;
    document.getElementById('price').innerText = menu.price + 'บาท';

}

// กดหลับไปหน้าhomeเหมือนเดิม
function backHomePage() {
    const home = document.getElementById('home');
    const addMenu = document.getElementById('addMenu');

    const spicy = document.getElementsByName('spicy');
    const meat = document.getElementsByName('meat');
    const  size = document.getElementsByName('size');
    const eatWhere =document.getElementsByName('eat-where');

    home.classList.remove('hidden');
    addMenu.classList.add('hidden');

    for(let i =0; i < spicy.length; i ++){
        spicy[i].checked = false;
    }
    for(let i = 0; i < meat.length; i++){
        meat[i].checked = false;
    }
    for(let i = 0; i < size.length; i++){
        size[i].checked = false;
    }
    for(let i = 0; i < eatWhere.length; i++){
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
    const backHome = document.getElementById('backHome');
    const eatHere = document.getElementById('eatHere');

    const nameBuy = document.getElementById('nameBuy');
    const phoneBuy = document.getElementById('phoneBuy');
    const numberTable = document.getElementById('numberTable');

    const phone = phoneBuy.value.trim();
    const table = numberTable.value.trim();

    if (!isChecked('spicy')) {
        alert("กรุณาเลือกระดับความเผ็ด");
        // document.querySelector('input[name="spicy"]').focus();
        return;
    }

    if (!isChecked('meat')) {
        alert("กรุณาเลือกประเภทเนื้อสัตว์");
        return;
    }

    if (!isChecked('size')) {
        alert("กรุณาเลือกปริมาณอาหาร");
        return;
    }

    if (!isChecked('eat-where')) {
        alert("กรุณาเลือกสถานที่รับประทานอาหาร");
        return;
    }

    if (backHome.checked) {
        
        if (nameBuy.value.trim() === '') {
            alert('กรุณากรอกชื่อ');
            return;
        }

        if (phone === '') {
            alert('กรุณากรอกเบอร์โทรศัพท์');
            return;
        }

        if (!/^0\d{9}$/.test(phone)) { //ถ้าไม่ เริ่มจาก0แล้วมีเลขต่อท้ายอีก9ตัวแล้วจบ test()คือเช็คใน()
            alert('กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง');
            return;
        }
    }

    if (eatHere.checked) {
        
        if (table === '') {
            alert('กรุณาระบุเลขโต๊ะ');
            return;
        }

        if (!/^[1-4]$/.test(table)) {
            alert('กรุณากรอกเลขโต๊ะให้ถูกต้อง');
        }
    }
}

// กดเดลือกเพิ่มเติม(กลับบ้าน กินนี่) แล้วมีตช่องขึ้นมาให้กรอก
function selectEatWhere(groupId) {
    const detailBackHome = document.getElementById('detailBackHome');
    const detailEatHere = document.getElementById('detailEatHere');

    detailBackHome.classList.add('hidden');
    detailEatHere.classList.add('hidden');

    if (groupId === 'back-home') {
        detailBackHome.classList.remove('hidden');
        document.getElementById('numberTable').value = '';
    }

    if (groupId === 'eat-here') {
        detailEatHere.classList.remove('hidden');
        document.getElementById('nameBuy').value = '';
        document.getElementById('phoneBuy').value = '';
    }
}

// กดเพิ่มจำนวนเมนู + ราคารวม
let count = 1;
let Price = null;

function plusMenu() {
    count += 1;
    document.getElementById('value').textContent = count;
    document.getElementById('price').textContent = (Price * count) + " บาท";
}

function minusMenu() {
    if (count > 1) {
        count -= 1;
        document.getElementById('value').textContent = count;
        document.getElementById('price').textContent = (Price * count) + " บาท";
    }
}
