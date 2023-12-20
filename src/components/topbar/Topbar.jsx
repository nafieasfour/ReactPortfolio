import "./topbar.scss";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";

export default function topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Contacts:
          </a>
          <div className="itemContainer">
            <AddIcCallIcon className="icon" />
            <span>00905364351534</span>
          </div>
          <div className="itemContainer">
            <AlternateEmailIcon className="icon" />
            <span>ph.nafee.asfour[at]gmail[dot]com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>

            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
