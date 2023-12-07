import { useCanvas } from "./CanvasContext";
import { MathpixLoader, MathpixMarkdown } from "mathpix-markdown-it";
import { IconButton } from "@mui/material";
import {
  DeleteOutline,
  UndoOutlined,
  RedoOutlined,
  ContentCopyOutlined,
  Send,
} from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";
import "./canvas.css";

export const ClearCanvasButton = () => {
  const { clearCanvas, strokes } = useCanvas();
  const handleClick = () => {
    clearCanvas(false);
  };
  return (
    <Tooltip title="Clear Drawing">
      <IconButton
        onClick={handleClick}
        disabled={strokes.length === 0}
        style={{ color: "#FFA500" }}

      >
        <div className="canvas-buttons">
          <DeleteOutline fontSize="inherit" />
        </div>
      </IconButton>
    </Tooltip>
  );
};

export const LatexRenderer = () => {
  const { latex } = useCanvas();
  return (
    <div
      className="latex-renderer-container"
    >

      <MathpixLoader>
        <MathpixMarkdown text={latex.code} />
      </MathpixLoader>
    </div>
  );
};

export const UndoButton = () => {
  const { undoHistory, undo } = useCanvas();
  const handleClick = () => {
    undo();
  };

  return (
    <Tooltip title="Undo">
      <IconButton
        onClick={handleClick}
        disabled={undoHistory.length === 0}
        style={{ color: "#FFA500" }}

      >
        <div className="canvas-buttons">
          <UndoOutlined fontSize="inherit" />
        </div>
      </IconButton>
    </Tooltip>
  );
};

export const RedoButton = () => {
  const { redoHistory, redo } = useCanvas();
  const handleClick = () => {
    redo();
  };

  return (
    <Tooltip title="Redo">
      <IconButton
        onClick={handleClick}
        disabled={redoHistory.length === 0}
        style={{ color: "#FFA500" }}

      >
        <div className="canvas-buttons">
          <RedoOutlined fontSize="inherit" />
        </div>
      </IconButton>
    </Tooltip>
  );
};


export const SubmitAnswer = () => {
  const handleClick = () => {
    console.log("submitting");
  };

  return (
    <Tooltip title="Submit Answer">
      <IconButton
        onClick={handleClick}
        style={{ backgroundColor: "#fff", borderRadius: "4px", border: "3px solid #FFA500" }}
        className="submit-button"
      >
        <div
          className="canvas-buttons"
          style={{ display: "flex", alignItems: "center", padding: "5px" }}
        >
          <span
            style={{ marginRight: "5px", fontWeight: "bold", color: "#FFA500", fontSize: "1.2rem" }}
          >
            SUBMIT ANSWER
          </span>
          <Send style={{ color: "#FFA500" }} fontSize="inherit" />
        </div>
      </IconButton>
    </Tooltip>
  );
};

export const loading = () =>{
  return(
   <> 
    <div>
    <p>loading</p>
    </div>
  </> 
  )
}