import "./styles.css";
import UniversalContainer from "./components/UniversalContainer/UniversalContainer";

export default function App() {
  return (
    <>
      <div style={{ height: 2000, width: "100%" }}>
        <div style={{ height: 1500, width: 300 }}></div>
        <div
          id="referenceEl"
          style={{ border: "4px solid red", width: "100%", height: 40 }}
        >
          ReferencEl
        </div>
        <div style={{ height: 1000, width: 300 }}></div>
      </div>
      <UniversalContainer
        content={
          <div>
            <h1>Universal Container</h1>
            <p>
              This is a sample paragraph that includes some&nbsp;
              <span style={{ fontWeight: "bold" }}>bold text</span> and
              some&nbsp;
              <span style={{ color: "red" }}>colored text</span>. You can
              customize it as you like.
            </p>
            <p>
              Here is another paragraph to demonstrate multiple paragraphs
              within the container. It is important to handle content properly.
            </p>
            <img
              src="https://via.placeholder.com/300x200"
              alt="Placeholder Image"
            />
            <p>
              This paragraph follows an image. Images should also be handled
              correctly in the container. Make sure that the layout is
              responsive and adaptive to the content.
            </p>
            <ul>
              <li>First bullet point</li>
              <li>Second bullet point with more details</li>
              <li>Third bullet point to illustrate the list</li>
            </ul>
            <p>
              This is the final paragraph. The container should handle various
              types of content seamlessly. We can also include&nbsp;
              <span style={{ textDecoration: "underline" }}>
                underlined text
              </span>{" "}
              and <a href="#">links</a>.
            </p>
          </div>
        }
        referenceElementId="referenceEl"
      />
    </>
  );
}
