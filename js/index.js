let $topLeft = document.querySelector('[data-position="top-left"]')
let $topRight = document.querySelector('[data-position="top-right"]')
let $bottomRight = document.querySelector('[data-position="bottom-right"]')
let $bottomLeft = document.querySelector('[data-position="bottom-left"]')
let $previewer = document.querySelector('#Previewer')
let $code = document.querySelector('.code')


$topLeft.addEventListener('keyup', changeBorders)
$topRight.addEventListener('keyup', changeBorders)
$bottomRight.addEventListener('keyup', changeBorders)
$bottomLeft.addEventListener('keyup', changeBorders)


function changeBorders() {
    $previewer.style.borderRadius = `${$topLeft.value}px ${$topRight.value}px ${$bottomRight.value}px ${$bottomLeft.value}px`
    $code.value = `border-radius: ${$topLeft.value}px ${$topRight.value}px ${$bottomRight.value}px ${$bottomLeft.value}px`
}

function clipboard() {
    $code.select()
    document.execCommand("Copy")
    alert("Copiado :)")
}