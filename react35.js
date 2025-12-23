function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log("You have clicked a link");
  }
  return (
    <a href="/" onClick={handleClick}>
      Click Me
    </a>
  );
}
export default ActionLink;
