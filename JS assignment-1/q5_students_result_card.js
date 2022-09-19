var students=[
    {name:"kishan",subject:["grammar","account"],scores:[80,90]},
    {name:"rahul",subject:["grammar","account"],scores:[75,80]},
    {name:"vidya",subject:["grammar","account"],scores:[67,72]},
    {name:"saroj",subject:["grammar","account"],scores:[78,98]},
    {name:"manoj",subject:["grammar","account"],scores:[67,85]},
    {name:"ravi",subject:["grammar","physics"],scores:[83,92]},
    {name:"tarun",subject:["grammar","physics"],scores:[89,91]},
    {name:"rajesh",subject:["grammar","physics"],scores:[80,92]},
    {name:"sanjay",subject:["grammar","physics"],scores:[87,93]},
    {name:"ajay",subject:["grammar","physics"],scores:[65,66]},
]
var temp=students.map((student)=>{
    let totals=student.scores.reduce((total,ele)=>total+ele)
    let pre=(totals/200)*100
    student.pre=pre
    return student
}).map((student)=>{
    return {"name":student.name,"precentage":student.pre}
})
console.log(temp)