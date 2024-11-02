import { AviaFilters, AviaSearchResult } from "@/modules/flights/components";



export default function SearchPage() {
    return (
        <div className="min-h-screen">
            <div className="container mx-auto px-[150px] pb-8 pt-[60px]">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/5 lg:min-w-[497px]">
                        <AviaFilters />
                    </div>
                    <div className="md:w-3/4 lg:w-full">
                        <AviaSearchResult />
                    </div>
                </div>
            </div>
        </div>
    );
}