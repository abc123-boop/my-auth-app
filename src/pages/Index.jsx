import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Redirect handlers
  const goToLogin = () => navigate('/login');
  const goToRegister = () => navigate('/register');
  const goToDashboard = () => navigate('/dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Take Control of Your <span className="text-primary">Finances</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Track your expenses, visualize your spending patterns, and make better
                financial decisions with our powerful budget tracking tool.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {user ? (
                  <Button size="lg" onClick={goToDashboard}>
                    Go to Dashboard
                  </Button>
                ) : (
                  <>
                    <Button size="lg" onClick={goToRegister}>
                      Get Started - It's Free
                    </Button>
                    <Button variant="outline" size="lg" onClick={goToLogin}>
                      Login
                    </Button>
                  </>
                )}
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-primary/10 p-8 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h3 className="font-medium mb-1">Monthly Summary</h3>
                    <p className="text-2xl font-bold">$1,245.00</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h3 className="font-medium mb-1">Top Category</h3>
                    <p className="text-2xl font-bold">Groceries</p>
                  </div>
                  <div className="col-span-2 bg-white p-4 rounded shadow-sm">
                    <h3 className="font-medium mb-1">Recent Transaction</h3>
                    <p className="text-lg">Coffee Shop - <span className="font-medium text-accent">$4.50</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Easy Expense Tracking</h3>
            <p className="text-gray-600">
              Quickly add and categorize expenses with our intuitive interface. Stay on top of your spending in real-time.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Visual Reports</h3>
            <p className="text-gray-600">
              See where your money goes with beautiful charts and graphs. Identify spending patterns and make informed decisions.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Secure & Private</h3>
            <p className="text-gray-600">
              Your financial data is protected with industry-standard security. We use JWT tokens and secure encryption for your peace of mind.
            </p>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to take control of your finances?
          </h2>
          <div className="flex justify-center">
            {user ? (
              <Button size="lg" variant="secondary" onClick={goToDashboard}>
                Go to Dashboard
              </Button>
            ) : (
              <Button size="lg" variant="secondary" onClick={goToRegister}>
                Create Free Account
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
