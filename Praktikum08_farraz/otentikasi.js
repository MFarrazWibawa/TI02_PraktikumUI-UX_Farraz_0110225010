        function login() {
        let user = document.getElementById('username').value;
        let pass = document.getElementById('password').value;

        let validUser = "ahmad2017";
        let validPass = "integrity";

        if (user === validUser && pass === validPass) {
            alert("Login Sukses!");
            window.location.href = "sukses.html";
        } else {
            alert("Login Gagal! Username atau password salah.");
        }

        return false;
        }