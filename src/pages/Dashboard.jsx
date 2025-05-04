import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import DashboardHeader from '../components/DashboardHeader';
import ExpenseForm from '../components/ExpenseForm';
import TransactionList from '../components/TransactionList';
import ExpenseCharts from '../components/ExpenseCharts';

const Dashboard = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4 md:p-6">
        <DashboardHeader />
        
        <div className="mb-6">
          <ExpenseForm />
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="col-span-1">
            <TransactionList />
          </div>
          <div className="col-span-1">
            <ExpenseCharts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
