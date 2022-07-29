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
    let h1 = document.createElement("h1")

    h1.textContent = "I'm doing it in an imperative way"

    h1.className = "header"

    document.querySelector("#root").append(h1)