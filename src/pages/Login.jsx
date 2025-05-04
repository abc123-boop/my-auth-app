import LoginForm from '../components/LoginForm';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { user, loading } = useAuth();

  // If still loading auth state, show loading
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  // If user is already logged in, redirect to dashboard
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50">
      <div className="w-full max-w-screen-lg grid md:grid-cols-2 gap-8">
        <div className="hidden md:flex flex-col justify-center p-8 bg-primary rounded-lg">
          <h1 className="text-3xl font-bold text-white mb-4">Budget Tracker</h1>
          <p className="text-primary-foreground opacity-90 mb-8">
            Take control of your finances with our simple yet powerful expense tracking solution.
          </p>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                <span className="text-white">✓</span>
              </div>
              <p className="text-white">Track expenses easily and efficiently</p>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                <span className="text-white">✓</span>
              </div>
              <p className="text-white">Visualize your spending patterns</p>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                <span className="text-white">✓</span>
              </div>
              <p className="text-white">Make better financial decisions</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
