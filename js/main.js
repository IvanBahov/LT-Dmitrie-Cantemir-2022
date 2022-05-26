new SimpleLightbox({ elements: '.container-galerie a'  });
new SimpleLightbox({ elements: '.orar-imagini a'  });

AOS.init({
    duration: 1000,
    offset: 100,
    once: true
});


emailjs.init("JC5vzQPW1-p8i0nlmR");

function mobile() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className = "nav mobile";
    } else {
        x.className = "nav";
    }
}


function send() {

    if (document.getElementById("formular").checkValidity() == false) {
        document.getElementById("formular").reportValidity();
        return;
    }

    var date = {
        nume: document.getElementById("nume").value,
        email: document.getElementById("email").value,
        mesaj: document.getElementById("mesaj").value
    };

    emailjs.send("service_sr1nejl", "template_t1361oc", date)
        .then(function (raspuns) {
            alert("Mesajul a fost transmis.")
            document.getElementById("formular").reset();
        }, function (error) {
            alert("Eroare la transmitere. Contactati programatorul.")
        })
}
