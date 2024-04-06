import { materiaisForro } from "../../model/materialForro.mjs";

class Forro{
    calcForro(){
        const btn = document.getElementById("btnEnviar");
        const tbForro = document.getElementById("tbForro");

        btn.addEventListener("click", () =>{
            let qntd = document.getElementById("qntdM2").value;
            const res = document.getElementById("resForro");
            tbForro.style.display = "flex";
            res.innerHTML = "";

            materiaisForro.map(item =>{          
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

export { Forro };