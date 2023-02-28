import Button from '@mui/material/Button'
import DeleteIcon from ''
function App() {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button startIcon={<DeleteIcon/>} variant="contained" color='secondary'>Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
}

export default App;
