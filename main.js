
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.modal')
const modalContainer = document.querySelector('.modal-container')
const modalClose = document.querySelector('.modal-close')

for ( var buyBtn of buyBtns) {
    buyBtn.onclick = () => {
        modal.classList.add('open');
        modalClose.onclick = () => {
            modal.classList.remove('open')
        }
        modal.onclick = () => {
            modal.classList.remove('open')
        }   
    }
}
// Sự kiện ngưng nổi bọt thẻ con 
modalContainer.onclick = (e) => {
    e.stopPropagation();
}


// Đóng mở menu mobile
const header = document.querySelector('#header')
const menuMobile = document.querySelector('.memu-mobile-btn')
const headerClientHeight = header.clientHeight
menuMobile.onclick = () => {
    // header.clientHeight là chiều cao header
    if (header.clientHeight === headerClientHeight) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}


// Tự động ẩn menu khi chọn vào thẻ a trong menu
// Lấy ra tất cả thẻ a có href có dấu #, dấu * là all
const aElements = document.querySelectorAll('#nav li a[href*="#"]')
for (var aElement of aElements) {
    aElement.onclick = function(e) {
        const isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
        if (!isParentMenu) {
            header.style.height = null;
        } else {
            e.preventDefault();
        }
    }
}

