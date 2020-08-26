class Bank{

    static getAccountDetails(){
        var accountDetails={
            1001:{name:"user1", acno:1001, pin:1234, password:'userone', balance:3000},
            1002:{name:"user2", acno:1002, pin:2345, password:'usertwo', balance:2500},
            1003:{name:"user3", acno:1003, pin:3456, password:'userthree', balance:3500},
            1004:{name:"user4", acno:1004, pin:4567, password:'userfour', balance:4000},
            1005:{name:"user5", acno:1005, pin:5678, password:'userfive', balance:5000},
        }

        return accountDetails;
    }


    static login(){
        var acno=document.querySelector("#acno").value
        var password=document.querySelector("#pwd").value
        // alert(acno+","+password)
        try {
            if(isNaN(acno)) throw "Invalid Account Number"
            if(acno.length<2) throw "Account number must be atleast 4 characters"
        } catch (error) {
            alert(error)
        }

        var data=Bank.getAccountDetails()
        
        if (acno in data){
            var pwd = data[acno].password
            if (pwd==password){
                alert('Login Successful')
                window.location.href="userhome.html"
            }
            else{
                alert('Incorrect password')
            }
        }
        else{
            alert("Account No does not exists")
        }

    }

    static deposit(){
        var dpacno=document.querySelector("#acno").value
        var dppin=document.querySelector("#pin").value
        var dpamt=Number(document.querySelector("#amt").value)
        var data=Bank.getAccountDetails()
        
        if (dpacno in data){
            var mpin = data[dpacno].pin
            if (dppin==mpin){
                data[dpacno].balance+= dpamt
                alert('account has been credited')
                alert(data[dpacno].balance)
            }
        }
        else{
            alert("Incorrect Account Details")
        }        

    }

    static withdraw(){
        var wacno=document.querySelector("#wacno").value
        var wpin=document.querySelector("#wpin").value
        var wamt=Number(document.querySelector("#wamt").value)
        var data=Bank.getAccountDetails()
        
        if (wacno in data){
            var mpin = data[wacno].pin
            if (wpin==mpin){
                data[wacno].balance-= wamt
                alert('account has been debited')
                alert(data[wacno].balance)
            }
        }
        else{
            alert("Incorrect Account Details")
        }        

    }    
}