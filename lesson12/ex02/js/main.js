const content = document.querySelector("#content")
const url = "http://apiforlearning.zendvn.com/api/get-gold";
$(document).ready(function(){
    $.get(url,
        function (data) {
            const source = data;
            let result = `<tr>
            <th class="name">Tên</th>
            <th>Mua Vào</th>
            <th>Bán ra</th>
        </tr>`
            source.map(item =>{
                result += `
                <tr>
                <td class="name">${item.type}</td>
                <td>${item.buy}</td>
                <td>${item.sell}</td>
            </tr>`
            })
            document.querySelector("table").innerHTML = result ;
        },
        "json"
    );
});
