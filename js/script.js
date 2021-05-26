//=======================================
//===============Search button============
//=======================================
function buttonChange() {
    var element = document.querySelector(".nav-button");
    element.classList.toggle("change");
}
// Open the full screen search box
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

// Close the full screen search box
function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}
//................................................................
/* Demo purposes only */
var snippet = [].slice.call(document.querySelectorAll('.hover'));
if (snippet.length) {
    snippet.forEach(function (snippet) {
        snippet.addEventListener('mouseout', function (event) {
            if (event.target.parentNode.tagName === 'figure') {
                event.target.parentNode.classList.remove('hover')
            } else {
                event.target.parentNode.classList.remove('hover')
            }
        });
    });
}
//=======================================
//===============PRICE FILTER============
//=======================================
var limitSlider = document.getElementById('slider-limit');

noUiSlider.create(limitSlider, {
    
    start: [10, 3000],
    step: 90,
    behaviour: 'drag',
    connect: true,
    range: {
        'min': 10,
        'max': 5000
    },
    format: wNumb({
        decimals: 3,
        thousand: '.',
        prefix: '$'
    }),
});
var limitFieldMin = document.getElementById('slider-limit-value-min');
var limitFieldMax = document.getElementById('slider-limit-value-max');

limitSlider.noUiSlider.on('update', function (values, handle) {
    (handle ? limitFieldMax : limitFieldMin).innerHTML = values[handle];
});