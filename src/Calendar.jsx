function Calendar(props) {
    const names = props.days.map((d) => {
        return <> {d.name} </>
    })
    const dates = props.dates.map((d) => {
        return <> {d} </>
    }) 
    let calendarItems = []
    for (let i = 0; i < dates.length; i++) {   
        calendarItems.push(<div className="item">
            {names[i%names.length]}<br/>{dates[i]}
        </div>)
       
    }
    return (
    <div id="calendar">{calendarItems}</div>
    )
}


export default Calendar