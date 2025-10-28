
import Child from "./Child";

function Parent({ user }) {
    return(
        <div>
        <h2>I am a Parent</h2>
        <Child user={user}/>
        </div>
    )
}
export default Parent;