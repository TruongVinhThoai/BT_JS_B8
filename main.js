// Them So

var numberArray = [];

function themSo() {
  var inputThemso = document.querySelector("#themso").value.trim() * 1;

  numberArray.push(inputThemso);
  document.querySelector("#result_themso").innerHTML = numberArray;
}
// Bai 1
function tinhTongsoduong() {
  var tongSoduong = 0;

  numberArray.forEach(function (item) {
    if (item > 0) {
      tongSoduong += item;
    }
    document.querySelector("#result_tongsoduong").innerHTML = tongSoduong;
  });
}

// Bai 2
function demSoduong() {
  var demSoduong = 0;
  numberArray.forEach(function (item) {
    if (item > 0) {
      demSoduong++;
    }
    document.querySelector("#result_demsoduong").innerHTML = demSoduong;
  });
}

// Bai 3
function timSonhonhat() {
  var timSonhonhat = numberArray[0];
  numberArray.forEach(function (item) {
    if (item < timSonhonhat) {
      timSonhonhat = item;
    }
    document.querySelector("#result_timsonhonhat").innerHTML = timSonhonhat;
  });
}

// Bai 4
function timSoduongnhonhat() {
  var soDuongArray = [];
  numberArray.forEach(function (item) {
    if (item > 0) {
      soDuongArray.push(item);
    }
  });
  document.querySelector("#result_timsoduongnhonhat").innerHTML = soDuongArray;
  if (soDuongArray == "") {
    document.querySelector(
      "#timsoduongnhonhat"
    ).innerHTML = `Khong co so duong`;
  } else {
    var soDuongnhonhat = soDuongArray[0];
    soDuongArray.forEach(function (itemDuongNN) {
      if (itemDuongNN < soDuongnhonhat) {
        soDuongnhonhat = itemDuongNN;
      }
      document.querySelector("#timsoduongnhonhat").innerHTML = soDuongnhonhat;
    });
  }
}

// Bai 5
function timSochancuoicung() {
  var soChancuoicung;
  numberArray.forEach(function (item) {
    if (item % 2 == 0) {
      soChancuoicung = item;
    }
    document.querySelector("#result_timsochancuoicung").innerHTML =
      soChancuoicung;
  });
}

// Bai 6

function doiCho() {
  var inputVitri1 = document.querySelector("#vitri1").value.trim() * 1;
  var inputVitri2 = document.querySelector("#vitri2").value.trim() * 1;

  var viTri1update = numberArray[inputVitri2];
  var viTri2update = numberArray[inputVitri1];
  numberArray[inputVitri1] = viTri1update;
  numberArray[inputVitri2] = viTri2update;
  document.querySelector("#result_doicho").innerHTML = numberArray;
}

// Bai 7

function sapXep() {
  numberArray.sort((a, b) => a - b);
  document.querySelector("#result_sapxep").innerHTML = numberArray;
}

// Bai 8
function soNguyento() {
  function ktSonguyento(n) {
    //flag = 0 => không phải số nguyên tố
    //flag = 1 => số nguyên tố
    var flag = 1;
    if (n < 2) return (flag = 0);

    var i = 2;
    while (n > i) {
      if (n % i == 0) {
        flag = 0;
        break; /*Chỉ cần tìm thấy 1 ước số là đủ và thoát vòng lặp*/
      }
      i++;
    }
    return flag;
  }

  function timVitridautien(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (ktSonguyento(arr[i]) == 1) return arr[i];
    }
    return undefined;
  }

  var soNguyentoDauTien = timVitridautien(numberArray);
  document.querySelector("#result_songuyento").innerHTML = soNguyentoDauTien;
}

// Bai 9
function demSonguyen() {
  function dem(arr) {
    var count = 0;
    // for (var i = 0; i < arr.length; i++) {
    //   if (Number.isInteger(arr[i])) {
    //     count++;
    //   }
    // }
    arr.forEach(function (item) {
      if (Number.isInteger(item)) {
        count++;
      }
    });
    return count;
  }

  var cacSonguyen = dem(numberArray);
  document.querySelector("#result_demsonguyen").innerHTML = cacSonguyen;
}

// Bai 10

function soSanh() {
  var soDuong = 0;
  var soAm = 0;
  numberArray.forEach(function (item) {
    if (item > 0) {
      soDuong++;
    } else if (item < 0) {
      soAm++;
    } else {
      return undefined;
    }
  });
  if (soAm > soDuong) {
    document.querySelector("#result_sosanh").innerHTML = `So am > So duong`;
  } else if (soDuong > soAm) {
    document.querySelector("#result_sosanh").innerHTML = `So duong > So am`;
  } else {
    document.querySelector("#result_sosanh").innerHTML = `So am = So duong `;
  }
}
