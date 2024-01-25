var count = 1;

const slideImage =()=>{
    document.getElementById("img" + count).checked = true;
    count++

    if(count > 4){
        count = 1
    } 
}

setInterval(()=>{
    slideImage();
}, 2000);