function scrollToSection(id){document.getElementById(id)?.scrollIntoView({behavior:'smooth'});}
function openLogin(){document.getElementById('loginModal').classList.add('show')}
function closeLogin(){document.getElementById('loginModal').classList.remove('show')}
function demoLogin(){alert('Demo login: connect this form to your authentication backend when the project backend is ready.');closeLogin()}
function newCase(){alert('Create Case module selected. Connect this button to your Case Management page/backend.');}
function generateReport(){alert('Report preview selected. Connect this action to your Report Generation module.');}
window.addEventListener('click',e=>{if(e.target.id==='loginModal')closeLogin()});
