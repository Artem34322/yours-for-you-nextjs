'use client'
import Sizebutton from "@/Sizebutton";
import Buttonbuy from "../Buttonbuy";
import { products } from "../products";


export default function Home() {
    return (
        <div className="md:flex flex-row pad1 bg-white rounded-sm">
            <div className="basis-1/3">
                <div className="p-3">
                    {products[0].photo1}
                </div>
                <div className="p-3 grid grid-cols-3 gap-4">
                    <div>
                        {products[0].photo2}
                    </div>
                    <div>
                    {products[0].photo3}
                    </div>
                    <div>
                    {products[0].photo4}
                    </div>
                </div>
            </div>
            <div className="basis-2/3 pad1">
                <div className="pb-10">
                    <h2 className="pb-4 mb-3 text-s4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <span className="text-lg font-medium">$79</span><span className="p-3 text-lg font-medium line-through">$109</span>
                </div>
                <div>
                    <div className="pb-5">
                        <p className="pb-2">Size</p>
                        <Sizebutton text="XS" />
                    </div>
                    <div className="pb-5">
                        <p className="pb-2">Quantity</p>
                        <p>1</p>
                    </div>
                </div>
                <div className="pb-20">
                    <Buttonbuy />
                </div>
                <div>
                    <h2>Information about this produkt: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum pariatur nostrum reiciendis repudiandae unde maxime ad, quibusdam praesentium earum non autem consequuntur ratione, nam ipsam molestias architecto mollitia harum tempora?</h2>
                </div>
            </div>
        </div>

    );
}
