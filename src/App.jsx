import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { ThemeContextProvider } from './contexts/ThemeContext';
import MainLayout from './layout/MainLayout';
import ScrollToTop from './components/layout/ScrollToTop';

const HomePage = lazy(() => import('./pages/HomePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const AcademicSearchPage = lazy(() => import('./pages/AcademicSearchPage'));
const LibraryPage = lazy(() => import('./pages/LibraryPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ReadyTransactions = lazy(() => import('./pages/ReadyTransactions'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

const LoadingSpinner = () => (
  <div className="loading">
    <div className="skeleton" style={{width:200,height:20,borderRadius:4,marginBottom:10}}></div>
    <div>جاري التحميل...</div>
  </div>
);

function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="academic-search" element={<AcademicSearchPage />} />
              <Route path="library" element={<LibraryPage />} />
              <Route path="ready-transactions" element={<ReadyTransactions />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeContextProvider>
  );
}

export default App;