setInterval(navbar, 100);


function navbar() {
    const nav = document.getElementById('navbar');
    // jika lebar browser lebih dari 991px
    if (window.innerWidth > 991) {
        nav.classList.remove('bg-dark');
        // jika browser scroll lebih 200px
        if (window.pageYOffset > 200) {
            nav.classList.add('bg-dark');
        } else {
            nav.classList.remove('bg-dark');
        }
    } else {
        // jika lebar kurang browser dari 991px
        nav.classList.add('bg-dark');
    }
}


