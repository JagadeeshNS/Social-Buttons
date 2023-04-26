const Button = (props) => {
  //  Write your code here.
  const { text, className } = props;
  return <button className={`button ${className}`}>{text} </button>;
};

const element = (
  //  Write your code here.
  <div className="Background-container">
    <h1 className="heading">Social Buttons</h1>
    <div>
      <Button className="like-btn" text="Like" />
      <Button className="comment-btn" text="Comment" />
      <Button className="share-btn" text="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
