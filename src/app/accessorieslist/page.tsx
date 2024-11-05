import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className="accessories-list-container">
        <h1>Accessories List</h1>
        <ul>
            <br />
            <li><Link href="accessorieslist/Clothes">Clothes</Link></li>
            <li><Link href="accessorieslist/Watches">Watches</Link></li>
            <li><Link href="accessorieslist/Jewelleries">Jewelleries</Link></li>
            <li><Link href="accessorieslist/Bags">Bags</Link></li>
            <li><Link href="accessorieslist/BeautyProducts">Beauty Products</Link></li>
        </ul>
    </div>
  )
}

export default page