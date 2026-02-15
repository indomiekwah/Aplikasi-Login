/** @module login-scripts.js */
/**
* Membuat variabel loginFormElement untuk tampilan form.
* @constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');
/**
* Membuat variabel inputEmailElement untuk tampilan input email.
* @constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');
/**
* Membuat variabel inputPasswordElement untuk tampilan input password.
* @constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');


/**
* Membuat variabel expected email untuk menyimpan informasi email sementara
* @constant {string}
*/
const expectedEmail = 'admin@dicoding.com';
/**
* Membuat variabel expected email untuk menyimpan informasi password sementara
* @constant {string}
*/
const expectedPassword = 'superpassword';

/* Comment: Menambah aksi klik pada button. */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /**
  * Membuat variabel email untuk menyimpan nilai email yang didapatkan saat button ditekan.
  * @constant {string}
  */
  const email = inputEmailElement.value;
  /**
  * Membuat variabel email untuk menyimpan nilai password yang didapatkan saat button ditekan.
  * @constant {string}
  */
  const password = inputPasswordElement.value;
  
  /* Comment: Memastikan bahwa nilai email dan password sama dengan nilai yang tersimpan */
  if (email == expectedEmail && password == expectedPassword) {
    
    /* Comment: Jika sesuai, maka program akan berpindah ke halaman utama */
    goToHome();
  } else {
    showPopUp();
  }
});
