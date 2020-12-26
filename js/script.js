

function validation() { 
    var fname = document.forms["myForm"]["fname"].value;
    var lname = document.forms["myForm"]["lname"].value;
    var dob = document.forms["myForm"]["dob"].value;
    var email = document.forms["myForm"]["email"].value;
    var phone = document.forms["myForm"]["phone"].value;

    if (fname == "") { 
        alert("Please enter your First name."); 
        fname.focus(); 
        return false; 
    } 
    else if (lname == "") { 
        alert("Please enter your Last name."); 
        lname.focus(); 
        return false; 
    } 
    else if (dob == "") { 
        alert("Please enter a valid DOB."); 
        dob.focus(); 
        return false; 
    } 
    else if (email == "") { 
        alert("Please enter your Email"); 
        email.focus(); 
        return false; 
    } 
    else if (phone == "") { 
        alert("Please enter your telephone number."); 
        phone.focus(); 
        return false; 
    } 
    getInput(); 
}

function getInput(){
    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var dob = $("#dob").val();
    var email = $("#email").val();
    var phone = $("#phone").val();

    var markup = "<tr><td>" + fname + "</td><td>" + lname + "</td><td>" + dob + "</td><td>" + email + "</td><td>" + phone + 
    "</td><td><input class='delete' type='button'  onclick='deleteRow(4)'' value='Delete'/><input class='edit' type='button'  onclick='edit(1)' value='Edit'/></td></tr>";
    $("#table").append(markup);
            
    var table = document.getElementById("table");
    var row = table.insertRow(temp);
    currentAssigned = temp;
    temp++;

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var dob   = document.getElementById  ('dob').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    var element6 = document.createElement("input");  
    element6.type = "button";  
    var btnName = "row"; 
    element6.name = btnName;  
    element6.value = "Delete";
    element6.style = "text-align:center; font:13px/2.5 'verdana'; width:64px;height:32px;border:2px solid  #0c0c0c;";
    element6.onclick = function() {  
        deleteRow(currentAssigned);  
    }

    var element7 = document.createElement("input");  
    element7.type = "button";  
    var btnName = "row"; 
    element7.name = btnName;  
    element7.value = "Edit";
    element7.style = "text-align:center; font:13px/2.5 'verdana'; width:64px;height:32px;border:2px solid  #0c0c0c;";

    cell1.innerHTML =  fname;
    cell2.innerHTML =  lname;
    cell3.innerHTML =  dob;
    cell4.innerHTML =  email;
    cell5.innerHTML =  phone;
    cell6.appendChild(element6);
    cell6.appendChild(element7);  
    resetAll();
}

function resetAll(){
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('dob').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';      
}

function deleteRow(del_row){
    document.getElementById("table").deleteRow(del_row);
}

function edit(edit_row){
    fname.focus();

    document.getElementById

    document.getElementById('fname').value = 'asd';
    document.getElementById('lname').value = 'sv';
    document.getElementById('dob').value = '12 /12 /2020';
    document.getElementById('email').value = 'vsd@gmail.com';
    document.getElementById('phone').value = '3672475555';
}