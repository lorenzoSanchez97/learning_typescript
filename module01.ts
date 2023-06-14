function addNumbers(x:number, y:number) {
    return x + y;
  }
  console.log(addNumbers(3, 6));

  

  //  enum ------------------------->

  enum ContractStatus {
    Permanent = 1,
    Temp,
    Apprentice
  }
  
  let employeeStatus: ContractStatus = ContractStatus.Temp
  console.log(employeeStatus);
  
  console.log(ContractStatus[employeeStatus]);




  //  tuplas ---------------------->

  let person1: [string, number] = ['Marcia', 35];
  let person2: [string, number, boolean] = ['Marcia', 35, true];