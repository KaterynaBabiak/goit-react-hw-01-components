import { TableCell } from "./TrTableBody.styled";

export const TrTableBody = ({ transaction: {type, amount, currency} }) => {
    return (
    <>
        <TableCell>{type}</TableCell>
        <TableCell>{amount}</TableCell>
        <TableCell>{currency}</TableCell>
    </>
    )
};