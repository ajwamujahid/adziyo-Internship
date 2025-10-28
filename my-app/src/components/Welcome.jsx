// ====================== Simple Component ===========================
function Welcomes() {
    return <h1>Welcome to My First React Component!</h1>;
  }
  
 
  

// ====================== Component With props ===========================
function Welcome(props) {
    return (
      <div>
        <h1>Welcome, {props.name}!</h1>
        <p>Your favorite language is {props.language}.</p>
      </div>
    );
  }
  
  export default Welcome;
 