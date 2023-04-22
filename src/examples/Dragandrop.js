import React from 'react'

export default function Dragandrop() {
    function dragStart(event) {
        event.dataTransfer.setData("item", event.target.id);
        var item_container = document.getElementById(event.target.id).parentElement.className;
        event.dataTransfer.setData("item_container", item_container);
        // console.log(item_container);
        console.log('Dragged item: '+event.target.id+' from '+item_container);
    }

    function dragit(event){
        // console.log('Item is being dragged!');
    }

    function dropit(event){
        // event.preventDefault();
        console.log(event);
        const item = event.dataTransfer.getData("item");
        const item_container = event.dataTransfer.getData("item_container");
        console.log(item);
        event.target.appendChild(document.getElementById(item));
        console.log('dropped inside - '+item_container);
    }

    function allowDrop(event) {
        event.preventDefault();
    }

    return (
        <div>
            <div className="items">
                <div onDragStart={dragStart} onDrag={dragit} draggable="true" id="dragtarget1">Apple</div>
                <div onDragStart={dragStart} onDrag={dragit} draggable="true" id="dragtarget2">Ball</div>
                <div onDragStart={dragStart} onDrag={dragit} draggable="true" id="dragtarget3">Cat</div>
            </div>
            <div onDrop={dropit} onDragOver={allowDrop} className="container1" droppable="true" style={{float: 'left', width: '50%', height: '500px', backgroundColor: '#ccc'}}>
                First Droppable area
            </div>

            <div onDrop={dropit} onDragOver={allowDrop} className="container2" droppable="true" style={{float: 'right', width: '50%', height: '500px', backgroundColor: '#ddd'}}>
                Second Droppable area
            </div>
        </div>
    )
}