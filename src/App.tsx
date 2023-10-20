export default function App() {
  return (
    <>
      <div className="main-container">
        <div className="results">
          <h1 className="title">Your Result</h1>
          <div className="graphic">
            <span className="score">76</span>
            <span className="total">of 100</span>
          </div>
          <div className="comments">
            <h2 className="phrase">Great</h2>
            <p className="info">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>
        <div className="summary">
          <h2 className="summaryTitle">Summary</h2>
          <button className="btn">Continue</button>
        </div>
      </div>
    </>
  );
}
