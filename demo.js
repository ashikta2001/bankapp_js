var accountDetails={
    1001:{name:"user1", acno:1001, pin:1234, password:'userone', balance:3000},
    1002:{name:"user2", acno:1002, pin:2345, password:'usertwo', balance:2500},
    1003:{name:"user3", acno:1003, pin:3456, password:'userthree', balance:3500},
    1004:{name:"user4", acno:1004, pin:4567, password:'userfour', balance:4000},
    1005:{name:"user5", acno:1005, pin:5678, password:'userfive', balance:5000},
}

// fetch the name of the account holder with acno 1001

// chk for 1001


console.log(1001 in accountDetails)

if (1001 in accountDetails){
    // console.log(accountDetails[1001].name) // both way we can fetch the data
    console.log(accountDetails[1001]["name"])
    console.log(accountDetails[1001].balance)
}