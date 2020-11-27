
// function prueba () {
//     let valor = document.getElementById("stuff").value = "hola";
//     return console.log(valor.value)
// }

var passwordField = document.getElementById("password"),
  stuffField = document.getElementById("stuff"),
  encryptedField = document.getElementById("encrypted"),
  decryptedField = document.getElementById("decrypted");

function handleEncrypt() {
  if(!passwordField.value) {
    alert("Missing Password");
  } else if(!stuffField.value) {
    alert("Missing Stuff");
  } else {
    encryptedField.value = sjcl.encrypt(
      passwordField.value, stuffField.value
    )
  }
};

function handleDecrypt() {
  if(!passwordField.value) {
    alert("Missing Password");
  } else if(!encryptedField.value) {
    alert("Missing Encrypted Stuff");
  } else {
     try {
       decryptedField.value = sjcl.decrypt(
        passwordField.value,
        encryptedField.value
       );
     } catch (e) {
       alert("Can't decrypt: " + e);
     }
  }
};