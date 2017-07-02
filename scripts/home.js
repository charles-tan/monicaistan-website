var page = 1;

$(document).ready(function() {
    $('#nav_list').css({'visibility':'hidden'});
})

// function showPage() {
//     switch page {
//     case 3:
//         code block
//         break;
//     case 2:
//         code block
//         break;
//     default:
//         code block
//     }
// }

function hamburgerMenu(x) {
    x.classList.toggle("change");
}
