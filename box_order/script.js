let box= document.querySelectorAll('.box');
let boxArea=document.querySelectorAll('.area');

let id;
box.forEach(x=>{
    x.ondragstart=(e)=>{
        id=document.getElementById(x.id).getAttribute('id');
      };
    
})

boxArea.forEach(x=>{
    x.ondragover=(e)=>{
        e.preventDefault();
    };
   x.ondrop=()=>{
        let dataId =  x.getAttribute('data-id');
        let dragElement=document.getElementById(id);
        if (dataId!=id) {
        }else
        {
            x.appendChild(dragElement);
        }
    };
})