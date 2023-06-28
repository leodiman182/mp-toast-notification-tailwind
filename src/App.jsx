import Button from './components/Button';
import { toast, Toaster, ToastBar } from 'react-hot-toast';

function App() {
  return (
    <main className="h-screen w-full flex items-center justify-center bg-slate-800 relative">
      <Button />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            color: '#E5E7EB',
            backgroundColor: '#111827',
            width: '330px',
          },
        }}
      >
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== 'loading' && (
                  <button
                    className="border-l-[1px] border-gray-400 p-[10px] pl-[22px] text-teal-500"
                    onClick={() => toast.dismiss(t.id)}
                  >
                    Close
                  </button>
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
    </main>
  );
}

export default App;
