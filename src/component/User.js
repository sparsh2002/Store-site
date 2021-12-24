const User = (props) => {
    const {data} = props
    return ( 
        <div>
            <h1>User Component</h1>
            <p>{data.name}</p>
            <p>{data.age}</p>
        </div>
     );
}
 
export default User;
