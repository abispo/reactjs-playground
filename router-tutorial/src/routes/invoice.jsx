import { useParams } from "react-router-dom";
import { getInvoice } from "../data";


function Invoice() {
    let params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceId));

    return (
        <main style={{ padding: "1rem" }}>
            <h2>Total due: { invoice.amount }</h2>
            <p>
                { invoice.name }: { invoice.number }
            </p>
            <p>Due date: { invoice.due }</p>
        </main>
    )
}

export default Invoice;