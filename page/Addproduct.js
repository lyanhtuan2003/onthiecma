import { router, useEffect, useState } from "../lib"
import { object, string } from "yup"

const cheleter = object({
  Name: string().required("không được để trống"),
  Categories: string().required("không được để trống"),
  Description: string().required("không được để trống"),
  Images: string().required("không được để trống"),
  Regular_price: string().required("không được để trống")
})

const Addproduct = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const formpro = document.getElementById("form_add")
    const namepro = document.getElementById("name")
    const categoriespro = document.getElementById("categories")
    const descriptionpro = document.getElementById("description")
    const imagespro = document.getElementById("images")
    const regular_pricepro = document.getElementById("regular_price")

    formpro.addEventListener("submit", (e) => {
      e.preventDefault()
      const newform = {
        Name: namepro.value,
        Categories: categoriespro.value,
        Description: descriptionpro.value,
        Images: imagespro.value,
        Regular_price: regular_pricepro.value
      }
      cheleter.validate(newform, { abortEarly: false })
        .then(() => {
          fetch(` http://localhost:3000/resources`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newform)
          })
            .then((res) => res.json())
            .then((data) => setData(data))
          router.navigate("/")
        })
        .catch((error) => {
          const check = document.querySelectorAll(".checkerr")
          check.forEach((item, ind) => {
            item.innerHTML = error.errors[ind]
          })
        })

    })
  })

  return `
  <form id="form_add">
  <div class="mb-3">
  <label for="disabledTextInput" class="form-label">Name</label>
  <input type="text" id="name" class="form-control">
  <div class="checkerr" style="color: red;"></div>
</div>


<div class="mb-3">
<label for="disabledTextInput" class="form-label">Categories</label>
<input type="text" id="categories" class="form-control" >
<div class="checkerr" style="color: red;"></div>
</div>

<div class="mb-3">
<label for="disabledTextInput" class="form-label">Description</label>
<input type="text" id="description" class="form-control" >
<div class="checkerr" style="color: red;"></div>
</div>


<div class="mb-3">
<label for="disabledTextInput" class="form-label">Images</label>
<input type="text" id="images" class="form-control" >
<div class="checkerr" style="color: red;"></div>
</div>

<div class="mb-3">
<label for="disabledTextInput" class="form-label">Regular_price</label>
<input type="text" id="regular_price" class="form-control" >
<div class="checkerr" style="color: red;"></div>
</div>

<button class="btn btn-outline-success">THÊM</button>
  </form>
  `
}

export default Addproduct