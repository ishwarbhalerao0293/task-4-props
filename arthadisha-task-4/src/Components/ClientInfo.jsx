function ClientInfo({ clientName, clientEmail, clientAddress, invoiceNumber }) {
    return (
        <section className="client-info">
            <h3>Client Invoice</h3>

            <p>
                <strong>Invoice Number:</strong> {invoiceNumber}
            </p>

            <p>
                <strong>Client Name:</strong> {clientName}
            </p>

            <p>
                <strong>Client Email:</strong> {clientEmail}
            </p>

            <p>
                <strong>Client Address:</strong> {clientAddress}
            </p>
        </section>
    );
}

export default ClientInfo;