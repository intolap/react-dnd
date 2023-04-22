import {useState, React} from 'react'
import html2canvas from 'html2canvas';
import logo from '../logo.png'
export default function Html2Canvas() {
    const [isActive, setIsActive] = useState(false);
    function Capture(){
        setIsActive(true);
        setTimeout(function(){
            html2canvas(document.querySelector("#capture"),{
                /* allowTaint: true,
                useCORS: true */
            }).then(canvas => {
                var a = document.createElement('a');
                a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
                a.download = 'download.jpg';
                a.click();
                setIsActive(false);
            });
        },100);
    }

    return (
        <>
        <div id="capture" style={{margin: 'auto', overflow: 'scroll', width: isActive ? '100%' : '300px',height: isActive ? '100%' : '100px'}}>
        <img src={logo}/>
        What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

        Why do we use it?
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </div>
        <button onClick={Capture}>Capture</button>
        </>
    )
}