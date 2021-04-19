function compute()
{
    
    var principal = document.getElementById("principal").value;
    // check if princiap value is negative or zero
    if(principal <=0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
// display result msg
    var resultMsg = 'If you deposite '+principal+", <br>at an interest rate of "+
    rate+"%. <br>You will receive an amount of "+interest+",<br>in the year "+year;
    document.getElementById("result").innerHTML = resultMsg;
}
// function to update changed value by range
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rateval;
}
        