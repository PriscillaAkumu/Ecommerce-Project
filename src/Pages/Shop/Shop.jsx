import "./Shop.css";
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner'
import Filter from "./filter/Filter";
import ShopList from "./shoplist/ShopList";
const Shop = () => {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Shop', link: '/shop' },
  ];
  return (
    <>
    <Navbar/>
    <Banner
     pageTitle="Shop"
     breadcrumbItems={breadcrumbItems}
    />
      <Filter />
      <ShopList />
    </>
  );
};

export default Shop;
