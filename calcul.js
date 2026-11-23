
function evaluerPavillons(liste) {
return liste
.map(p => ({
...p,
minutes: Math.ceil(p.personnes / p.debit)
}))
.sort((a, b) => a.minutes - b.minutes);
}