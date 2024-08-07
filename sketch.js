
1
let cor 
2
​
3
let horizontal;
4
let vertical;
5
​
6
function setup() {
7
  createCanvas(600, 600);
8
  background("rgb(6,46,6)");
9
  cor=color(random(0,255),random(0,255),random(0,255));
10
  horizontal=300;
11
  vertical=300;
12
}
13
​
14
​
15
function draw() {
16
  circle(horizontal,vertical,70);
17
fill(cor);
18
  
19
  if(mouseX>horizontal){
20
    horizontal++
21
  }
22
  if(mouseX<horizontal){
23
    horizontal--
24
  }
25
  if(mouseY<vertical){
26
    vertical--
27
}
28
  
There are no lint messages
Current lineline 1

Console
Clear

​
Preview
