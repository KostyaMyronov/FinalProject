import { NavMenu } from './components/Header/NavMenu';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { useApp } from './components/store/useApp';
import { theme } from './data/theme';

function App() {
  const isDark = useApp((state) => state.isDark);
  return (
    <div className={isDark ? theme.dark : theme.light}>
      <NavMenu />
      <div className='grid justify-center'>
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
