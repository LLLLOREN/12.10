let i=0;j=0;
let temp;
let allstudent=[];
function Student(name,clas,Chinese,Math,Science,all) {
    this.name=name;
    this.clas=clas;
    this.Chinese=Chinese;
    this.Math=Math;
    this.Science=Science;
    this.all=all;
};

function nstudent() {
    student= new Student;
    student.name=document.getElementById("name").value;
    student.clas=document.getElementById("clas").value;
    student.Chinese=document.getElementById("Chinese").value;
    student.Math=document.getElementById("Math").value;
    student.Science=document.getElementById("Science").value;
    student.all=Number(student.Chinese)+Number(student.Math)+Number(student.Science);
    document.getElementById("p").innerHTML+=" "+student.name+'&nbsp;&nbsp;&nbsp;'+student.clas+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+student.Chinese+' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; '+student.Math+'&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; '+student.Science+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+student.all;
    document.getElementById("p").innerHTML+='<br>';
    allstudent[i]=student;
    i++;
    document.getElementById("name").value="";
    document.getElementById("clas").value="";
    document.getElementById("Chinese").value="";
    document.getElementById("Math").value="";
    document.getElementById("Science").value="";
};
function ran_chin() {
    document.getElementById("p").innerHTML="";
    for(let k=0;k<i;k++){
        for(let l=0;l<k;l++){
            if(Number(allstudent[k].Chinese)>Number(allstudent[l].Chinese)){
                temp=allstudent[k];
                allstudent[k]=allstudent[l];
                allstudent[l]=temp;
            }
        }
    }
    for(let k = 0;k<i;k++){
        document.getElementById("p").innerHTML+=" "+allstudent[k].name+'&nbsp;&nbsp;&nbsp;'+allstudent[k].clas+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+allstudent[k].Chinese+' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; '+allstudent[k].Math+'&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; '+allstudent[k].Science+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+allstudent[k].all;
        document.getElementById("p").innerHTML+='<br>';
    }
}
function ran_math() {
    document.getElementById("p").innerHTML="";
    for(let k=0;k<i;k++){
        for(let l=0;l<k;l++){
            if(Number(allstudent[k].Math)>Number(allstudent[l].Math)){
                temp=allstudent[k];
                allstudent[k]=allstudent[l];
                allstudent[l]=temp;
            }
        }
    }
    for(let k = 0;k<i;k++){
        document.getElementById("p").innerHTML+=" "+allstudent[k].name+'&nbsp;&nbsp;&nbsp;'+allstudent[k].clas+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+allstudent[k].Chinese+' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; '+allstudent[k].Math+'&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; '+allstudent[k].Science+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+allstudent[k].all;
        document.getElementById("p").innerHTML+='<br>';
    }
}
function ran_sci() {
    document.getElementById("p").innerHTML="";
    for(let k=0;k<i;k++){
        for(let l=0;l<k;l++){
            if(Number(allstudent[k].Science)>Number(allstudent[l].Science)){
                temp=allstudent[k];
                allstudent[k]=allstudent[l];
                allstudent[l]=temp;
            }
        }
    }
    for(let k = 0;k<i;k++){
        document.getElementById("p").innerHTML+=" "+allstudent[k].name+'&nbsp;&nbsp;&nbsp;'+allstudent[k].clas+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+allstudent[k].Chinese+' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; '+allstudent[k].Math+'&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; '+allstudent[k].Science+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+allstudent[k].all;
        document.getElementById("p").innerHTML+='<br>';
    }
}
function ran_all() {
    document.getElementById("p").innerHTML="";
    for(let k=0;k<i;k++){
        for(let l=0;l<k;l++){
            if(Number(allstudent[k].all)>Number(allstudent[l].all)){
                temp=allstudent[k];
                allstudent[k]=allstudent[l];
                allstudent[l]=temp;
            }
        }
    }
    for(let k = 0;k<i;k++){
        document.getElementById("p").innerHTML+=" "+allstudent[k].name+'&nbsp;&nbsp;&nbsp;'+allstudent[k].clas+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+allstudent[k].Chinese+' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; '+allstudent[k].Math+'&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; '+allstudent[k].Science+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+allstudent[k].all;
        document.getElementById("p").innerHTML+='<br>';
    }
}