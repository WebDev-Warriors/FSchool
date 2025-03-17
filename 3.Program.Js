function BukaDetail(id) {
    document.querySelectorAll('.Detail').forEach(Detail => Detail.classList.remove('active'));
    document.querySelectorAll('.Programs-liN').forEach(liN => liN.classList.remove('active'));
    document.getElementById("NavPro2").classList.add('active');
    document.getElementById("NavPro1").classList.remove('active');
    document.getElementById(id).classList.add('active');
    let nyala = "A"+id;
    document.getElementById(nyala).classList.add('active');
}

function BukaList(id) {
    document.querySelectorAll('.Detail').forEach(Detail => Detail.classList.remove('active'));
    document.getElementById("NavPro1").classList.add('active');
    document.getElementById("NavPro2").classList.remove('active');
}