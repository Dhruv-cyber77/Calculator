const input = document.querySelector("input");
const btns = document.querySelectorAll(".btn");
const clearbtn = document.querySelector(".clear");
const deletebtn = document.querySelector(".delete");
const resultbtn = document.querySelector(".result");

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("clear")) {
            input.value = "";
        } else if (btn.classList.contains("delete")) {
            let del_value = input.value;
            del_value = input.value.slice(0 , -1);
            input.value = del_value;
        } else if (btn.classList.contains("result")) {
            let calculation_result = eval(input.value);
            input.value = calculation_result;
        }else{
            let display_data = btn.dataset.value;
            input.value += display_data; 
        };
    });
});
