interface Prop{
    children: string;
}

function Greeting(prop:Prop) {
    return(
        <div>{prop.children}</div>
    );
}
export default Greeting;