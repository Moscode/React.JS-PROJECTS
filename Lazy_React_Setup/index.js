//ReactDOM.render(<p>It's going well</p>, document.getElementById("root"))
/* function ListItems(){
    return(
        <ul>
            <li>First list element</li>
            <li>Second list element</li>
        </ul>
    )
}

function ParaGraph(){
    return(
        <p>I'm enjoying documenting my learning using my learning</p>
    )
}

ReactDOM.render(
    <div>
        <ListItems />
        <ParaGraph />
    </div>,
    document.querySelector("#root")
    ) */

    // Declarative feature of react rather than Vanilla JS Imperative way
    /*
    let h1 = document.createElement("h1")

    h1.textContent = "I'm doing it in an imperative way"

    h1.className = "header"

    document.querySelector("#root").append(h1) */

    // challenge on using JSX to create nested elements

    const header = (
    <nav>
        <h1>Product Showcase</h1>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
    </nav>
    )

    document.getElementById("root").append(JSON.stringify(header))