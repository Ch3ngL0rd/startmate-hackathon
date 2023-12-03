import { useCanvas } from './CanvasContext'
import { MathpixLoader, MathpixMarkdown } from 'mathpix-markdown-it'
import { IconButton } from '@mui/material'
import { DeleteOutline, UndoOutlined, RedoOutlined, ContentCopyOutlined, Send } from '@mui/icons-material'
import Tooltip from '@mui/material/Tooltip';
import './canvas.css'

export const ClearCanvasButton = () => {
  const { clearCanvas, strokes } = useCanvas()
  const handleClick = () => {
    clearCanvas(false);
  }
  return (
    <Tooltip title="Clear Drawing">
      <IconButton onClick={handleClick} disabled={strokes.length === 0} color="primary">
        <div className='canvas-buttons'>
          <DeleteOutline fontSize="inherit" />
        </div>
      </IconButton>
    </Tooltip>
  )
}

export const LatexRenderer = () => {
  const { latex } = useCanvas();
  return (
    <div className='latex-renderer-container'>
      <MathpixLoader >
        <MathpixMarkdown text={latex.code} />
      </MathpixLoader>
    </div>
  )
}

export const UndoButton = () => {
  const { undoHistory, undo } = useCanvas();
  const handleClick = () => {
    undo();
  }

  return (
    <Tooltip title="Undo">
      <IconButton onClick={handleClick} disabled={undoHistory.length === 0} color="primary">
        <div className='canvas-buttons'>
          <UndoOutlined fontSize="inherit" />
        </div>
      </IconButton>
    </Tooltip>
  )
}

export const RedoButton = () => {
  const { redoHistory, redo } = useCanvas();
  const handleClick = () => {
    redo();
  }

  return (
    <Tooltip title="Redo">
      <IconButton onClick={handleClick} disabled={redoHistory.length === 0} color="primary">
        <div className='canvas-buttons'>
          <RedoOutlined fontSize="inherit" />
        </div>
      </IconButton>
    </Tooltip>
  )
}

export const CopyToClipboardButton = () => {
  const { latex } = useCanvas();
  const handleClick = () => {
    navigator.clipboard.writeText(latex.code);
  }

  return (
    <Tooltip title="Copy LaTeX to Clipboard">
      <IconButton onClick={handleClick} disabled={latex.isPlaceholder} color="primary">
        <div className='canvas-buttons'>
          <ContentCopyOutlined fontSize="inherit" />
        </div>
      </IconButton>
    </Tooltip>
  )
}

export const SubmitAnswer = () => {
  const handleClick = () => {
    alert('Submit Answer');
  }

    return (
    <Tooltip title="Submit Answer">
      <IconButton onClick={handleClick} 
        style={{ backgroundColor: '#E3F2FD', borderRadius: '4px' }} 
        className="submit-button">
        <div className='canvas-buttons' 
             style={{ display: 'flex', alignItems: 'center', padding: '5px' }}>
          <span style={{ marginRight: '5px', fontWeight: 'bold', color: '#1976D2' }}>SUBMIT ANSWER</span>
          <Send style={{ color: '#1976D2' }} fontSize="inherit" />
        </div>
      </IconButton>
    </Tooltip>
  )

}