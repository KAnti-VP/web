// Egyszerű aszinkron függvény, amely visszaad egy Promise-t
function delay(ms) {
    return new Promise(resolve => {
        console.log("Delay függvényben!");
        setTimeout(resolve, ms);
        console.log("Várakozás után")});
}

// Aszinkron függvény async-await segítségével
async function main() {
    console.log('Függvény kezdet');

    // Aszinkron művelet várása await kulcsszóval
    await delay(2000);

    console.log('Függvény vége');
}



console.log('Program kezdete');


// Aszinkron művelet várása await kulcsszó nélkül
console.log('Előtte');
delay(2000);
console.log('Utána');

// Asszinkron függvény meghívása
main();

console.log('Program vége');