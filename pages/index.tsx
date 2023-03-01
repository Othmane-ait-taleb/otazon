import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import data from "../utils/data";
export default function Home() {
  return (
    <Layout title="Home page">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((p, index) => {
          return (
            <div key={index}>
              <ProductItem product={p} />
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
