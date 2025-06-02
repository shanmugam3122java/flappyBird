function ListGroup(){
    const items = [
        'New York',
        'Los Angeles',
        'Chicago',
        'Houston',
        'Phoenix',
    ]

    return (
        <>
        <h1>List</h1>
        {items.length === 0 && <p>No items founded</p>}
        <ul className="list-group">
            {
                items.map((item) => <li key={item} onClick={() => {console.log("hello");
                }}>{item}</li>)
            }
        </ul>
        </>
    )
}
export default ListGroup;