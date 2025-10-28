function PropsDemo(props) {
    return (
      <div>
        <h2>String Prop: {props.name}</h2>
        <h2>Number Prop: {props.age}</h2>
        <h2>Boolean Prop: {props.isStudent ? "Yes" : "No"}</h2>
  
        <h3>Array Prop:</h3>
        <p>
          {props.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </p>
  
        <h3>Object Prop:</h3>
        <p>
          City: {props.info.city}, Country: {props.info.country}
        </p>
  
        <button onClick={props.greet}>Click Me (Function Prop)</button>
  
        <div style={{ marginTop: "10px" }}>
          <h3>Children Prop:</h3>
          {props.children}
        </div>
      </div>
    );
  }
  
  export default PropsDemo;
  