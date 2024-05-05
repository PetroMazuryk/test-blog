import { Routes, Route, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Container from '@mui/material/Container';
import { Header } from './components/Header/Header';

// const Home = lazy(() => import('./pages/Home'));
// const FullPost = lazy(() => import('./pages/FullPost'));
// const AddPost = lazy(() => import('./pages/AddPost/AddPost'));
// const Login = lazy(() => import('./pages/Login/Login'));
// const Registration = lazy(() => import('./pages/Registration/Registration'));

function App() {
  return (
    <>
      <Header />

      <Container maxWidth="lg">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/posts/:id" element={<div>FullPost</div>} />
            <Route path="/add-post" element={<div>AddPost</div>} />
            <Route path="/login" element={<div>Login</div>} />
            <Route path="/register" element={<div>Registration</div>} />
          </Routes>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}

export default App;
