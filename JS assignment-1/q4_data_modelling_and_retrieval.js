var fruits=[
    {name:"apple",color:"red",priceperkg:"50"},
    {name:"banana",color:"green",priceperkg:"40"},
    {name:"orange",color:"yello",priceperkg:"60"},
    {name:"grapes",color:"greenlight",priceperkg:"80"},
    {name:"pineapple",color:"brown",priceperkg:"100"},
]
console.log(fruitsdetail(fruits,"apple"))
function fruitsdetail(fruits,fruitname)
{
    let name1=fruits.filter((obj)=>obj.name==fruitname)
    return {color:name1[0].color,priceperkg:name1[0].priceperkg}
}