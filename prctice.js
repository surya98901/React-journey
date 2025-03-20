cart = ['paint brush set', 'canvas', 'acrylics'];
// promise 
console.log(cart);
createOrder(cart)
    .then((orderId) => {
        console.log("orderId :",orderId)
        return proceedToPayment(orderId)
            .then((paymentStatus) => ({ orderId, paymentStatus }));
    })
    .then(({ orderId, paymentStatus }) => {
        console.log("Paymentstatus :", paymentStatus);
        return orderSummary(cart, orderId, paymentStatus);
    })
    .then((orderSummary1) => {
        console.log("Order Summary: ", orderSummary1);
    })
    .catch((err) => console.log(err.message));

//promise producer 
function createOrder(cart) {
    function validateCart(cart) {
        if (cart.length >= 1) return true;
        else false;
    }
    const promise = new Promise((resolve, reject) => {
        if (!validateCart(cart)) {
            const err = new Error("Cart is Empty");
            reject(err);
        }
        const randomNum = Math.floor(Math.random() * 100000).toString().padStart(5, "0");
        const today = new Date();
        const dateString = `${today.getDate().toString().padStart(2, "0")}${(today.getMonth() + 1).toString().padStart(2, "0")}${today.getFullYear()}`;

        const orderId = "Order" + randomNum + dateString;

        if (orderId) {
            setTimeout(function () {
                resolve(orderId);
            }, 2000);
        }
    });

    return promise;
}

// proceeding to payment
function proceedToPayment(orderId) {
    const prom = new Promise((resolve, reject) => {
        const paymentStatus = "payment Successful";
        resolve(paymentStatus);
    });
    return prom;
}

//show order summary
function orderSummary(cart, orderId, paymentStatus) {
    const pr = new Promise((resolve, reject) => {
        const orderSummary1 = {};
        orderSummary1.items = cart;
        orderSummary1.orderId = orderId;
        orderSummary1.paymentStatus = paymentStatus;
        resolve(orderSummary1);
    });
    return pr

}