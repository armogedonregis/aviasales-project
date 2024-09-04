import Link from "next/link";
import { useState } from "react";

export const SearchForm = () => {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [departDate, setDepartDate] = useState('');
    const [returnDate, setReturnDate] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Логика отправки формы
    };
    return (
        <form className="s__wLJ_NGvi0o5lP6mywCPU s__DWMnirAs3sL6CCSxUuS9" onSubmit={handleSubmit}>
            <div className="s__kuRvgtvIyGARw9Uy_oIZ">
                <input
                    type="text"
                    placeholder="Откуда"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Куда"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                />
            </div>
            <div className="s__pSfvSdtvFETyJ2G3nPGM">
                <input
                    type="date"
                    value={departDate}
                    onChange={(e) => setDepartDate(e.target.value)}
                />
                <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                />
            </div>
            <button type="submit" className="s__dqLrjmV81lbY2ctpQQWt s__WErm7_CLb_ylgTog3lrX s__F5f5eYTX9eJVNg8XZTSu">
                Найти билеты
            </button>
        </form>
    );
};