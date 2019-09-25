const arr = [
    {
        model: 'Iphone 5',
        price: '$519',
        type: 'phone',
        img: './img/iphone.png',
    },
    {
        model: 'Lenovo Legion',
        price: '$919',
        type: 'laptop',
        img: './img/iphone.png',
    },
    {
        model: 'Asus ROG',
        price: '$1019',
        type: 'laptop',
        img: './img/iphone.png',
    },
    {
        model: 'Watch',
        price: '$219',
        type: 'watch',
        img: './img/iphone.png',
    },
    {
        model: 'Watch 2',
        price: '$119',
        type: 'watch',
        img: './img/iphone.png',
    },
    {
        model: 'Iphone 10',
        price: '$519',
        type: 'phone',
        img: './img/iphone.png',
    },
    {
        model: 'Tie',
        price: '$519',
        type: 'accessories',
        img: './img/iphone.png',
    },
    {
        model: 'Iphone XS',
        price: '$519',
        type: 'phone',
        img: './img/iphone.png',
    },

];
/*


let block = document.querySelector('.content');
for (let i = 0; i < arr.length; i++) {
    block.innerHTML += ` 
 <div class="content-block product ${arr[i].type} ">
        <div class="content-block-img"><img class="content__img" src="${arr[i].img}" alt="iphone"></div>
        <div class="content-block-title"><span class="content__text">${arr[i].model}</span></div>
        <div class="content-block-price"><span class="content__price">${arr[i].price}<sup>.00</sup></span></div>
    </div>
`;
}


$('.filter__input').on('change', function () {
    $('.product').hide();
    let sel = $('.filter__input:checked').map(function (_, el) {
        return $(el).attr('id');
    }).get();
    //console.log(sel);
    if (sel.length > 0) {
        for (let i = 0; i < sel.length; i++) {
            $('.' + sel[i]).show();
        }
    } else
        $('.product').show();

});
*/

$('.content__button').click(function () {
    $('.overlay').fadeIn().addClass('disabled');
});

$('.close-popup').click(function () {
    $('.overlay').fadeOut();
});
