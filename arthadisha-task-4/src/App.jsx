import "./App.css";

import CompanyHeader from "./Components/CompanyHeader.jsx";
import ClientInfo from "./Components/ClientInfo.jsx";
import InvoiceTable from "./Components/InvoiceTable.jsx";
import InvoiceFooter from "./Components/InvoiceFooter.jsx";

const invoices = [
  {
    companyName: "ARTHADISHA",
    tagline: "IT SERVICES & SUPPLIES",
    address: "Nashik, Maharashtra, India",
    logoText: "AD",
    invoiceNumber: "INV-001",
    clientName: "Rahul Patil",
    clientEmail: "rahul@example.com",
    clientAddress: "Nashik, Maharashtra, India",
    gstRate: 18,
    items: [
      { name: "Wheat Seeds", quantity: 10, rate: 500 },
      { name: "Organic Fertilizer", quantity: 5, rate: 800 },
      { name: "Neem Oil", quantity: 4, rate: 350 },
      { name: "Agriculture Sprayer", quantity: 2, rate: 1500 },
      { name: "Garden Tools", quantity: 3, rate: 400 }
    ]
  },
  {
    companyName: "ARTHADISHA",
    tagline: "IT SERVICES & SUPPLIES",
    address: "Nashik, Maharashtra, India",
    logoText: "AD",
    invoiceNumber: "INV-002",
    clientName: "Ishwar Bhalerao",
    clientEmail: "ishwar@example.com",
    clientAddress: "Pune, Maharashtra, India",
    gstRate: 18,
    items: [
      { name: "Neem Oil", quantity: 4, rate: 350 },
      { name: "Agriculture Sprayer", quantity: 2, rate: 1500 },
      { name: "Garden Tools", quantity: 3, rate: 400 },
      { name: "Wheat Seeds", quantity: 5, rate: 500 },
      { name: "Organic Fertilizer", quantity: 2, rate: 800 }
    ]
  }
];

function Invoice({ invoice }) {
  const subtotal = invoice.items.reduce(
    (total, item) => total + item.quantity * item.rate,
    0
  );

  return (
    <article className="invoice">
      <CompanyHeader
        companyName={invoice.companyName}
        tagline={invoice.tagline}
        address={invoice.address}
        logoText={invoice.logoText}
      />

      <ClientInfo
        clientName={invoice.clientName}
        clientEmail={invoice.clientEmail}
        clientAddress={invoice.clientAddress}
        invoiceNumber={invoice.invoiceNumber}
      />

      <InvoiceTable items={invoice.items} />

      <InvoiceFooter
        subtotal={subtotal}
        gstRate={invoice.gstRate}
      />
    </article>
  );
}

function App() {
  return (
    <main className="page">
      <button
        className="print-button"
        onClick={() => window.print()}
      >
        Print Invoices
      </button>

      <h1 className="page-title">
        Client Invoice Page
      </h1>

      {invoices.map((invoice) => (
        <Invoice
          key={invoice.invoiceNumber}
          invoice={invoice}
        />
      ))}
    </main>
  );
}

export default App;