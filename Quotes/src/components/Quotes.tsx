interface Quotes {
    id: number;
    quote: string;
    author: string;
}

interface propQuotes {
    quotes: Quotes[];
}

function Quotes(prop: propQuotes) {
    return (
        <div className="">
            {prop.quotes.map((quote) => (
                <div className="card text-bg-dark mb-3" style={{ maxWidth: '18rem' }} key={quote.id}>
                    <div className="card-header">Quotes</div>
                    <div className="card-body">
                        <p className="card-text">{quote.quote}</p>
                        <h5 className="card-title">-{quote.author}</h5>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Quotes;