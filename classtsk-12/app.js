   const tbody = document.querySelector ("tbody")
   fetch("https://northwind.vercel.app/api/products")
   .then(res => res.json ())
   .then (data => {

    data.forEach(elem => { 
        const tr = document.createElement ("tr")
        const id = document.createElement ("th")
        const name = document.createElement ("td")
        const country = document.createElement ("td")
        const price = document.createElement ("td")
        const deletetd = document.createElement ("td")
        const edit = document.createElement ("td")
        const detail = document.createElement ("td")

        const deletebtn = document.createElement ("button")
        deletebtn.style.width = "60px"
        deletebtn.style.height = "30px"
        deletebtn.style.background = "red"
        deletebtn.style.color = "black"
        deletebtn.innerText = "Delete"

        const editbtn = document.createElement ("button")
        editbtn.style.width = "60px"
        editbtn.style.height = "30px"
        editbtn.style.background= "green"
        editbtn.style.color = "black"
        editbtn.innerText = "Edit"

        const detailbtn = document.createElement ("button")
        detailbtn.style.width = "60px"
        detailbtn.style.height = "30px"
        detailbtn.style.background = "yellow"
        detailbtn.style.color = "black"
        detailbtn.innerText = "Detail"


        id.innerText = elem.id;
        name.innerText = elem.name;
        country.innerText = elem.name;
        price.innerText = elem.unitPrice;

        tr.append(id, name, country, price, deletetd, edit, detail)
        deletetd.append (deletebtn)
        edit.append (editbtn)
        detail.append (detailbtn)
        tbody.append(tr)

        deletebtn.addEventListener ("click", function (e) {
        //  console.log("Fidan")
        //  fetch("https://northwind.vercel.app/api/products" + "/" + elem.id, {
        //  method : 'delete'
        // })
        //  .then(res => res.json ())

        e.target.parentElement.parentElement.remove()
        });

        editbtn.addEventListener ("click", function (e) {
         

        })

    })
})

