import { materiaisCParede } from "../../model/materialCP.js";

class CoParede{
    calcCoParede(){
        const tbParede = document.getElementById("tbCoParede");
        const btn = document.getElementById("btnEnviar2");

        btn.addEventListener("click", ()=>{
            let qntd = document.getElementById("qntd_M2").value;
            const res = document.getElementById("resCoParede");
            tbParede.style.display = "flex";
            res.innerHTML = "";

            materiaisCParede.forEach(item =>{
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

export {CoParede};