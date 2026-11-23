
function evaluerPavillons(liste) {
    return liste
    .map(p => {
        const minutes = Math.ceil(p.personnes / p.debit);
        return {
            ...p,
            minutes,
            statut: minutes <= 10 ? "Fluide" : "Chargé"
        };
    })
    .sort((a, b) => a.minutes - b.minutes);
}