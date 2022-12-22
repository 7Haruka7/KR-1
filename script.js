const getClass = (element)=> document.querySelector(element);
const getId = (element)=> document.getElementById(element);
const f1 = document.forms.f1;
const f2 = document.forms.f2;
const bold = getId('bold');
const cursive = getId('cursive');
const f3 = document.forms.f3;
const f4 = document.forms.f4;
const f5 = document.forms.f5;
const f6 = document.forms.f6;
const f7 = document.forms.f7;
const f8 = document.forms.f8;
const f9 = document.forms.f9;
const table = getId('table');
const list = getId('list');
const tb = getId('tb');
const cb = getId('cb');
let trQ = '';
let tdQ = '';
let wtdQ = '';
let htdQ = '';
let wbQ = '';
let clv = '';
const tm = getId('tm');
let count = 1;

const onEdit = ()=>{
    getClass('.editContent').style.display = 'block';
    getClass('.styleContent').style.display = 'none';
    getId('textarea').value = getClass('.preview').innerHTML;
    getClass('.backgroundColors').style.display = 'none';
    getClass('.colors').style.display = 'none';
}
const onStyle = ()=>{
    getClass('.editContent').style.display = 'none';
    getClass('.styleContent').style.display = 'block';
    getClass('.backgroundColors').style.display = 'none';
    getClass('.colors').style.display = 'none';

}
const onSave = () =>{
    getClass('.preview').innerHTML = getId('textarea').value;
    getClass('.editContent').style.display = 'none';
}
for(let i =0; i<f1.elements.length; i++){
    f1.elements[i].onclick = function(){
        getClass('.preview').style.fontSize = this.value;  
    }
}
function onFontTypeChange(){
    getClass('.preview').style.fontFamily = getId('FTSelect').value;
}
const onChangeColor = ()=>{
    getClass('.colors').style.display = 'flex';
    getClass('.backgroundColors').style.display = 'none';
    for(let i =0; i<getClass('.colors').children.length; i++){
        getClass('.colors').children[i].onclick = function(){
            getClass('.preview').style.color = this.style.color;  
            getClass('.colors').style.display = 'none';
        }
    }
}
const onChangeBGColor = ()=>{
    getClass('.colors').style.display = 'none';
    getClass('.backgroundColors').style.display = 'flex';
    for(let i =0; i<getClass('.backgroundColors').children.length; i++){
        getClass('.backgroundColors').children[i].onclick = function(){
            getClass('.preview').style.backgroundColor = this.style.backgroundColor;  
            getClass('.backgroundColors').style.display = 'none';
        }
    }
}
f2.bold.onclick = function(){
    if (f2.bold.checked) {
        getClass('.preview').style.fontWeight = 'bold';
    } else if(f2.bold.checked=== false){
        getClass('.preview').style.fontWeight = 'normal';
    }else{
        getClass('.preview').style.fontWeight = 'none';
    }
}
f2.cursive.onclick = function(){
    if (f2.cursive.checked) {
        getClass('.preview').style.fontFamily = 'cursive';
    } else if(f2.cursive.checked=== false){
        getClass('.preview').style.fontFamily = 'none';
    }
}
const onAdd = ()=>{
    getClass('.editContent').style.display = 'none';
    getClass('.styleContent').style.display = 'none';
    getClass('.preview').style.display = 'none';
    getClass('.buttonEdit').style.display = 'none';
    getClass('.buttonStyle').style.display = 'none';
    getClass('.createMenu').style.display = 'flex';
    getClass('.createMenu__forms').style.display = 'none';   
    getClass('.createList').style.display = 'none';   
    f3.table.checked = false;
    f3.list.checked = false;
    f4.tr.value = '';
    f5.td.value = ''; 
    f6.wtd.value = '';
    f7.htd.value = '';
    f8.wb.value = ''; 
    f9.cl.value = '';
    tm.value = 'circle';
    
}
f3.table.onclick = function(){
    getClass('.createMenu__forms').style.display = 'flex';   
    getClass('.createList').style.display = 'none';   
    getClass('.createMenu').style.height = '450px';
}
f3.list.onclick = function(){
    getClass('.createMenu__forms').style.display = 'none'; 
    getClass('.createList').style.display = 'flex';    
    getClass('.createMenu').style.height = '250px'; 
}
const onCreateTable = ()=>{
    trQ = f4.tr.value; 
    tdQ = f5.td.value; 
    wtdQ = f6.wtd.value;
    htdQ = f7.htd.value;
    wbQ = f8.wb.value;  
    const t = document.createElement('table');
    for(let i =0; i<trQ; i++){
        const tr = document.createElement('tr');
        for(let j = 0; j<tdQ; j++){
            const td =document.createElement('td');
            td.innerText = 'TD';
            td.style.width = `${wtdQ}px`;
            td.style.height = `${htdQ}px`;
            td.style.borderWidth = `${wbQ}px`;
            td.style.borderStyle = tb.value;
            td.style.borderColor = cb.value;
            tr.appendChild(td);
        }
        t.appendChild(tr);
        t.classList.add('tableStyle');
    }
    getClass('.preview').appendChild(t);
    getClass('.createMenu').style.display = 'none';
    getClass('.preview').style.display = 'block';
    getClass('.buttonEdit').style.display = 'block';
    getClass('.buttonStyle').style.display = 'block';
    
}
const onCreateList = ()=>{
    clv = f9.cl.value;
    const ul = document.createElement('ul');
    for(let i = 0;i<clv; i++){
        const l = document.createElement('li');
        l.innerText = 'item '+count;
        count++; 
        l.style.listStyleType = tm.value;
        ul.appendChild(l);
        ul.classList.add('listStyle');
    }
    getClass('.preview').appendChild(ul);
    getClass('.createMenu').style.display = 'none';
    getClass('.preview').style.display = 'block';
    getClass('.buttonEdit').style.display = 'block';
    getClass('.buttonStyle').style.display = 'block';

}