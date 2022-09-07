function price_plan(){

    var names = [];

    function pushingNames(name) {

        if(names.includes(name)){
         return false
        }else{
         return names.push(name)
        }
     }
     
   
 
     function ourNames() {
         return names
     }

    //  function setPrice (price) {
    //     smsCost = Number(price.smsCost);
    //     callCost = Number(price.callCost);
       
    // }
    //  function getPrice() {
    //      return {
    //          smsCost,
    //          callCost,
            
    //      }
    //  }

    //  function getTotal(answer) {
    //     let total = 0;
       
    //     for (let output = 0; index < actionList.length; output++) {
    //         const action = actionList[output];
    //         if (action.type === type) {
             
    //             total += action.cost;
    //         }
    //     }
    //     return total;
  

    // }




    return{
        pushingNames,
        ourNames,
        // setPrice,
        // getPrice,
        // getTotal

    }
}