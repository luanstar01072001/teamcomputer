function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function openNavMid() {
    document.getElementById("mySidenavMid").style.width = "360px";
}

function closeNavMid() {
    document.getElementById("mySidenavMid").style.width = "0";
}

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#myBtn').fadeIn();
        }
        else {
            $('#myBtn').fadeOut();
        }
    });
    $('#myBtn').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 800);
    });
});

function TTTaiKhoan() {
    window.location.href = "TTTaiKhoan.html";
}

function DSDonHang() {
    window.location.href = "DSDonHang.html";
}

function logOut() {
    localStorage.setItem('userKH', null);
    window.location.href = "index.html";
}

function LoadUserKH() {
    var u = JSON.parse(localStorage.getItem('userKH')) || [];
    $('#tenkhachhang').html(u.tenkh);
    $('#tenkhachhang1').html(u.tenkh);
}
function LoadTaiKhoan() {
    var user = JSON.parse(localStorage.getItem('userKH'));
    if (user != null) {
        document.getElementById("boxrighttop").style.display = "none";
        document.getElementById("boxLogin").style.display = "none";
    }
    else if (user == null) {
        document.getElementById("boxrighttopKH").style.display = "none";
        document.getElementById("boxLoginHide").style.display = "none";
    }
}

function LoadSL() {
    var gio = JSON.parse(localStorage.getItem('cart'));
    var sl = 0;
    for (x of gio) {
        sl += x.quantity;
    }
    $("#soluong").text(sl);
}

function LoadCart() {
    var gio = JSON.parse(localStorage.getItem('cart'));
    if (gio == null || gio == '') {
        document.getElementById("CartContent").style.display = "none";
        document.getElementById("GioNull").style.display = "block";

    }
    else {
        document.getElementById("GioNull").style.display = "none";
        document.getElementById("CartContent").style.display = "block";
    }
}