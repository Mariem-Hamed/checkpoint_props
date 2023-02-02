import "./App.css";
import Profile from "./profile/profile";
import image from "./profile/me.png";
function App() {
  const name = "Mariem Hamed";
  const bio =
    "PhD holder in Biological Sciences, interested about Web Development";
  const profession = "Full-Stack Javascript Bootcamp student at GoMyCode";

  const handleName = () => {
    alert(name);
  };

  return (
    <div className="App">
      <Profile
        myName={name}
        aboutMe={bio}
        myProfession={profession}
        handleName={handleName}
      >
        <img src={image} alt="" />
      </Profile>
    </div>
  );
}

export default App;
