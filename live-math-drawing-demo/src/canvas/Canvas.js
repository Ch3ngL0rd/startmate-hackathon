import React, { useEffect } from "react";
import { useCanvas } from "./CanvasContext";
import {
  ClearCanvasButton,
  LatexRenderer,
  UndoButton,
  RedoButton,
  SubmitAnswer,
  Loading,
} from "./Utils";
import "./canvas.css";

function CanvasInternal() {
  const { canvasRef, prepareCanvas } = useCanvas();

  useEffect(() => {
    prepareCanvas();
  }, []);

  return (
    <div className="canvas-container">
      <canvas ref={canvasRef} className="canvas" />
    </div>
  );

  function wait() {
    let loading = true;
    setTimeout(() => {
      loading = false;
    }, 4000);
    loading = false;
  }
}

export function Canvas() {
  // gets page number from url
  const url = window.location.pathname;

  if (url === "/mark") {
    console.log("mark");
    return <h1>YO YO YO</h1>;
  } else {
    return (
      <>  
        <div style={{ background: "#f2f2f5" }}>
          <div
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            <p>Question 1</p>
            <p>2x + 4 = 0 (solve for x)</p>
          </div>
          <LatexRenderer />
        </div>
        <div className="canvas-buttons-container">
          <ClearCanvasButton />
          <UndoButton />
          <RedoButton />
        </div>
        <CanvasInternal />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            paddingRight: "1em",
            paddingBottom: "1me",
          }}  
        >

          {/* shit goes here */}
          <a href="http://localhost:5173/">
            <SubmitAnswer />
          </a>
        </div>
      </>
    );
  }
}
