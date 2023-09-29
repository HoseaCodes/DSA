function diceGameSimulation(numSimulations) {
    let simulations = []
    for (let i = 0; i < numSimulations; ++i) { 
        let dice1 = Math.floor((Math.random() * 6) + 1)
        let dice2 = Math.floor((Math.random() * 6) + 1)
        let simulation = {
            dice1: dice1,
            dice2: dice2,
            sum: dice1 + dice2,
            result: dice1 + dice2 === 7 || dice1 + dice2 === 11 ? "win" :
             dice1 + dice2 === 2 || dice1 + dice2 === 3 || dice1 + dice2 === 12 ? "lose" :
             "roll again"
        }
        simulations.push(simulation)
    }
    console.log(simulations)

    return simulations;
}

diceGameSimulation(5)

module.exports = diceGameSimulation;
