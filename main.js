// Quản lý tuyển sinh
function quanLyDiem(){
    var diemMon1 = document.getElementById('diemMon1').value*1;
    var diemMon2 = document.getElementById('diemMon2').value*1;
    var diemMon3 = document.getElementById('diemMon3').value*1;
    var khuVuc = document.getElementById('khuVuc').value*1;
    var doiTuong = document.getElementById('doiTuong').value*1;
    var diemChuan = document.getElementById('diemChuan').value*1;
    // console.log(diemMon1,diemMon2,diemMon3,doiTuong,khuVuc,diemChuan)

    if(isZero(diemMon1,diemMon2,diemMon3)){
        document.getElementById('infoDiem').innerHTML = "Bạn đã rớt vì có 1 môn bị điểm liệt";
        return false;  
    }

    tongDiem = diemMon1 + diemMon2 + diemMon3 + khuVuc + doiTuong;
    
    if(tongDiem >= diemChuan){
        document.getElementById('infoDiem').innerHTML = "Bạn đã đậu với tổng điểm là " + tongDiem;
    }else{
        document.getElementById('infoDiem').innerHTML = "Bạn đã rớt với tổng điểm là " + tongDiem;
    }
}

function isZero(a,b,c){
    if(a == 0 || b==0 || c==0)
        return true;
}

// Tính tiền điện

function tinhTienDien(){
    var tenChuHo = document.getElementById('tenChuHo').value;
    var soKWdDien = document.getElementById('soKWDien').value;

    const gia50kwDau = 500;
    const gia50kwKe   = 650;
    const gia100kwKe = 850;
    const gia150kwKe = 1100;   
    const giaConLai = 1300;

    tienDien = tinhTienDienChiTiet(soKWdDien,gia50kwDau,gia50kwKe,gia100kwKe,gia150kwKe,giaConLai);

    document.getElementById('infoDien').innerHTML = "Chủ Hộ: " + tenChuHo + " tiền điện là " + tienDien + "VND"; 
}

function tinhTienDienChiTiet(soKWDien,gia50kwDau,gia50kwKe,gia100kwKe,gia150kwKe,giaConLai){
    var tienDien;
    if(soKWDien <= 50){
        tienDien = soKWDien*gia50kwKe; 
    }else if(soKWDien > 50 && soKWDien <= 100){
        tienDien = gia50kwDau*50 + (soKWDien - 50)*gia50kwKe;
    }else if(soKWDien > 100 && soKWDien <= 200){
        tienDien = 50*(gia50kwKe+gia50kwDau) + (soKWDien-100)*gia100kwKe
    }else if(soKWDien > 200 && soKWDien <= 350){
        tienDien = 50*(gia50kwKe+gia50kwDau) + 100*gia100kwKe + (soKWDien-200)*gia150kwKe;
    }else{
        tienDien = 50*(gia50kwKe+gia50kwDau) + 100*gia100kwKe + 150*gia150kwKe + (soKWDien-350)*giaConLai;
    }
    return tienDien
}

