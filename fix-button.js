// alert(`Board Updated Successfully`)

document.getElementById("btn-fix").addEventListener("click", function () {
  alert(`Board Updated Successfully`);

  const increase = document.getElementById("increase");
  const decrease = document.getElementById("decrease");

  increase.innerText = parseInt(increase.innerText) + 1;
  decrease.innerText = parseInt(decrease.innerText) - 1;

  const btnDisabled = document.getElementById("btn-fix");
  btnDisabled.setAttribute("disabled", true);

  
  const log = document.getElementById("log");
  const time = new Date().toLocaleTimeString();
    log.innerText = `Task has added successfully at ${time}`;
    
     log.style.display = "block";

  

})



document.getElementById("btn-cloud").addEventListener("click", function () {
    
    alert(`Board Updated Successfully`);

    const increase = document.getElementById("increase");
    const decrease = document.getElementById("decrease");

    increase.innerText = parseInt(increase.innerText) + 1;
    decrease.innerText = parseInt(decrease.innerText) - 1;

    const btnDisabled = document.getElementById("btn-cloud")
    btnDisabled.setAttribute("disabled", true);

    const log = document.getElementById("log-2");
    const time = new Date().toLocaleTimeString();
    log.innerText = `Task has added successfully at ${time}`;

});


document.getElementById("btn-swift").addEventListener("click", function () {
    
    alert(`Board Updated Successfully`);

    const increase = document.getElementById("increase");
    const decrease = document.getElementById("decrease");

    increase.innerText = parseInt(increase.innerText) + 1;
    decrease.innerText = parseInt(decrease.innerText) - 1;

    const btnDisabled = document.getElementById("btn-swift")
    btnDisabled.setAttribute("disabled", true);

    const log = document.getElementById("log-3");
    const time = new Date().toLocaleTimeString();
    log.innerText = `Task has added successfully at ${time}`;

}); 

document.getElementById("btn-meta").addEventListener("click", function () {
    
    alert(`Board Updated Successfully`);

    const increase = document.getElementById("increase");
    const decrease = document.getElementById("decrease");

    increase.innerText = parseInt(increase.innerText) + 1;
    decrease.innerText = parseInt(decrease.innerText) - 1;

    const btnDisabled = document.getElementById("btn-meta")
    btnDisabled.setAttribute("disabled", true);

    const log = document.getElementById("log-4");
    const time = new Date().toLocaleTimeString();
    log.innerText = `Task has added successfully at ${time}`;
}); 

document.getElementById("btn-google").addEventListener("click", function () {
    
    alert(`Board Updated Successfully`);

    const increase = document.getElementById("increase");
    const decrease = document.getElementById("decrease");

    increase.innerText = parseInt(increase.innerText) + 1;
    decrease.innerText = parseInt(decrease.innerText) - 1;

    const btnDisabled = document.getElementById("btn-google")
    btnDisabled.setAttribute("disabled", true);

    const log = document.getElementById("log-5");
    const time = new Date().toLocaleTimeString();
    log.innerText = `Task has added successfully at ${time}`;

}); 

document.getElementById("btn-glass").addEventListener("click", function () {
    
    alert(`Board Updated Successfully`);

    const increase = document.getElementById("increase");
    const decrease = document.getElementById("decrease");

    increase.innerText = parseInt(increase.innerText) + 1;
    decrease.innerText = parseInt(decrease.innerText) - 1;

    const btnDisabled = document.getElementById("btn-glass")
    btnDisabled.setAttribute("disabled", true);


    const log = document.getElementById("log-6");
    const time = new Date().toLocaleTimeString();
    log.innerText = `Task has added successfully at ${time}`;

}); 


