// Quản lý tuyển sinh
function quanLyDiem() {
    var diemMon1 = document.getElementById('diemMon1').value * 1;
    var diemMon2 = document.getElementById('diemMon2').value * 1;
    var diemMon3 = document.getElementById('diemMon3').value * 1;
    var khuVuc = document.getElementById('khuVuc').value * 1;
    var doiTuong = document.getElementById('doiTuong').value * 1;
    var diemChuan = document.getElementById('diemChuan').value * 1;
    // console.log(diemMon1,diemMon2,diemMon3,doiTuong,khuVuc,diemChuan)

    if (isZero(diemMon1, diemMon2, diemMon3)) {
        document.getElementById('infoDiem').innerHTML = "Bạn đã rớt vì có 1 môn bị điểm liệt";
        return false;
    }

    tongDiem = diemMon1 + diemMon2 + diemMon3 + khuVuc + doiTuong;

    if (tongDiem >= diemChuan) {
        document.getElementById('infoDiem').innerHTML = "Bạn đã đậu với tổng điểm là " + tongDiem;
    } else {
        document.getElementById('infoDiem').innerHTML = "Bạn đã rớt với tổng điểm là " + tongDiem;
    }
}

function isZero(a, b, c) {
    if (a == 0 || b == 0 || c == 0)
        return true;
}

// Tính tiền điện

function tinhTienDien() {
    var tenChuHo = document.getElementById('tenChuHo').value;
    var soKWdDien = document.getElementById('soKWDien').value;

    const gia50kwDau = 500;
    const gia50kwKe = 650;
    const gia100kwKe = 850;
    const gia150kwKe = 1100;
    const giaConLai = 1300;

    tienDien = tinhTienDienChiTiet(soKWdDien, gia50kwDau, gia50kwKe, gia100kwKe, gia150kwKe, giaConLai);

    document.getElementById('infoDien').innerHTML = "Chủ Hộ: " + tenChuHo + " tiền điện là " + tienDien + "VND";
}

function tinhTienDienChiTiet(soKWDien, gia50kwDau, gia50kwKe, gia100kwKe, gia150kwKe, giaConLai) {
    var tienDien;
    if (soKWDien <= 50) {
        tienDien = soKWDien * gia50kwKe;
    } else if (soKWDien > 50 && soKWDien <= 100) {
        tienDien = gia50kwDau * 50 + (soKWDien - 50) * gia50kwKe;
    } else if (soKWDien > 100 && soKWDien <= 200) {
        tienDien = 50 * (gia50kwKe + gia50kwDau) + (soKWDien - 100) * gia100kwKe
    } else if (soKWDien > 200 && soKWDien <= 350) {
        tienDien = 50 * (gia50kwKe + gia50kwDau) + 100 * gia100kwKe + (soKWDien - 200) * gia150kwKe;
    } else {
        tienDien = 50 * (gia50kwKe + gia50kwDau) + 100 * gia100kwKe + 150 * gia150kwKe + (soKWDien - 350) * giaConLai;
    }
    return tienDien;
}

// Tinh thuế thu nhập cá nhân

function tinhTienThue() {
    var ten = document.getElementById('ten').value;
    var thuNhap = document.getElementById('thuNhap').value * 1;
    var nguoiPhuThuoc = document.getElementById('nguoiPhuThuoc').value * 1;

    const den60 = 5 / 100;
    const tu60den120 = 10 / 100;
    const tu120den210 = 15 / 100;
    const tu210den384 = 20 / 100;
    const tu384den624 = 25 / 100;
    const tu624den960 = 30 / 100;
    const tren960 = 35;

    var tienThue = tienThueChiTiet(thuNhap, nguoiPhuThuoc, den60, tu60den120, tu120den210, tu210den384, tu384den624, tu624den960, tren960)
    tienThue = new Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(tienThue);
    document.getElementById('infoThue').innerHTML = "thuế thu nhập cá nhân của "+ten+ " phải đóng là: " +   tienThue;
}


