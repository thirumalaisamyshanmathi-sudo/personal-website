const PASSWORD='Sabarishanmathi';
function login(){
const p=document.getElementById('password').value;
if(p===PASSWORD){
document.getElementById('loginScreen').style.display='none';
document.getElementById('app').classList.remove('hidden');
}else{
document.getElementById('error').innerText='Wrong Password';
}
}
