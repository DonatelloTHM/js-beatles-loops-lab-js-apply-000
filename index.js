// add solution here
function theBeatlesPlay(a,b)
{
  var c=[];
  for(var i=0;i<a.length;i++)
  {
    c[i]=`${a[i]} plays ${b[i]}`;
  }
  return c;
}
function johnLennonFacts(a)
{
  var i=0;
  while(i<a.length){
    a[i]=`${a[i]}!!!`;
    i++
  }
  return a;
}
function iLoveTheBeatles(a){
var b=[];
do{
  b[a]="I love the Beatles!";
  a++
  return b[a];
}while(a<15);

}
