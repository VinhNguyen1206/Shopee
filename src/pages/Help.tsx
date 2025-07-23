import HelpCate from "../components/Help/HelpCate";
import HelpNavBar from "../components/Help/HelpNavbar";
import HelpQuestion from "../components/Help/HelpQuestion";
import HelpSearch from "../components/Help/HelpSearch";
import HelpSupport from "../components/Help/HelpSupport";
import styles from "@/sass/help/_Help.module.scss";
function Help() {
  return (
    <div className={styles.container}>
      <HelpNavBar />
      <HelpSearch />
      <HelpCate />
      <HelpQuestion />
      <HelpSupport />
    </div>
  );
}
export default Help;
