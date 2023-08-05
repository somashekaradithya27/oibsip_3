


    let input = document.querySelector(".enter-list");
    let add = document.querySelector(".add-list");
    let tass = document.querySelector(".tasks");

    add.addEventListener("click", () => {
        if (input.value.trim() !== "") {

            let newTa = document.createElement('div');
            newTa.classList.add('item');
            newTa.innerHTML = `
                <p>${input.value}</p>
                <div class="item-btn">
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-sharp fa-solid fa-xmark"></i>
                </div>
            `;
            tasks.appendChild(newTa);
            input.value = '';
            const initialTask = tasks.querySelector('.item-abc');
            if (initialTask) {
                initialTask.remove();
            }
        } else {
            alert('Please enter a task');
        }
    });
    let tasks = document.querySelector(".tasks");

    tass.addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-xmark')) {
            e.target.parentElement.parentElement.remove();
        }
    });
    tass.addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-pen-to-square')) {
            e.target.parentElement.parentElement.classList.toggle('strikethrough');
        }
    });
    