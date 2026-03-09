document.addEventListener('DOMContentLoaded', () => {

    // ดึงปุ่มฝั่งซ้ายมา
    const editDateBtn = document.getElementById('edit-date-btn');
    const editTimeBtn = document.getElementById('edit-time-btn');

    // ดึงวิว (View) ทั้ง 3 แบบในฝั่งขวามา
    const viewDefault = document.getElementById('view-default');
    const viewDate = document.getElementById('view-edit-date');
    const viewTime = document.getElementById('view-edit-time');

    // --- ฟังก์ชันหลัก: สลับหน้าจอ ---
    // ทริคคือ: เอา opacity-0 ออกเพื่อให้โชว์ และเอา translate-x-[200px] ออกให้มันสไลด์เข้ามาตรงกลาง
    function showView(targetView) {
        // 1. ซ่อนทุกหน้าให้หมดก่อน
        [viewDefault, viewDate, viewTime].forEach(view => {
            view.classList.add('opacity-0', 'pointer-events-none', 'translate-x-[200px]');
            // ให้ default มุดลงล่างแทนที่จะไปขวา จะได้ดูมีมิติ
            if (view === viewDefault) view.classList.replace('translate-x-[200px]', 'translate-y-[100px]');
        });

        // 2. โชว์หน้าที่เราต้องการ
        targetView.classList.remove('opacity-0', 'pointer-events-none', 'translate-x-[200px]', 'translate-y-[100px]');
    }

    // --- ผูก Event ปุ่มต่างๆ ---

    // กดแก้ไขวันที่ -> โชว์ฟอร์มวันที่
    editDateBtn.addEventListener('click', () => {
        showView(viewDate);
    });

    // กดแก้ไขเวลา -> โชว์ฟอร์มเวลา
    editTimeBtn.addEventListener('click', () => {
        showView(viewTime);
    });

    // กดยกเลิก (วันที่) -> กลับไปหน้าเริ่มต้น
    document.getElementById('cancel-date-btn').addEventListener('click', () => {
        showView(viewDefault);
    });

    // กดยกเลิก (เวลา) -> กลับไปหน้าเริ่มต้น
    document.getElementById('cancel-time-btn').addEventListener('click', () => {
        showView(viewDefault);
    });

    // (แถม) เวลากดตกลง ให้แสดงแจ้งเตือน และกลับไปหน้าเริ่มต้น
    document.getElementById('save-date-btn').addEventListener('click', () => {
        const newDate = document.getElementById('input-new-date').value;
        if (newDate) {
            alert('อัปเดต "วันที่" ในระบบสำเร็จ!');
            showView(viewDefault);
            // 💡 ทริค: ตรงนี้คุณสามารถเขียนโค้ดเอา newDate ไปแทนที่ตัวเลข "30/12/2569" ในกล่องซ้ายได้เลยครับ
        } else {
            alert('กรุณาเลือกวันที่ก่อนครับ');
        }
    });

    document.getElementById('save-time-btn').addEventListener('click', () => {
        const newTime = document.getElementById('input-new-time').value;
        if (newTime) {
            alert('อัปเดต "เวลา" ในระบบสำเร็จ!');
            showView(viewDefault);
            // 💡 ทริค: ตรงนี้คุณสามารถเอา newTime ไปแทนที่ตัวเลข "12:00 น." ในกล่องซ้ายได้เช่นกันครับ
        } else {
            alert('กรุณาเลือกเวลาก่อนครับ');
        }
    });

});