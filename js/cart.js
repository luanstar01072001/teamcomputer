function addToCart(item) {
    // debugger;
    item.quantity = 1;
    console.log(item.quantity);
    var list;
    if (localStorage.getItem('cart') == null) {
        list = [item];
    } else {
        list = JSON.parse(localStorage.getItem('cart')) || [];
        let ok = true;
        for (let x of list) {
            if (x.id == item.id) {
                x.quantity += 1;
                ok = false;
                break;
            }
        }
        if (ok) {
            list.push(item);
        }
    }
    localStorage.setItem('cart', JSON.stringify(list));
    alert("Đã thêm giỏ hàng thành công!");
    location.reload();
}

var list = JSON.parse(localStorage.getItem('cart'));

function LoadData() {
    var str = "";
    var t = 0;
    var sl = 0;
    for (x of list) {
        t += x.price * x.quantity;
        sl += x.quantity;
        str += `<tr>
                        <td><i onclick="Xoa(`+ x.id + `)" class="fa fa-times-circle" style="font-size:30px;color:red;cursor: pointer;" title="Xóa"></i></td>
                        <td><a href="`+ x.link + `" style="text-decoration: none;color: black;"><img style="width: 50px; height: 50px;" src="` + x.image + `"></a></td>
                        <td><a href="`+ x.link + `" style="text-decoration: none;color: black;">` + x.name + `</a></td>
                        <td>`+ x.price + `đ</td>
                        <td> 
                            <button onclick="Giam(`+ x.id + `)" style="border: 1px solid #dbdbdb;padding: 4px 8px;">-</button>
                            <input id="q_`+ Number(x.id) + `" onchange="updateQuantity(` + x.id + `)" type="text" value="` + x.quantity + `" style="width: 35px;border: 1px solid #dbdbdb;padding: 4px;margin-left: -5px;margin-right: -5px;text-align:center">
                            <button onclick="Tang(`+ x.id + `)" style="border: 1px solid #dbdbdb;padding: 4px 8px;">+</button>
                        </td>
                        <td>`+ (x.price * x.quantity) + `đ</td>
                    </tr>
                 `;
    }
    document.getElementById("listCart").innerHTML = str;
    $("#spTong").text(t);
    $("#tTong").text(t);
}

function XoaCart() {
    if (confirm("Bạn muốn xóa tất cả sản phẩm khỏi giỏ hàng!")) {
        localStorage.setItem('cart', null);
        location.reload();
    }
}

function Xoa(id) {
    if (confirm("Bạn muốn xóa sản phẩm này khỏi giỏ hàng!")) {
        var index = list.findIndex(x => x.id == id);
        if (index >= 0) {
            list.splice(index, 1);
        }
        localStorage.setItem('cart', JSON.stringify(list));
        location.reload();
        LoadData();
    }
}

function Tang(id) {
    var index = list.findIndex(x => x.id == id);
    if (index >= 0) {
        list[index].quantity += 1;
    }
    localStorage.setItem('cart', JSON.stringify(list));
    location.reload();
    LoadData();
}

function Giam(id) {
    var index = list.findIndex(x => x.id == id);
    if (index >= 0 && list[index].quantity >= 1) {
        list[index].quantity -= 1;
    }
    localStorage.setItem('cart', JSON.stringify(list));
    location.reload();
    LoadData();
}

function updateQuantity(id) {
    var quantity = Number($('#q_' + id).val());
    var index = list.findIndex(x => x.id == id);
    if (index >= 0 && list[index].quantity >= 1) {
        list[index].quantity = quantity;
    }
    localStorage.setItem('cart', JSON.stringify(list));
    location.reload();
    LoadData();
}

function ThanhToan() {
    window.location.href = "ThanhToan.html";
}

function TrangChu() {
    window.location.href = "index.html";
}

LoadData();