

function mudaTema(){
    let root =document.querySelector('body');
    if(document.querySelector('.switch input').checked){
    
    root.style.setProperty('--bgdk', '#d7d7d7' );
    root.style.setProperty('--textareabg', '#f6f6f6');
    root.style.setProperty('--superiorbar', '#d9d9d9');
    root.style.setProperty('--fontcolor', '#252525');
}
else 
{
    root.style.setProperty('--bgdk', '#21222C' );
    root.style.setProperty('--textareabg', '#282A36');
    root.style.setProperty('--superiorbar', '#191A21');
    root.style.setProperty('--fontcolor', '#E4E4E4');
}
}