import { useState } from "react";
import Layout from "./Layout";
import Navbar from "./Navbar";
import Products from "./Products";
export default function Hero({ data }) {
  const [searchField, setSearchField] = useState("");
  const filterProducts = data.filter(product =>
    searchField
      ? product.title.toLowerCase().includes(searchField.toLocaleLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(searchField.toLocaleLowerCase()) ||
        product.category.toLowerCase().includes(searchField.toLocaleLowerCase())
      : product
  );

  return (
    <Layout>
      <div className='min-h-screen bg-white '>
        <Navbar search searchValue={e => setSearchField(e.target.value)} />
        <div className='flex flex-wrap'>
          {filterProducts.map(data => {
            return (
              <Products
                slug={data.id}
                img={data.image}
                title={data.title}
                price={data.price}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
