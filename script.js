window.onload = () => {
    //declare the variables who, what, when
    let who = [ "My cousin", "A Docter", "The maniac", "A tourist"];
    //and assign at least 4 values for each
    let what = [ "broke my arm", "won a million dollars", "slashed my tires", "ate my leftovers"];
    let when = [ "last night", "in another dimension", "in your dreams", "during the pandemic"];
    //selecct a random who, what, and when
    var selectedWho = who[Math.floor(Math.random() * who.length)];
    var selectedWhat = what[Math.floor(Math.random() * what.length)];
    var selectedWhen = when[Math.floor(Math.random() * when.length)];
    //concatenate who + what + when 
    let excuse = `${selectedWho + " " + selectedWhat + " " + selectedWhen + "!"}`;
    //print webpage
    document.getElementById("excuse").innerHTML = excuse;
}