function writeMyName(name) {
  return "Meu nome é " + name;
}

function validateMyAge(age) {
  if (age < 18) {
    return "de menor";
  } else {
    return "De maior";
  }
}

(function () {
  console.log(writeMyName("Luis Gustavo Gomes Dias"));
  console.log(validateMyAge(27));
})();
