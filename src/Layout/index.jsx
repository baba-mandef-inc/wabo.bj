import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";

export default function Layout(props) {
  return (
    <>
      <SearchForm />
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
