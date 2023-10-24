let currencyUnit = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "DOLLAR": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "One HUNDRED": 100
  }

function checkCashRegister(price, cash, cid) {
    // Creating a new object? 
      let totalToGive = []
      let currentChange = cash - price;
      let rid = 0; // remainingInDrawer
      let result = {
        status: "INSUFFICIENT_FUNDS",
        change: []
      }
    
      for(let i = cid.length - 1; i >= 0; i-- ) {

        // Get what I have left in this unit at the beginning. If will get updated as we go.
        let whatIHave = cid[i][1]; // e.g.) 2.75

        // Get the base amount of this unit.
        let base = currencyUnit[cid[i][0]]; // base amount e.g.) 0.25

        // If the change to give is more than or equal to the base amount of this unit, we can try to get the maximum of this unit.
        if(base <= currentChange) {

        // If we have something in this unit, we can get the maximum of this unit and derive the change left for the next unit.
         if(whatIHave > 0){

            let n = 1;
            let maxOfUnit = base * n;

            while(maxOfUnit <= whatIHave) {
                // If maximum amount is exactly what I have, we don't need to increase 'n'.
                if(maxOfUnit == whatIHave) {
                    break;
                }
                // If maximum amount is less than what I have, increase 'n' to continue the next possible maxium amount.
                n++;
            }
            // If maximum amount is larger than what I have, it means the increased 'n' needs to be decreased back.
            if(maxOfUnit > whatIHave) {
                n--;
            }            

            // Update the totalToGive array with amount 'maxOfUnit'
            totalToGive.unshift([cid[i][0]],  maxOfUnit);
            // Add the remaining cash of this unit to the variable 'rid'.
            rid += cid[i][1] - maxOfUnit

            // Update the currentChange and continue 'for loop' with the next unit.
            currentChange = currentChange -  maxOfUnit;
          }       
        } else if(base > currentChange) {
         // Add the remaining cash in drawer to the variable 'rid'.
         rid = cid[i][1];
        }

      }// End of for loop

      // If there's nothing in 'rid', it means it's time to close. 
      if(rid == 0) {
        result.status = "CLOSED";
        result.change = [ ...cid ];
      }

      if(currentChange == 0 && rid > 0) {
        result.status = "OPEN";
        result.change = [ ...totalToGive];
      }
      console.log(totalToGive)

      return result;
    }
    
    const answer = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

    console.log(answer)