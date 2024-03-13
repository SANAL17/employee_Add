// Add Button

function buttonAdd(){

    const empdetails={

        emp_id:document.getElementById('empid').value,
        emp_name:document.getElementById('empname').value,
        emp_add:document.getElementById('empadr').value,
        emp_des:document.getElementById('empdes').value,
        emp_exp:document.getElementById('empexp').value,
        emp_sal:document.getElementById('empsal').value,

    }
    //setItem to localStorage

    if( empdetails.emp_id==="" || empdetails.emp_name==="" ||
        empdetails.emp_add==="" || empdetails.emp_des==="" || 
        empdetails.emp_exp==="" || empdetails.emp_sal==="" ){
       
            alert("Please enter valid details")
    }
    else if(empdetails.emp_id in localStorage){
        alert('Employee already exist')
    }
      else {
        localStorage.setItem(empdetails.emp_id, JSON.stringify(empdetails))
        alert("Employee details added successfully")
    }


}

function buttonSearch() {
    let key =emp.value
    let employee=JSON.parse(localStorage.getItem(key))
    console.log(employee);
    

    result.innerHTML=`<div class="card" style="width: 20rem; margin-left: 230px;">
    
    <ul class="list-group list-group-flush">
      <li class="list-group-item mb-3 mt-3">employee id :${employee.emp_id}</li>
      <li class="list-group-item mb-3">employee name :${employee.emp_name}</li>
      <li class="list-group-item mb-3">employee Address :${employee.emp_add}</li>
      <li class="list-group-item mb-3">employee Designation :${employee.emp_des}</li>
      <li class="list-group-item mb-3">employee Experiance :${employee.emp_exp}</li>
      <li class="list-group-item mb-3">employee Salary :${employee.emp_sal}</li>
    </ul>
  </div>`
    
    
}