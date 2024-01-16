// function Greeting(){
//     return(
//         <h1>Hello! I am a standard fucntion.</h1>
//     );
// }

// const ArrowGreeting = () => (
//     <h1>Hello! I am an arrow fucntion.</h1>
// );

function ShinyButton(){
    const handleClick = () => {
        alert("You CLicked Me! Ryan Joshua Milan");
        
    }
    return(
        <button onClick={handleClick}>
            Click This Button!
        </button>
    );
}

export default ShinyButton;