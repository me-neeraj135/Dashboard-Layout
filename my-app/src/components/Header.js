/** @format */

function Header(props) {
  return (
    <header>
      <div className="flex">
        <i className="fa-solid fa-layer-group"></i>
        <h1>dashboard</h1>
        <input
          className="headerInput"
          type="text"
          placeholder="searching value..."
        />
      </div>
    </header>
  );
}

export default Header;
