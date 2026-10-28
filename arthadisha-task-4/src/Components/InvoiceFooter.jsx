function InvoiceFooter({ subtotal, gstRate = 18 }) {
    const gstAmount = (subtotal * gstRate) / 100;
    const grandTotal = subtotal + gstAmount;

    const money = (amount) =>
        new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 2
        }).format(amount);

    return (
        <section className="invoice-footer">
            <p>
                <span>Subtotal</span>
                <strong>{money(subtotal)}</strong>
            </p>

            <p>
                <span>GST ({gstRate}%)</span>
                <strong>{money(gstAmount)}</strong>
            </p>

            <p className="grand-total">
                <span>Grand Total</span>
                <strong>{money(grandTotal)}</strong>
            </p>

            <p className="thank-you">Thank you for your business!</p>
        </section>
    );
}

export default InvoiceFooter;