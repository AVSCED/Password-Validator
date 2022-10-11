function validator() {
  let v = document.getElementById("pasword").value;
  let c,
    x,
    y,
    z,
    q,
    w = 0;
  let l = v.length;
  for (i = 0; i < l; i++) {
    if (v.charCodeAt(i) >= 65 && v.charCodeAt(i) <= 90) {
      x = 1;
    }
    if (v.charCodeAt(i) >= 97 && v.charCodeAt(i) <= 122) {
      y = 1;
    }
    if (v.charCodeAt(i) >= 48 && v.charCodeAt(i) <= 57) {
      z = 1;
    }
    if (v.charCodeAt(i) >= 33 && v.charCodeAt(i) <= 47) {
      q = 1;
    }
    if (v.charCodeAt(i) >= 58 && v.charCodeAt(i) <= 64) {
      w = 1;
    }
  }
  c = x + y + z + q + w;
  if (c == 5) {
    document.getElementById("validated").innerHTML = "Password is valid";
  } else {
    document.getElementById("validated").innerHTML = "Password is not valid";
  }
}
