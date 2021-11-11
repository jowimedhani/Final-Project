var pages = ["Grade View", "Add Grades"];

var responseDiv = document.body.querySelector(".response");
var list = [];

function createNav() {
    var nav = document.createElement("nav");
    createButton(pages[0]);
    createButton(pages[1]);


    document.body.appendChild(nav);

    function createButton(pg) {
        var butt = document.createElement("button");
        butt.innerHTML = pg;
        butt.addEventListener("click", function () {
            navigate(pg);
        })
        nav.appendChild(butt);

    }
}

function createWrapper() {
    var wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    document.body.appendChild(wrapper);

}

function navigate(pg) {
    if (pg === "Grade View") {
        gradeview()
    } else if (pg === "Add Grades") {
        addgrades()

    }
}

function gradeview() {
    var wrapper = document.body.querySelector(".wrapper");
    wrapper.innerHTML = "";
    var header = document.createElement("h1");
    header.innerHTML = "Grades";
    wrapper.appendChild(header);
    var note_list=document.createElement("div");
    note_list.classList.add("note_list");
    wrapper.appendChild(note_list)

    renderList()
    function renderList() {
        note_list.innerHTML = ""
        for (var i = 0; i < list.length; i++) {
            var note = document.createElement("div");
            note.innerHTML = list[i];
            note_list.appendChild(note);
        }
    }



}


function addgrades() {
    var wrapper = document.body.querySelector(".wrapper");
    wrapper.innerHTML = "";
    var header = document.createElement("h1");
    header.innerHTML = "Add Grades";
    var single_note=document.createElement("input");
    single_note.classList.add("one_note");
    single_note.placeholder="student name";
    var importance = document.createElement("input");
    importance.classList.add("import");
    importance.placeholder="add grades (0-100)";
    var note=document.createElement("button");
    note.classList.add("note")
    note.innerHTML="submit"
    note.addEventListener("click", function (){
        var note = document.body.querySelector(".one_note").value;
        var importance = document.body.querySelector(".import").value;
        if (note.length === 1){
            note_list.innerHTML="that note is too short to save"
        }else if(isNaN(parseInt(importance))){
            note_list.innerHTML="importance must be listed as a number"
        }else{
            list.push(`Student Name: ${note} Grade: ${importance}%`);
            navigate("Grade View")



        }


    })

    wrapper.appendChild(header);
    wrapper.appendChild(single_note);
    wrapper.appendChild(importance);
    wrapper.appendChild(note);
    wrapper.appendChild(note_list);

}

document.body.querySelector(".butt").addEventListener("click", function () {
    var textValue = document.body.querySelector(".input").value;
    var textpass = document.body.querySelector(".inputPass").value;
    if (textValue === "cool" && textpass === "password") {
        responseDiv.innerHTML = "";
        createNav();
        createWrapper();
        navigate("Grade View");
        document.body.querySelector(".input").style.display = "none";
        document.body.querySelector(".butt").style.display = "none";

    } else {
        responseDiv.innerHTML = "wrong user or password, try again!"
    }


})

navigate("Grade View")





