import { materiaisParede } from "../../model/materialParede.mjs";

class Parede{
    calcParede(){
        const tbParede = document.getElementById("tbParede");
        const btn = document.getElementById("btnEnviar1");

        btn.addEventListener("click", ()=>{
            let qntd = document.getElementById("qntd-M2").value;
            const res = document.getElementById("resParede");
            tbParede.style.display = "flex";
            res.innerHTML = "";

            materiaisParede.forEach(item =>{
                let tr = document.createElement("tr");

                tr.innerHTML = `<td>${item.items}</td>
                            <td>${item.tipo}</td>
                            <td>${item.unid}</td>
                            <td>${(item.consumo * qntd).toFixed(2)}</td>`;
                res.appendChild(tr);
            })
        })
    }
}

export { Parede };