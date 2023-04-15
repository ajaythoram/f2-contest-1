let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(printUsingMap);
    function printUsingMap(arrayItems){
        if(arrayItems.profession === "developer"){
            console.log(arrayItems);
        }
    }
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
     arr.forEach(printUsingForEach);
     function printUsingForEach(arrayItems){
        if(arrayItems.profession=== "developer"){

            console.log(arrayItems);
        }
     }
  }
  
  function addData() {
    //Write your code here, just console.log
    let obj = {id:4,name:"susan",age:"20",profession:"intern"}
    arr.push(obj);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    let arr1 = arr.filter(function(data) {
     if(data.profession != "admin"){

        return data;
     }

    });
    console.log(arr1);

  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newarray = [{id:5,name:"ajaykumar",age:"21",profession:"student"},
        
    {id:6,name:"ajaykumar",age:"25",profession:"student"},
    {id:7,name:"ajaythoram",age:"23",profession:"student"}
];
let concatenateArray = arr.concat(newarray);
console.log(newarray);
  }