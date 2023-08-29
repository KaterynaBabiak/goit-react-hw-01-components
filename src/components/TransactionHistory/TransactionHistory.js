import { TrTableBody } from "./TrTableBody";
import { TransactionTable, TableHead, TableBody, TableRow } from './TransactionHistory.styled'

export const TransactionHistory = ({ transactions }) => {
    return (
        <TransactionTable>
        <TableHead>
            <tr>
                <th>type</th>
                <th>ammount</th>
                <th>currency</th>
            </tr>
        </TableHead>
        <TableBody>
            {transactions.map(transaction => (
                <TableRow key={transaction.id}>
                   <TrTableBody transaction={transaction}/>
                </TableRow>
            ))}
        </TableBody>
        </TransactionTable>

    )

};