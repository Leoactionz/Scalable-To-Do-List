// Long Version 
// UI CONTROLLER
let UIController = (() => {
    // Domstrings make programmers lives easier 
    // enables quick update here instead of updating each methods 
    // when there is a change on the interface
    let DOMstrings = {
        addToDo: ".addToDo",
        inputField: ".inputField",
        toDoContainer: ".toDoContainer",
    };

    return {
        getInput: () => {
            return {
                addBtn: document.querySelector(DOMstrings.addToDo),
                todo: document.querySelector(DOMstrings.inputField),
                container: document.querySelector(DOMstrings.toDoContainer),
            };
        },

        // Exposing the DOMstrings to make it public
        getDOMStrings: () => {
            return DOMstrings;
        }

    };
})();


let controller = ((UICtrl) => {

    let setupEventListeners = function () {
        let DOM = UICtrl.getDOMStrings();

        document.querySelector(DOM.addToDo).addEventListener("click", ctrlAddItem);

        // keypress listener happened mostly on the global scope (Enter Key input)
        document.addEventListener("keypress", (event) => {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };

    let ctrlAddItem = () => {
        let input, paragraph;

        // 1. Get the filled input
        input = UICtrl.getInput();
        // 2. Create element to store input on HTML
        paragraph = document.createElement("p");
        // 3. Take in the inputted value
        paragraph.innerText = input.todo.value;
        // 4. Add create element to an existing element in html
        input.container.appendChild(paragraph);
        // 5. Clear the fields
        input.todo.value = '';
        
        // 6. Done entry
        paragraph.addEventListener('click', () => {
            paragraph.style.textDecoration = "line-through";
        })
        
        // 7. Delete entry
        paragraph.addEventListener('dblclick', function () {
            input.container.removeChild(paragraph);
        })

    };

    return {
        init: () => {
            console.log("Application has started");
            setupEventListeners();
        },
    };
})(UIController);

controller.init();




// Short Version 
// document.querySelector('.addToDo').addEventListener('click', ()=>{
//     let paragraph = document.createElement('p');
//     paragraph.innerText = document.querySelector('.inputField').value;
//     document.querySelector('.toDoContainer').appendChild(paragraph);
//     document.querySelector('.inputField').value = '';
//     paragraph.addEventListener('click', ()=>{paragraph.style.textDecoration = "line-through";})
//     paragraph.addEventListener('dblclick', ()=>{document.querySelector('.toDoContainer').removeChild(paragraph);})
// })