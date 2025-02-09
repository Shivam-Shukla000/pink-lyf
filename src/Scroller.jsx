import "./Scroller.css";
//parth teri ma ki chut
const Scroller = () => {
  const message =
    "Breaking News:- The wonderful Pink Life Vol.2 Out now! : Parth ne firse saabit kiya woh hai bhagwan. : Pink-Lifers ke beech faili nai bimaari. Naam baya jaa raha hai Deadlock. : Nahi subside hue Valorant outbreak ke symptoms, dozen logon ne kiya rage aur seethe. : Arew3y ne bola 'आत्मधुन तर आपन goth baddie.' to the surprise of no one. :";

  return (
    <div className="scroller-container">
      <div className="scroller-text">
        <span>{message}</span>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Scroller;
