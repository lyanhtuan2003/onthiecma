import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "../lib"

const ListProduct = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/resources`)
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])

    useEffect(() => {
        const btns = document.querySelectorAll(".btn")
        for (let checkid of btns) {
            const id = checkid.dataset.id
            checkid.addEventListener("click", () => {
                const newdata = data.filter((item) => item.id != id)
                setData(newdata)

                fetch(`http://localhost:3000/resources/${id}`, {
                    method: "DELETE"
                })
            })
        }
    })
    return `

   <a href="/page/add"> <button type="button" class="btn btn-outline-success">THÊM</button></a>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Categories</th>
      <th scope="col">Description</th>
      <th scope="col">Images</th>
       <th scope="col">Regular-price</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  ${data.map((item, ind) => {
        return `
    <tr>
    <th scope="row">${ind + 1}</th>
    <td>${item.Name}</td>
    <td>${item.Categories}</td>
    <td>${item.Description}</td>
    <td><img src="${item.Images}" style="width:50px"></img></td>
    <td>${item.Regular_price}</td>
    <td>
    <button type="button" data-id="${item.id}" class="btn btn-outline-danger">Delete</button>
  <a href="/page/${item.id}/edit">  <button type="button" class="btn btn-outline-warning">Update</button></a>
    </td>
  </tr>
    `
    }).join("")}
  
  </tbody>
</table>
  `
}

export default ListProduct