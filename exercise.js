const numbers=[];
const num=document.getElementById('val');
const tbody=document.getElementById('tbody');
function addNumber(){
    const btnAdd=document.getElementById('add');
    btnAdd.addEventListener('click',()=>{
        if(num.value==''){
            Swal.fire({
                title: "Error!",
                text: "Please enter number!",
                icon: "error"
              });
        }else{
            numbers.push(num.value);
            num.value='';
            Swal.fire({
                title: "Success!",
                text: "Number added successfully!",
                icon: "success"
              });
            
        }
    })
}
addNumber();
function showNumbers(){
    const btnShow=document.getElementById('view');
    btnShow.addEventListener("click",()=>{
       
        if(numbers.length==0){
            Swal.fire({
                title: "Error!",
                text: "No numbers !",
                icon: "error"
              });
        }else{
            tbody.innerHTML='';
           numbers.forEach((ele,index)=>{
                tbody.innerHTML+=`
                    <tr>
                        <td>${index}</td>
                        <td>${ele}</td>
                    </tr>
                `;
           })
           
        }  
    })
    
}
showNumbers()
function Search(){
    const search=document.getElementById('search');
    search.addEventListener('click',()=>{
        const result=numbers.indexOf(num.value);
        if(result==-1){
            Swal.fire({
                title: "Error!",
                text: "Number not found!",
                icon: "error"
              });
        } else{
            Swal.fire({
                title: "Success!",
                text: "Number search found!",
                icon: "success"
              });
            tbody.innerHTML='';
            tbody.innerHTML+=`
                <tr>
                    <td>${result}</td>
                    <td>${numbers[result]}</td>
                </tr>
                `;
        } 
        num.value='';
    })
}
Search();
function update(){
    const btnUpdate=document.getElementById('update');
    btnUpdate.addEventListener('click',()=>{
        const index=numbers.indexOf(num.value);
        if(index==-1){
            Swal.fire({
                title: "Error!",
                text: "Number not found!",
                icon: "error"
              });
        } else{
            tbody.innerHTML='';
            newValue=prompt('Enter new value');
            numbers[index]=newValue;
            Swal.fire({
                title: "Success!",
                text: "Update Success!",
                icon: "success"
              });
            numbers.forEach((ele,index)=>{
                tbody.innerHTML+=`
                    <tr>
                        <td>${index}</td>
                        <td>${ele}</td>
                    </tr>
                `;
           })

        }   
        num.value='';	
            
    })
}
update();

