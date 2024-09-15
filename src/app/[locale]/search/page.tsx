import { AviaFilters, AviaSearchResult } from "@/modules/flights/components";



export default function SearchPage() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/4">
                        <AviaFilters />
                    </div>
                    <div className="md:w-3/4">
                        <AviaSearchResult />
                    </div>
                </div>
            </div>
        </div>
    );
}