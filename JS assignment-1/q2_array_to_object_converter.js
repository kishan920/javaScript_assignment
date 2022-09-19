/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }

convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'value')

		{
			"abc":{id: 1, value: 'abc'},
			"xyz" :{id: 2, value: 'xyz'}
		}
*/
var convert=(arr,str)=>
    arr.reduce((a,item)=>
	{
     a[item[str]]=item
	 return a
	},{})
	

console.log(convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'value'))