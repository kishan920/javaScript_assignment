/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *
*/
console.log(buildPyramid(6))
function buildPyramid(row)
{
    var star=''
 for(let i=0;i<=row;i++)
 {
  for(let j=0;j<row-i;j++)
  {
    star+=' ';
  }
  for(let k=row-i;k<row;k++)
  star+='* '
  star+="\n"
 }
 return star
}