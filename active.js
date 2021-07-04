let header = document.getElementById("main_nav");
    let listItem = header.getElementsByClassName("item");
    for(let i =0; i < listItem.length; i++) {
        listItem[i].addEventListener("click", function() {
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
    console.log(listItem);