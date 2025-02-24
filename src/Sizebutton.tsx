const data = {
    name: "blaues T-Shirt",
    price: 19.99,
    sizes: ["S", "M", "L", "XL", "XXL"],
    comments: [
        {
            userName: "Max Mustermann",
            userImage: "https://randomuser.me/api/portraits",
        },
        {
            userName: "Maxi Musterfrau",
            userImage: "https://randomuser.me/api/portraits",
        }
    ]
}


export default function Sizebutton({ text }: { text: string }) {
    return (
        <div>
            <a href="#">
                <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2">
                    <h2 className="font-bold font-sans">
                        {text}
                    </h2>
                </button>
            </a>
        </div>
    );
} 