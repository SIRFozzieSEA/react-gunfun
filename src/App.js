import NavDefault from './NavDefault';
import MainDefault from './MainDefault';

function App() {
  return (
	<div className='App' class='app-container'>
		<div className='Nav' class='nav-frame'>
			<NavDefault />
		</div>
		<div className='Main' class='main-frame'>
			<MainDefault />
		</div>
	</div>
  );
}

export default App;
