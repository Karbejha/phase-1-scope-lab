customerName = 'bob';
function upperCaseCustomerName(){
    if (customerName)
    {
        customerName=customerName.toUpperCase();
    }
}
function setBestCustomer(){
    bestCustomer = "not bob"
}
function overwriteBestCustomer(){
    bestCustomer="maybe bob"
}

const leastFavoriteCustomer = 'initialValue';

function changeLeastFavoriteCustomer() {
  try {
    leastFavoriteCustomer = 'newValue';
  } catch (error) {
    throw new Error('Assignment to constant variable.');
  }
}

customerName();
upperCaseCustomerName();
setBestCustomer();
overwriteBestCustomer();
changeLeastFavoriteCustomer();