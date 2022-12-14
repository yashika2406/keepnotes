import "./footer.css";
export const Footer = () => {
  return (
    <div class="footer">
      <div class="footer__intro">
        <h2>
          <span
            style={{
              background: "#ffae19",
              color: "white",
              padding: "0.25rem 0.5rem"
            }}
          >
            Yashika
          </span>{" "}
          Gupta
        </h2>
      </div>
      <div class="footer__social">
        <a href="https://github.com/yashika2406">
          <img src="https://img.icons8.com/fluent/48/000000/github.png" />
        </a>
        <a href="https://www.linkedin.com/in/yashika-gupta-24336b1a1/">
          <img src="https://img.icons8.com/material-two-tone/48/000000/linkedin--v1.png" />
        </a>
        <a href="https://twitter.com/yashikagupta">
          <img src="https://img.icons8.com/material-two-tone/48/000000/twitter.png" />
        </a>
      </div>
    </div>
  );
};
