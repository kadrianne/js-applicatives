const everyonesPets = ['Bucky','Deejay','Deejay','Terra', 'Freckles', 'Kona', 'Buckles', 'Jezebel', 'Scout', 'Landon', 'Igby', 'Luna', 'Sevie','Maja','Gusu','Mr. Knox']

const everyonesCars = ['subaru','ford','toyota','chevy']

const integerArray = [1,2,3,4,5]

console.table(everyonesPets)

function forEveryonesPets(everyonesPets){
    return everyonesPets.map(pet => {
        return pet + "'s"
    })
}

function consoleLogEveryonesPets(everyonesPets){
    return everyonesPets.forEach(pet => {
        console.log('pet',pet)
    })
}


function findTylersPet(bananas){
    return bananas.filter(banana => {
        return banana === 'Deejay'
    })
}

function addOne(arrayofNums){
    return arrayofNums.reduce((acc,int) => {
        return acc + int
    })
}

console.log('fxresult',forEveryonesPets(everyonesPets))
consoleLogEveryonesPets(everyonesPets)
console.log('findTylersPet',findTylersPet(everyonesPets))
console.log('fxresult',forEveryonesPets(everyonesCars))
console.log('fxaddOne',addOne(integerArray))



function buildAnArray(everyonesCars){
    return everyonesCars.reduce((acc,car)=>{
        acc.push(`${car}s`)
        return acc
    }, [])
}

console.log('newArrayOfCars',buildAnArray(everyonesCars))

arrayOfArrays = [[1,2],[3,4],[5,6]]

function reduceAOA(aoa){
    return aoa.reduce((acc,array)=>{
        sum = array.reduce((acc,int)=>{
            return acc + int
        })
        acc.push(sum)
        return acc
    },[])
}

console.log('reduceAOA',reduceAOA(arrayOfArrays))