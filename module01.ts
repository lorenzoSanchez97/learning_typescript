function addNumbers(x:number, y:number) {
    return x + y;
  }
  console.log(addNumbers(3, 6));

  

  //ENUM ------------------------->

  enum ContractStatus {
    Permanent = 1,
    Temp,
    Apprentice
  }
  
  let employeeStatus: ContractStatus = ContractStatus.Temp
  console.log(employeeStatus);
  
  console.log(ContractStatus[employeeStatus]);