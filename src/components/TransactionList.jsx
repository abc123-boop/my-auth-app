import { useState } from 'react';
import { useExpenses } from '../context/ExpenseContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { formatCurrency, formatDate } from '@/lib/utils';
import { Trash2 } from 'lucide-react';

const TransactionList = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { expenses, deleteExpense } = useExpenses();

  const sortedExpenses = [...expenses].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );

  const handleDelete = async (id) => {
    if (isDeleting) return;
    
    try {
      setIsDeleting(true);
      await deleteExpense(id);
    } catch (error) {
      console.error('Error deleting expense:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  if (expenses.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>No transactions found</CardDescription>
        </CardHeader>
        <CardContent className="text-center py-8 text-muted-foreground">
          Start adding expenses to see them here.
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Your recent expenses</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {sortedExpenses.map(expense => (
            <div 
              key={expense._id} 
              className="flex justify-between items-center p-3 rounded-md border border-border hover:bg-muted/50 transition-colors"
            >
              <div className="flex flex-col">
                <h3 className="font-medium">{expense.title}</h3>
                <span className="text-xs text-muted-foreground">
                  {expense.category} • {formatDate(expense.date)}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-medium text-accent">
                  {formatCurrency(expense.amount)}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(expense._id)}
                  disabled={isDeleting}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionList;
