import ProductCard from "./productCard";

export default function TrendingProduct() {
  return (
    <div>
      <h1>Trending Products</h1>

      <ProductCard
        name="Mac book air"
        price="150,000"
        image="https://picsum.photos/id/1/200/300"
      />
      <ProductCard
        name="Apple iphone"
        price="140,000"
        image="https://picsum.photos/id/1/200/300"
      />
      <ProductCard
        name="Gaming mouse"
        price="130,000"
        image="https://picsum.photos/id/1/200/300"
      />
      <ProductCard
        name="Fantech Head set"
        price="120,000"
        image="https://picsum.photos/id/1/200/300"
      />
    </div>
  );
}
