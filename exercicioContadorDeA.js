const palavra = "aaaaaaaaaaaaaaaaa";

total = 0;

for (let letra of palavra) {
    if (letra === "a") {
        total++;
    }
}
console.log(total);