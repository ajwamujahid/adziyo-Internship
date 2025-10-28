
  
function Child({ user }){
    return(
        <div>
            <h3>I am Child</h3>
            <p>User Name: {user.name}</p>
            <p>User Age: {user.age}</p>
        </div>
    );
}
export default Child;