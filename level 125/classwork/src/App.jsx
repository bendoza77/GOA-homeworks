import "./App.css"

const textStyle = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  backgroundColor: "black",
  color: "white",
  justifyContent: "center",
  width: "150px",
  height: "100px",
  gap: "20px"
}

const App = () => {

  return (
    <>
      <div style={textStyle}>
        <p>Hello World</p>
        <p>Hello World</p>
      </div>

      <div style={{marginTop: "100px", boxShadow: "0 10px 50px gray", width: "150px", height: "100px", justifyContent: "center", gap: "10px", display: "flex", flexDirection: "column", textAlign: "center"}}>
        <p>Hello World</p>
        <p>Hello World</p>
      </div>

      <div className="third_div">
        <p>Hello World</p>
        <p>Hello World</p>
      </div>
    </>
  );



}

export default App
