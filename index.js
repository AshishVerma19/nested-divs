const body = document.body;

function addDiv(parent, count) {
    const div = document.createElement('div');

    div.id= parseInt(count) + 1;
    parent.appendChild(div);

    return div.id;
}

function createDivs(count) {
    debugger;
    let i = 0;
    let parent = body;

    while( i <= count) {
        i = addDiv(parent, i);

        parent = document.getElementById(i);
    }
}

createDivs(100);