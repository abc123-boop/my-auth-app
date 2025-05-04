import { useAuth } from '../context/AuthContext';
import { useExpenses } from '../context/ExpenseContext';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DashboardHeader = () => {
  const { user, logout } = useAuth();
  const { calculateTotalExpenses } = useExpenses();
  
  const totalExpenses = calculateTotalExpenses();

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Welcome, {user?.name || 'User'}</h1>
          <p className="text-muted-foreground">
            Track and manage your expenses with ease
          </p>
        </div>
        <Button onClick={logout}>Logout</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Expenses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-accent">
              {formatCurrency(totalExpenses)}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Budget Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className={`text-2xl font-bold ${
              totalExpenses > 1000 ? 'text-accent' : 'text-secondary'
            }`}>
              {totalExpenses > 1000 ? 'Over Budget' : 'Within Budget'}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              This Month
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {formatCurrency(totalExpenses)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Account Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-primary">Active</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHeader;
