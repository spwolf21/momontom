const title = document.querySelector('#title');
const CLICKED_CLASS = "clicked"

function handleClick() {
    const currentClass = title.className;
    if (currentClass == CLICKED_CLASS ) {
        title.className = "";
    } else {
        title.className = CLICKED_CLASS;
    }
}

title.addEventListener("click", handleClick );