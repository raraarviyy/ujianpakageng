import Link from "next/link";
export default function Product() {
   return (
    <div>
      <div className="text-center flex justify-center items-center bg-pink-300">
         halaman checkout
      </div>

       <Link href="/product" className="mt-10 ml-130 w-30 h-10 bg-pink-400 text-white rounded-lg border-2 flex items-center justify-center">Product</Link>
      </div>
   )
}