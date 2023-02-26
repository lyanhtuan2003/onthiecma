import { router, useEffect, useState } from "../lib"

const EditProduct = ({ id }) => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/resources/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

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
      fetch(` http://localhost:3000/resources/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newform)
      })
        .then((res) => res.json())
        .then((data) => setData(data))
      router.navigate("/")
    })
  })

  return `
  <form id="form_add">
  <div class="mb-3">
  <label for="disabledTextInput" class="form-label">Name</label>
  <input type="text" id="name" value="${data.Name}" class="form-control">
</div>


<div class="mb-3">
<label for="disabledTextInput" class="form-label">Categories</label>
<input type="text" id="categories" value="${data.Categories}" class="form-control" >
</div>

<div class="mb-3">
<label for="disabledTextInput" class="form-label">Description</label>
<input type="text" id="description" value="${data.Description}" class="form-control" >
</div>


<div class="mb-3">
<label for="disabledTextInput" class="form-label">Images</label>
<input type="text" id="images" value="${data.Images}" class="form-control" >
</div>

<div class="mb-3">
<label for="disabledTextInput" class="form-label">Regular_price</label>
<input type="text" id="regular_price" value="${data.Regular_price}" class="form-control" >
</div>

<button class="btn btn-outline-success">THÊM</button>
  </form>
  `
}

export default EditProduct