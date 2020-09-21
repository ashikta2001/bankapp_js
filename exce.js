// exception is an abnormal condition that disrupt 

try {
    //  doubtful code
    var data=10
    console.log(data.toUpperCase())
} 
catch (error) {
    // handling code 
    console.log(error.message)    
    console.log(error.name)    
}

try{
    var age=18;
    if (age<19) throw "Invalid age"
}
catch(err){
    console.log(err)
}