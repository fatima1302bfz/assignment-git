/* square surface */
var len, surface, square_result, form1
    /* ****** */
form1 = document.getElementById("form1")
square_result = document.querySelector('.square_result')
    /* **** */
form1.addEventListener("submit", function(event) {
    event.preventDefault()
    len = document.getElementById('height').value
    unit = document.getElementById('unit1').value
    if (len > 0) {
        surface = len * len
        square_result.innerHTML = `Square area is:  <span style="color:blue;width:100px;
        background-color:white;padding: 5px;">${surface} ${unit}²</span>.`
    } else { square_result.innerHTML = `<span style="color:red"> invalid input</span>.` }
})

/* **************************************************************************************************** */
/* Rectangle surface */
var lenth, width, rSurface, rectResult, form2
    /* ****** */
form2 = document.getElementById("form2")
rectResult = document.querySelector('.rectangle_result')
    /* **** */
form2.addEventListener("submit", function(event) {
        event.preventDefault()
        lenth = document.getElementById('lenth').value
        width = document.getElementById('width').value
        unit = document.getElementById('unit2').value
        if (lenth > 0 && width > 0) {
            rSurface = lenth * width
            rectResult.innerHTML = `Rectangle area is:  <span style="color:blue;width:100px;
            background-color:white;padding: 5px;">${rSurface} ${unit}²</span>.`
        } else {
            rectResult.innerHTML = `<span style="color:red"> invalid input</span>.`
        }
    })
    /* **************************************************************************************************** */
    /* circle surface */
var radius, cirSurface, cirResult, form3
    /* ****** */
form3 = document.getElementById("form3")
cirResult = document.querySelector('.circle_result')
    /* **** */
form3.addEventListener("submit", function(event) {
    event.preventDefault()
    radius = document.getElementById('radius').value
    unit = document.getElementById('unit3').value
    if (radius > 0) {
        cirSurface = (radius * radius) * 3.14
        cirResult.innerHTML = `Circle area is:  <span style="color:blue;width:100px;
        background-color:white;padding: 5px;">${cirSurface} ${unit}²</span>.`
    } else {
        cirResult.innerHTML = `<span style="color:red"> invalid input</span>.`
    }
})
