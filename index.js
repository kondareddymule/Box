//const box = document.getElementById('container');
// const input = document.getElementById('input');
// const submit = document.getElementById('btn');
// const del = document.getElementById('del');

// const selectedElements = [];

// submit.addEventListener('click', function () {
//     const value = input.value;

//     for (let i = 0; i < value; i++) {
//         const element = document.createElement('div');
//         element.classList.add('container');
//         element.id = `box-${i}`;
//         element.textContent = i;
//         element.addEventListener('click', () => toggleSelection(element));
//         box.appendChild(element);
//     }
// });


// function toggleSelection(element) {
//     const index = selectedElements.indexOf(element);

//     if (index > -1) {
//         selectedElements.splice(index, 1);
//         element.style.backgroundColor = ''; 
//     } else {
//         selectedElements.push(element);
//         element.style.backgroundColor = 'lightgreen';
//     }

//     console.log('Selected elements:', selectedElements);
// }

// del.addEventListener('click', function () {
//     console.log('Deleting selected elements...');
    
//     selectedElements.forEach(function (element) {
//         if (element) {
//             element.remove();
//             console.log('Element removed:', element.id);
//         }
//     });
    
//     selectedElements.length = 0;
//     console.log('Array after deletion:', selectedElements);
// });







// const position = {top:0, left:0}

// box.style.position = "absolute";
// box.style.left = `${position.left}px`;
// box.style.top = `${position.top}px`;

// box.style.top = '0px'
// box.style.left = '0px'

// window.addEventListener('keydown', function(event) {
//     const bounds = box.getBoundingClientRect()

//     if (bounds.top > 0 && bounds.bottom < window.innerHeight && bounds.left > 0 && bounds.right < window.innerWidth) {
//     if (event.key === "b") {
//         position.top += 10
//         box.style.top = `${position.top}px`
//     }
//     if (event.key === "l") {
//         position.left += 10
//         box.style.left = `${position.left}px`
//     }
//     if (event.key === "t") {
//         position.top -= 10
//         box.style.top = `${position.top}px`
//     }
//     if (event.key === "r") {
//         position.left -= 10
//         box.style.left = `${position.left}px`
//     }
// }
// })



// let position = { top: 0, left: 0 };


// box.style.position = "absolute";
// box.style.left = `${position.left}px`;
// box.style.top = `${position.top}px`;

// let isDrag = false


// window.addEventListener('mousedown', function() {
//     isDrag = true
//     window.addEventListener('mousemove', drag)
//     window.addEventListener('mouseup', stopdrag)
// })

// function drag(event) {

//     if (isDrag) {
//         let newLeft = event.clientX - (box.offsetWidth / 2);
//         let newTop = event.clientY - (box.offsetHeight / 2);

//     if (newLeft >= 0 && newLeft + box.offsetWidth <= window.innerWidth) {
//         position.left = newLeft;
//     }

//     if (newTop >= 0 && newTop + box.offsetHeight <= window.innerHeight) {
//         position.top = newTop;
//     }


//     box.style.left = `${position.left}px`;
//     box.style.top = `${position.top}px`;
//     }
// };

// function stopdrag(e) {
//     isDrag = false
//     window.removeEventListener('mousemove', drag)
//     window.removeEventListener('mouseup', stopdrag)
// }


// const element = document.getElementById('container');

// element.addEventListener('click', function() {
//     console.log('Clicked!');
// });

// element.addEventListener('dblclick', function() {
//     console.log('Double Clicked!');
// });

// element.addEventListener('mousedown', function() {
//     console.log('Mouse Down!');
// });

// element.addEventListener('mouseup', function() {
//     console.log('Mouse Up!');
// });

// element.addEventListener('mousemove', function() {
//     console.log('Mouse Moved!');
// });

// element.addEventListener('mouseenter', function() {
//     console.log('Mouse Entered!');
// });

// element.addEventListener('mouseleave', function() {
//     console.log('Mouse Left!');
// });

// element.addEventListener('mouseover', function() {
//     console.log('Mouse Over!');
// });

// element.addEventListener('mouseout', function() {
//     console.log('Mouse Out!');
// });



// const container = document.getElementById('container')

// let height = 100
// let width = 100

// container.style.height = height + 'px'
// container.style.width  = width + 'px'
// container.style.border = '2px solid black'
// container.style.position = 'absolute'
// isResizing = false


// let startX, startY, startWidth, startHeight

// container.addEventListener('mousedown', function(e){
//     isResizing = true;
//     startX = e.clientX
//     startY = e.clientY
//     startWidth = width
//     startHeight = height


//     document.addEventListener('mousemove', onmousemove)
//     document.addEventListener('mouseup', onmouseup)
// })

// function onmousemove(e) {
//     if (isResizing) {
//         width = Math.max(startWidth + e.clientY - startY, 100)
//         height = Math.max(startHeight + e.clientX - startX, 100)

//         container.style.width = width + 'px';
//         container.style.height = height + 'px';


//     }
// }

// function onmouseup(e) {
//     isResizing = false
//     document.removeEventListener('mousemove', onmousemove)
//     document.removeEventListener('mouseup', onmouseup)
// }




function createBox(x,y) {
    const box = document.createElement('div')
    box.classList.add('draggable')
    box.setAttribute('draggable', true)
    box.style.left = `${x}px`
    box.style.top = `${y}px`
    document.body.appendChild(box)
}

document.addEventListener('dragover',function(e) {
    e.preventDefault()
})

document.addEventListener('drop', function(e) {
    const startX = e.clientX
    const startY = e.clientY
    createBox(startX,startY)
})