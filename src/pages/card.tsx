// what is components
// first letter capital
//return parent element of html
// re useable
//javascript/typescript k sth css

const Card = () => {
    let message: string = "my first arrow function with components"
    return (
        <div>
            <h2>
                {message}
            </h2>
        </div>
    )
}

//Next js components
export const Card2 = () => {
    let message: string = "my second arrow function with components"
    return (
        <div>
            <h4>{message}</h4>
            </div>
    )
}

export default Card2;