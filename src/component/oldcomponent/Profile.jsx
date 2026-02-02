export default function Profile(props){
    return(
        <div>
            <h1>Name: {props.name}</h1>
            <h2>Role: {props.role}</h2>
        </div>
    )
}