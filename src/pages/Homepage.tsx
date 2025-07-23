import ChatBox from "../common/Chatbox";
import Banner from "../components/HomePageComponent/Banner/Banner";
import Cate from "../components/HomePageComponent/Cate/Cate";
import List from "../components/HomePageComponent/List/List";
import Mall from "../components/HomePageComponent/Mall/Mall";
import NavBar from "../components/HomePageComponent/NavBar/NavBar";
import Sale from "../components/HomePageComponent/Sale/Sale";
import Search from "../components/HomePageComponent/Search/Search";
import Suggest from "../components/HomePageComponent/Suggest/Suggest";
import styles from "@/sass/Homepage/_HomePage.module.scss";

function Homepage() {
  return (
    <>
      <ChatBox />
      <NavBar />
      <Banner />
      <div className={styles.container}>
        <Cate />
        <Sale />
        <Mall />
        <Search />
        <Suggest />
        <List />
      </div>
    </>
  );
}
export default Homepage;
