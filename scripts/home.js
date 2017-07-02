var page = 1;

$(document).ready(function() {
    // $('#nav_list').css({'visibility':'hidden'});
    var projects;
    $.getJSON("projects.json", function(data) {
        projects = data;
        var lists = [];
        var listlen = 3;
        for(var i = 0; i < listlen; i++) {
            lists.push([]);
        }
        for(var i = 0; i < projects.length; i++) {
            lists[i % listlen].push(projects[i]);
        }
        for(var i = 0; i < listlen; i++) {
            var list = lists[i]
            const markup = `
            <ul class="project_list">
                ${list.map(p =>
                        `<li><img src="${p.cover_img}" height=400 width=400></li>`
                 ).join('')}
             </ul>
            `;
            $('#work_lists').append(markup);
        }
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

})
