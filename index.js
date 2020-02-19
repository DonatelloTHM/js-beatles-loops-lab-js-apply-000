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
var i=0
if(a<15){
do{
  b[i]="I love the Beatles!";
  a++;
  i++;
}while(a<15);}
else {
b[0]="I love the Beatles!";
}
return b;
}
