// async function order (){
//     try{
//         await abc;
//     }
//     catch(error){
//         console.log("abc doesn't exit", error)
//     }
//     finally{
//         console.log("run code anyways");
//     }
// }

// order()

// .then(() => {
//     console.log('dfdslkafj');
// })


// let toppings_choice = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(console.log("which topping would you love?"))   
//         }, 3000)
//     })
// }

// async function kitchen(){
//     console.log("A");
//     console.log("B");
//     console.log("C");

//     await toppings_choice();

//     console.log("D");
//     console.log("E");
// }

// kitchen();

// console.log("doing the dishes");
// console.log("cleaning the tables");
// console.log("taking others order");

// let order = () => {
//     return new Promise((resolve, reject) => {
//         if(is_shop_open){
//             resolve();
//         }
//         else{
//             reject();
//         }
//     })
// }

// order()
// .then()
// .then()
// .then()
// .catch()
// .finally()



let stocks = {
    Fruits:["strawberry", "grapes", "banana", "apple"],
    liquid:["water", "ice"],
    holder:["cone", "cup", "stick"],
    toppings:["chocolate", "peanuts"]
};

let is_shop_open = true;

function time(ms){
    return new Promise((resolve, reject) => {
        if(is_shop_open){
            setTimeout(resolve, ms);
        }
        else{
            reject(consolve.log("shop is closed"))
        }
    })
}

async function kitchen(){
    try{
        await time(2000);
        console.log(`${stocks.Fruits[0]}`)
        
        await time(0);
        console.log("start the production");

        await time(2000);
        console.log("cut the fruit");

        await time(1000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

    }
    catch(error){
        console.log("customer left", error)
    }
    finally{
        consolve.log("day ended, shop is closed")
    }
}

kitchen();