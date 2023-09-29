import * as React from "react"
import Seat from "./seat";

interface RowProps {
  rowNumber: number
  seatsPerRow: number
}

const Row = (props: RowProps): React.ReactElement => {
  const seatItems = Array.from(Array(props.seatsPerRow)
    .keys())
    .map((seatNumber) => <Seat seatNumber={seatNumber} key={seatNumber} />)

  return <tr className="h-20">{seatItems}</tr>
}

export default Row