

let add_btn = document.getElementById("add_btn");

//add_btn click-------------------------------------------
add_btn.addEventListener("click", () => {
    let input_val = document.getElementById("input").value;
    let input_val_len = input_val.length;

    let to_do_list = document.getElementById("display");

    let list = document.createElement("li");
    if (input_val) {
        let text = document.createTextNode(" ");
        list.className = "list";
        list.appendChild(text);

        var today = new Date();
        let day = today.getDate();
        let month = today.getMonth() + 1;
        let year = today.getFullYear();
        // console.log(today, day, month, year);
        let date = month + "-" + day + "-" + year;


        if (input_val_len > 40) {
            alert("Your characters must be less than 40");
            list.innerHTML = " ";
        } else {
            list.innerHTML = `${input_val}` + "   (" + date + ")";
            to_do_list.appendChild(list);
        }
    } else {
        alert("You must write something!");
    }

    document.getElementById("input").value = "";

    let text2 = document.createTextNode("X");
    let delete_btn = document.createElement("button");
    delete_btn.className = "delete";
    delete_btn.appendChild(text2);
    list.appendChild(delete_btn);



    //delete_btn click------------------------------------------
    delete_btn.addEventListener("click", () => {
        if (confirm("have you completed this task?")) {
            to_do_list.removeChild(list);
        } else {
            console.log("clicked cancel btn");
        }
    })




}) 