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

let block = document.querySelector('.content');
for (let i = 0; i < arr.length; i++) {
    block.innerHTML += ` 
 <div class="content-block product ${arr[i].type} ">
        <div class="content-block-img"><img class="content__img" src="${arr[i].img}" alt="iphone"></div>
        <div class="content-block-title"><span class="content__text">${arr[i].model}</span></div>
        <div class="content-block-price"><span class="content__price">${arr[i].price}<sup>.00</sup></span></div>
        <div class="content-block-btn">
            <button class="content__button" data-product-id="${i}">Купить</button>
        </div>
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


$('.content__button').click(function (e) {
    console.log(e.target.getAttribute("data-product-id"));
    let modelId = e.target.getAttribute('data-product-id');
    $('#overlay').fadeIn().addClass('disabled').html(`
    <div class="popup">
            <div class="popup-header"><span class="popup-header__text">${arr[modelId].model}</span></div>
            <div class="popup-content">
                <div class="popup-content-img">
                    <img class="popup__img" src="./img/iphone.png" alt="iphone">
                </div>
                <div class="popup-content-form">
                    <form action="">
                        <div class="popup-form-group">
                            <div class="popup-content-form__label"><label for="memory">Память</label></div>
                            <select name="memory" id="memory">
                                <option value="64">64Gb</option>
                                <option value="32">32Gb</option>
                            </select>
                            <div class="popup-content-form__label"><label for="count">Количество</label></div>
                            <select name="memory" id="count">
                                <option value="1">1</option>
                            </select>
                            <div class="popup-form-group">
                                <div class="popup-price-block"><span class="popup__price">${arr[modelId].price}<sup>.00</sup></span>
                                </div>
                                <div class="popup-button-block">
                                    <button class="popup__button content__button">Купить</button>
                                </div>
                                <div class="popup-text-block">
                                    <p class="popup__text">Посмотреть в магазине</p>
                                </div>
                            </div>
                        </div>
                        <div class="popup-form-group">
                            <div class="popup-content-form__label"><label for="color">Цвет</label></div>
                            <select name="memory" id="color">
                                <option value="white">Белый</option>
                                <option value="black">Черный</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
            <div class="close-popup"></div>
        </div>
    `);

    //отрисовать popup
    $('.close-popup').click(function () {
        $('#overlay').fadeOut();
    });
});



