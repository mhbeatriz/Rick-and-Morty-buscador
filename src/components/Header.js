import logo from "../images/RickandMorty.png";
import song from "../audio/song.mp3";

const Header = () => {
  return (
    <div className="header">
      <audio
        id="song"
        type="audio/mp3"
        controls
        autoPlay
        className="song"
        hidden
      >
        {" "}
        <source src={song} />
      </audio>
      <img className="header-logo" src={logo} />
    </div>
  );
};
export default Header;
