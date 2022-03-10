//listOne: Array[Object]
//listTwo: Array[Object]
//attribute: String -> The key of a array object

module.exports = (listOne, listTwo, attribute) => {
    let mergedList = new Array();

    let indexListOne = 0
    let indexListTwo = 0

    //While the size of the merged list is less than the desired size
    while (mergedList.length < ( listOne.length + listTwo.length )) {

        //All elements in the listOne are merged
        if(indexListOne >= listOne.length){
            mergedList.push(listTwo[indexListTwo])
            indexListTwo++
        }
        //All elements in the listTwo are merged
        else if(indexListTwo >= listTwo.length){
            mergedList.push(listOne[indexListOne])
            indexListOne++
        }
        //Atual listOne attribute is less than atual listTwo attribute
        else if(listOne[indexListOne][attribute] < listTwo[indexListTwo][attribute]){
            mergedList.push(listOne[indexListOne]);
            indexListOne++
        }
        //Atual listOne attribute is greather than atual listTwo attribute
        else if (listOne[indexListOne][attribute] > listTwo[indexListTwo][attribute]){
            mergedList.push(listTwo[indexListTwo])
            indexListTwo++
        }
        //Atual listOne attribute is equal to atual listTwo attribute
        else if (listOne[indexListOne][attribute] === listTwo[indexListTwo][attribute]){
            mergedList.push(listOne[indexListOne])
            mergedList.push(listOne[indexListTwo])
            indexListOne++
            indexListTwo++
        }
    }

    return mergedList
}