import React, { useEffect } from "react";
import { useCanvas } from "./CanvasContext";
import { ClearCanvasButton, LatexRenderer, UndoButton, RedoButton, CopyToClipboardButton, SubmitAnswer } from './Utils'
import './canvas.css'

function CanvasInternal() {
  const {
    canvasRef,
    prepareCanvas
  } = useCanvas();

  useEffect(() => {
    prepareCanvas();
  }, []);

  return (
    <div className="canvas-container">
      <canvas
        ref={canvasRef}
        className="canvas"
      />
    </div>
  );
}

export function Canvas() {



  return (
    <>
      <LatexRenderer />
      <div className="canvas-buttons-container">
        <ClearCanvasButton />
        <UndoButton />
        <RedoButton />
        <CopyToClipboardButton />
      </div>
      <CanvasInternal />
      <div style={{ position: "absolute", bottom: 0, right: 0, paddingRight: "1em", paddingBottom: "1me" }}>
        <SubmitAnswer />
      </div>
    </>
  );
}