function InvoiceTable({ items }) {
    const money = (amount) =>
        new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 2
        }).format(amount);

    const subtotal = items.reduce(
        (total, item) => total + item.quantity * item.rate,
        0
    );

    return (
        <section className="invoice-items">
            <h3>Invoice Items</h3>

            <table>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Rate</th>
                        <th>Amount</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{money(item.rate)}</td>
                            <td>{money(item.quantity * item.rate)}</td>
                        </tr>
                    ))}
                </tbody>

                <tfoot>
                    <tr>
                        <th colSpan="3">Subtotal</th>
                        <th>{money(subtotal)}</th>
                    </tr>
                </tfoot>
            </table>
        </section>
    );
}

export default InvoiceTable;