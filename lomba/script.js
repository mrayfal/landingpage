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
      document.getElementById('countdown').innerHTML = hours + ' : ' + minutes + ' : ' + seconds ;

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
let isDown = false;
let startX;
let scrollLeft;


gallery.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - gallery.offsetLeft;
    scrollLeft = gallery.scrollLeft;
});

gallery.addEventListener('mouseleave', () => {
    isDown = false;
});

gallery.addEventListener('mouseup', () => {
    isDown = false;
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
 const container = document.getElementById('image-gallery');

container.addEventListener('wheel', (e) => {
    e.preventDefault(); // Mencegah perilaku standar dari scroll wheel
    container.scrollLeft += e.deltaY * 0.50; // Menggulir ke samping dengan mengubah nilai scrollLeft
});