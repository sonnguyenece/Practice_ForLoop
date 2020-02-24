let i=0;
let text="";
for(i=0;i<5;i++) {
text+="The number is " + i+ "<br>";
}
document.getElementById('bai1').innerHTML=text;

function sum() {
    let i=0;
    let sum=0;
    let temp=parseInt(prompt('Nhap vao 1 so tu nhien : '));
    if (temp<1 )alert('Ban da nhap sai');
    for(i=0;i<=temp;i++){
        sum=sum+i;
    }
    if(temp>=1)document.getElementById('bai2').innerHTML="Tong cac so tu 1 den "+ temp + " la "+sum;
}