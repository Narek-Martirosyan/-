import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyRoutes from './MyRoutes';
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';

function App() {

  return (
    <div className="App">
      <CustomCursor
        targets={['.link', '.your-css-selector']}
        customClass='custom-cursor'
        dimensions={50}
        fill='#FFF'
        smoothness={{
          movement: 0.2,
          scale: 0.1,
          opacity: 0.2,
        }}
        targetOpacity={0.5}
      />
      <MyRoutes />
    </div>
  );
}

export default App;