function tienThueChiTiet(thuNhap, nguoiPhuThuoc, den60, tu60den120, tu120den210, tu210den384, tu384den624, tu624den960, tren960) {
    var thuNhapChiuThue = thuNhap - 4e+6 - nguoiPhuThuoc * (1.6e+6);
    if(thuNhapChiuThue < 0){
        return 0;
    }
    var tienThue;
    if (thuNhapChiuThue <= 60e+6) {
        tienThue = thuNhapChiuThue * den60;
    } else if (thuNhapChiuThue > 60e+6 && thuNhapChiuThue <= 120e+6) {
        tienThue = (thuNhapChiuThue - 60e+6) * tu60den120 + 60e+6 * den60;
    } else if (thuNhapChiuThue > 120e+6 && thuNhapChiuThue <= 210e+6) {
        tienThue = (thuNhapChiuThue - 120e+6) * tu120den210 + 60e+6 * tu60den120 + 60e+6 * den60;
    }else if(thuNhapChiuThue > 210e+6 && thuNhapChiuThue <= 384e+6){
        tienThue = (thuNhapChiuThue - 210e+6)*tu210den384 + 90e+6*tu120den210 + 60e+6*tu60den120 + 60e+6*den60;
    }else if(thuNhapChiuThue > 384e+6 && thuNhapChiuThue <=624e+6){
        tienThue = (thuNhapChiuThue - 384e+6)*tu384den624+ 174e+6*tu210den384 + 90e+6*tu120den210 + 60e+6*tu60den120 + 60e+6*den60;
    }else if(thuNhapChiuThue > 624e+6 && thuNhapChiuThue <= 960){
        tienThue = (thuNhapChiuThue - 624e+6)*tu624den960 + 240e+6*tu384den624 + 174e+6*tu210den384 + 90e+6*tu120den210 + 60e+6*tu60den120 + 60e+6*den60;    
    }else {
        tienThue = (thuNhapChiuThue - 960e+6)*tren960+336*tu624den960 + 240e+6*tu384den624 + 174e+6*tu210den384 + 90e+6*tu120den210 + 60e+6*tu60den120 + 60e+6*den60;
    }
    return tienThue;
}

// Tính tiền cáp

function hienKetNoi(){
    var loaiKH = document.getElementById('loaiKH').value*1;
    content=""
    if(loaiKH == 3){
        content = '<label for="">Số cổng kết nối: <label>'
        content += ' <input  value="0" type="number" id="slKetNoi" class="form-control">'
        
    }
    document.getElementById('ketnoi').innerHTML = content;
}

function tinhTienCap(){
    var maKH = document.getElementById('maKH').value*1;
    var kenhCaoCap = document.getElementById('kenhCaoCap').value*1;
    var loaiKH = document.getElementById('loaiKH').value*1;
    var tienCap = 0;

    const phiHoaDonNhaDan = 4.5
    const phiDVCoBanNhaDan = 20.5
    const phiThueKenhNhaDan = 7.5

    const phiHoaDonDN = 15
    const phiDVCoBanDN = 75
    const phuPhi = 5
    const phiThueKenhND = 50
    if(loaiKH == 2){
        tienCap = tinhTienNhaDan(phiHoaDonNhaDan,phiDVCoBanNhaDan,phiThueKenhNhaDan,kenhCaoCap)
    }else if(loaiKH == 3){
        tienCap = tinhtienDoanhNghiep(phiHoaDonDN,phiDVCoBanDN,phuPhi,phiThueKenhND,kenhCaoCap)
    }else{
        alert('hay chọn loại khách hàng')
    }

    tienCap = new Intl.NumberFormat('en-US',{style: "currency", currency: "USD"}).format(tienCap);

    document.getElementById('infoCap').innerHTML = "Số tiền thanh toán của khách hàng mã: " + maKH + " là " + tienCap;
}

function tinhTienNhaDan(phiHoaDonNhaDan,phiDVCoBanNhaDan,phiThueKenhNhaDan,kenhCaoCap){
    return phiHoaDonNhaDan + phiDVCoBanNhaDan + phiThueKenhNhaDan*kenhCaoCap;
}

function tinhtienDoanhNghiep(phiHoaDonDN,phiDVCoBanDN,phuPhi,phiThueKenhND,kenhCaoCap){
    var slKetNoi = document.getElementById('slKetNoi').value*1;
    if(slKetNoi >10){
        return phiHoaDonDN + phiDVCoBanDN + phuPhi*(slKetNoi-10) + phiThueKenhND*kenhCaoCap;
    }else{
        return phiHoaDonDN + phiDVCoBanDN + phiThueKenhND*kenhCaoCap
    }

}