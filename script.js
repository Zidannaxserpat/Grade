let input = prompt("Masukkan nilai");

let grade;
if(input < 1 || input > 99){
    alert("Salah angka!")
}else if(input > 96){
    grade = "A"
}else if(input > 91){
    grade = "B";
}else if(input > 86){
    grade = "C";
}else if(input > 81){
    grade = "D";
}else if(input > 76){
    grade = "E";
}else if(input > 66){
    grade = "F";
}else if(input < 65){
    grade = "F-";
}else{
    alert("Salah input");
}

document.writeln(`Grade : ${grade}`)
