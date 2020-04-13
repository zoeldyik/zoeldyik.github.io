$('.carousel').carousel({
    interval: 4000
})


const menus = document.querySelectorAll('main ul li a');
// console.log(menus);
menus.forEach(menu => {
    menu.addEventListener('click', function (e) {
        const data = e.target.dataset.target;
        // console.log(data);

        document.querySelectorAll('.content').forEach((co) => {
            if (co.classList.contains(data)) {
                // co.style.display = "";
                co.classList.add('open');
            }
        })
    })
})



const navigasis = document.querySelectorAll('.navigasi');
// console.log(navigasis);
navigasis.forEach(navigasi => {
    navigasi.addEventListener('click', function (e) {
        // console.log(e.target.parentElement.parentElement);
        // e.target.parentElement.parentElement.style.display = 'none';
        e.target.parentElement.parentElement.classList.remove('open');

    })
})



//script untuk tabs lokasi
const mapLinks = document.querySelectorAll('.lokasi .nav-item a');

mapLinks.forEach(link => {
    link.style.fontWeight = 600;

    if (link.classList.contains('active') === false) {
        link.style.color = "white";
    } else {
        link.style.color = "#572FBD";
    }
})

mapLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        mapLinks.forEach(link => {
            link.style.color = "white";
        })
        e.target.style.color = "#572FBD";
    })
})



