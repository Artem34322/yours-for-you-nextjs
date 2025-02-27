export default function Sizebutton({ size }: { size: string }) {
    return (
        <div>
            <a href="#">
                <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2">
                    <h2 className="font-bold font-sans">
                        {size}
                    </h2>
                </button>
            </a>
        </div>
    );
} 