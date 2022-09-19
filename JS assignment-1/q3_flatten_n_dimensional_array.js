var arr=[1, [2, 3], [[4], [5]]]
console.log(flatten(arr))
function flatten(arr)
{
    var arr1=arr.reduce((current,previous)=>
    {
       var arr2= Array.isArray(previous)?flatten(previous):[previous]
       return current.concat(arr2)
    },[])
    return arr1
}