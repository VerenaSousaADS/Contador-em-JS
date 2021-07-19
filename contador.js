window.addEventListener("load", () => {
  const button = document.getElementById("button");

  button.addEventListener("click", () => {
    // window.addEventListener("load", () => {

    //Tempo em segundos, que queremos.
    let sec = 360;

    const countDiv = document.getElementById("timer");

    const secpass = () => {
      let min = Math.floor(sec / 60); //Biblioteca disponivel para obter um número inteiro
      let segundosRestantes = sec % 60;

      if (segundosRestantes < 10) {
        segundosRestantes = "0" + segundosRestantes;
      }

      if (min < 10) {
        min = "0" + min;
      }

      //vai gerar o formato de 02:59
      countDiv.innerHTML = min + ":" + segundosRestantes;

      //Condição final
      if (sec > 0) {
        sec = sec - 1;
      } else {
        countDiv.innerHTML = "Acabou!";
      }
    };

    const countDown = setInterval(() => secpass(), 1000);
  });
});
