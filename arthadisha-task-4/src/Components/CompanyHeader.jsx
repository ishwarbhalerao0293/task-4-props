function CompanyHeader({ companyName, tagline, address, logoText }) {
    return (
        <header className="company-header">
            <div className="logo-placeholder">{logoText}</div>

            <div>
                <h2>{companyName}</h2>
                <p>{tagline}</p>
                <p>{address}</p>
            </div>
        </header>
    );
}

export default CompanyHeader;