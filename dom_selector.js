const colorBoxContainer = document.querySelector('#color-box-container');

colorBoxContainer.addEventListener("click", (e) => {
    console.log(e.target);
    const color = getComputedStyle(e.target).backgroundColor;
    console.log(color);
    colorBoxContainer.style.backgroundColor = color;
}, false);

console.log("Hi");


let querySelectorID = document.getElementById('dark-mode');
console.log(`SelectByID: ${querySelectorID}, Return type: ${typeof querySelectorID}`);

let querySelectorClassSingle = document.getElementsByClassName('main-container');
console.log(`SelectByClass_Single_Class: ${querySelectorClassSingle}, Return type: ${typeof querySelectorClassSingle}`);

let querySelectorMultipleSingle = document.getElementsByClassName('color-box');
console.log(`SelectByClass_Multiple_Class: ${querySelectorMultipleSingle}, Return type: ${typeof querySelectorMultipleSingle}`);

let querySelectorTagName = document.getElementsByTagName('h1');
console.log(`SelectByClassTagName: ${querySelectorTagName}, Return type: ${typeof querySelectorTagName}`);

let querySelector = document.querySelector('.color-box');
console.log(`SelectByQuerySelector: ${querySelector}, Return type: ${typeof querySelector}`);

let querySelector2 = document.querySelector('#main-container');
console.log(`SelectByQuerySelector2: ${querySelector2}, Return type: ${typeof querySelector2}`);

let querySelectorAll = document.querySelectorAll('.color-box');
console.log(`SelectByClassAll: ${querySelectorAll}, Return type: ${typeof querySelectorAll}`);

let querySelectorAll2 = document.querySelectorAll('#main-container');
console.log(`SelectByIDAll2: ${querySelectorAll2}, Return type: ${typeof querySelectorAll2}`);


/*
    ╔══════════════════════════════════════╗
     ➡️➡️➡️➡️➡️ Single Element ➡️➡️➡️➡️➡️
    ╚══════════════════════════════════════╝

    ➔ A direct reference to a single DOM node.
    ➔ Single Element (HTMLElement), not collection.

    1. document.getElementById('id');
    2. document.querySelector('selector');


    ╔══════════════════════════════════════╗
     ➡️➡️➡️➡️➡️ HTML Collection ➡️➡️➡️➡️➡️
    ╚══════════════════════════════════════╝

    ➔ Collection of elements only (no text nodes).
    ➔ Live (auto-updates when DOM changes).
    ➔ Array-like, but not a real Array(you can access by index, .length, can't directly use .forEach(), .map(), etc.).

    1. document.getElementsByClassName('class');
    2. document.getElementsByTagName('tag');
    3. element.children;


    ╔══════════════════════════════════╗
     ➡️➡️➡️➡️➡️ Node List ➡️➡️➡️➡️➡️
    ╚══════════════════════════════════╝

    ➔ List of nodes (elements, text, depending on what you select).
    ➔ Usually static (except childNodes is live).
    ➔ Supports .forEach() but not full Array methods.

    1. document.querySelectorAll('selector');
    2. element.childNodes;

*/

/*
    Selector Method                             | What it Selects                           | Return Type                   | Live?      | Notes
    document.getElementById('id')               | First matching ID                         | Single Element (HTMLElement)  | ❌        | No collection, just one element
    document.getElementsByClassName('class')    | All matching classes                      | HTMLCollection                | ✅        | Auto-updates when DOM changes
    document.getElementsByTagName('tag')        | All matching tags                         | HTMLCollection                | ✅        | Auto-updates
    document.querySelector('selector')          | First matching CSS selector               | Single Element (HTMLElement)  | ❌        | Only one element
    document.querySelectorAll('selector')       | All matching CSS selectors                | NodeList                      | ❌        | Static list
    element.children                            | All child elements                        | HTMLCollection                | ✅        | Only element nodes (no text/comments)
    element.childNodes                          | All child nodes (element, text, comments) | NodeList                      | ✅        | Includes text nodes too
    element.getElementsByClassName('class')     | All matching classes inside element       | HTMLCollection                | ✅        | Same as document-level but scoped
    element.getElementsByTagName('tag')         | All matching tags inside element          | HTMLCollection                | ✅        | Same
    element.querySelector('selector')           | First matching inside element             | Single Element                | ❌        | Same as document but scoped
    element.querySelectorAll('selector')        | All matching inside element               | NodeList                      | ❌        | Same as document but scoped
*/