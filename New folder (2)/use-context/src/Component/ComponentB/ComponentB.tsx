import ComponentC from "../ComponentC/ComponentC"
import "./ComponentB.css"

const ComponentB = () => {
  return (
    <div className="com-b">
      <h1>Component B</h1>
      <ComponentC/>
    </div>
  )
}

export default ComponentB
