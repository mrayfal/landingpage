// navbarr
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar-new").style.top = "0";
  } else {
    document.getElementById("navbar-new").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}


// sliders

let slideIndex = 0;
let intervalId;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    const offset = -slideIndex * 100 + '%';
    document.querySelector('.slider').style.transform = `translateX(${offset})`;
}

function Slide() {
    slideIndex++;
    showSlide(slideIndex);
}

function startAutoSlide() {
    intervalId = setInterval(Slide, 4000); // Change slide every 3 seconds
}

function stopAutoSlide() {
    clearInterval(intervalId);
}

// Memulai slide otomatis saat halaman dimuat
startAutoSlide();

// Berhenti slide otomatis saat mouse masuk ke dalam slider
document.querySelector('.slider-container').addEventListener('mouseenter', stopAutoSlide);

// Mulai slide otomatis kembali saat mouse meninggalkan slider
document.querySelector('.slider-container').addEventListener('mouseleave', startAutoSlide);




// remove element 
var elemenToHide = document.getElementById('elemenToHide');
var parentElem = elemenToHide.parentNode;
var isRemoved = false;


function checkWidthAndToggleElement() {
    var lebarLayar = window.innerWidth;

    if (lebarLayar < 990 && !isRemoved) {
        parentElem.removeChild(elemenToHide);
        isRemoved = true;
    }
    else if (lebarLayar >= 990 && isRemoved) {
        parentElem.appendChild(elemenToHide);
        isRemoved = false;
    }
}


checkWidthAndToggleElement();


window.addEventListener('resize', function () {
    checkWidthAndToggleElement();
});

// hitungan mundur

// Tanggal target untuk hitungan mundur (tahun, bulan (0-11), tanggal, jam, menit, detik)
const targetDate = new Date('2024-12-31T23:59:59');

// Fungsi untuk memperbarui hitungan mundur
function updateCountdown() {
    const now = new Date().getTime(); // Waktu sekarang
    const distance = targetDate - now; // Selisih antara tanggal target dan waktu sekarang

    // Menghitung sisa waktu dalam jam, menit, dan detik
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Menampilkan hasil dalam elemen dengan id "countdown"
    document.getElementById('countdown').innerHTML = hours + ' : ' + minutes + ' : ' + seconds;

    // Jika waktu target sudah tercapai, tampilkan pesan
    if (distance < 0) {
        clearInterval(interval); // Hentikan pembaruan
        document.getElementById('countdown').innerHTML = 'Countdown ended';
    }
}

// Memanggil fungsi updateCountdown setiap 1 detik
const interval = setInterval(updateCountdown, 1000);


// sliders
const gallery = document.getElementById('image-gallery');
const slidermans = document.getElementById('slidermans');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let isDown = false;
let startX;
let scrollLeft;


gallery.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - gallery.offsetLeft;
    scrollLeft = gallery.scrollLeft;
    gallery.style.cursor = 'grabbing';
});

gallery.addEventListener('mouseleave', () => {
    isDown = false;
    gallery.style.cursor = 'grab';
});

gallery.addEventListener('mouseup', () => {
    isDown = false;
    gallery.style.cursor = 'grab';
});

gallery.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - gallery.offsetLeft;
    const walk = (x - startX) * 1;
    gallery.scrollLeft = scrollLeft - walk;
});

gallery.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

gallery.addEventListener('wheel', (e) => {
    e.preventDefault(); // Mencegah perilaku standar dari scroll wheel
    gallery.scrollLeft += e.deltaY * 2; // Menggulir ke samping dengan mengubah nilai scrollLeft
});

prevBtn.addEventListener('click', () => {
    gallery.scrollLeft -= 320; // Sesuaikan jarak scroll sesuai lebar kotak
});

nextBtn.addEventListener('click', () => {
    gallery.scrollLeft += 320; // Sesuaikan jarak scroll sesuai lebar kotak
});

// sliders produk 

document.querySelectorAll('.slidersproduk-container').forEach(container => {
    const slidersproduk = container.querySelector('.image-slidersproduk');

    let isDown = false;
    let startX;
    let scrollLeft;

    slidersproduk.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slidersproduk.offsetLeft;
        scrollLeft = slidersproduk.scrollLeft;
        slidersproduk.style.cursor = 'grabbing';
    });

    slidersproduk.addEventListener('mouseleave', () => {
        isDown = false;
        slidersproduk.style.cursor = 'grab';
    });

    slidersproduk.addEventListener('mouseup', () => {
        isDown = false;
        slidersproduk.style.cursor = 'grab';
    });

    slidersproduk.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slidersproduk.offsetLeft;
        const walk = (x - startX);
        slidersproduk.scrollLeft = scrollLeft - walk;
    });

    slidersproduk.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });

    slidersproduk.addEventListener('wheel', (e) => {
        e.preventDefault(); // Prevent the default behavior of scroll wheel
        slidersproduk.scrollLeft += e.deltaY * 3; // Scroll horizontally by changing the scrollLeft value
    });
});

// animation

