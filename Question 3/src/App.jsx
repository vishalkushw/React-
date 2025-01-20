const student = [
  {
    "Name": "Vishal",
    "Branch": "Cse",
    "Collage": "SAM"
  },

  {
    "Name": "pawan",
    "Branch": "Cse",
    "Collage": "nri"
  },
  {
    "Name": "ram",
    "Branch": "Cse",
    "Collage": "nri"
  },
  {
    "Name": "adit",
    "Branch": "Cse",
    "Collage": "SAM"
  },

]

const App = () => {

  const ans = student.map((key) => {
    return (
      <>
        <tr>
          <td>{key.Name}</td>
          <td>{key.Branch}</td>
          <td>{key.Collage}</td>
        </tr>
      </>
    )
  })
  return (
    <>
        <h1>  Student data</h1>
      <table border="2px solid " width={500} >
        <tr style={{color:"white", backgroundColor:"purple"}}>
          <td >Name</td>
          <td>brach</td>
          <td>Collage</td>

        </tr>

        {ans}
      </table>

    </>
  )
}

export default App;