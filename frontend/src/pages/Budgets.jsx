import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../components/Layout';
import { fetchBudgets, setBudget, deleteBudget } from '../features/budgets/budgetSlice';
import SEO from '../components/SEO';

export default function Budgets() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.budgets);
  const [showModal, setShowModal] = useState(false);
  const [newBudget, setNewBudget] = useState({ category: 'Food', limit: '' });

  useEffect(() => {
    dispatch(fetchBudgets());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setBudget({ ...newBudget, limit: Number(newBudget.limit) }));
    setShowModal(false);
    setNewBudget({ category: 'Food', limit: '' });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to remove this budget?')) {
      dispatch(deleteBudget(id));
    }
  };

  const categories = ['Food', 'Transport', 'Entertainment', 'Shopping', 'Health', 'Bills', 'Other'];

  return (
    <Layout>
      <SEO title="Budgets" description="Manage your monthly spending limits and track your progress." />
      <div className="max-w-6xl mx-auto h-full pb-10 space-y-8 animate-in fade-in duration-500">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-2">Monthly Budgets</h2>
            <p className="text-gray-500 text-sm">Set limits for categories and track your spending in real-time.</p>
          </div>
          <button 
            onClick={() => setShowModal(true)}
            className="bg-primary text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:bg-green-600 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center gap-2"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            Set New Budget
          </button>
        </div>

        {/* Budgets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((budget) => {
            const percent = Math.min((budget.spent / budget.limit) * 100, 100);
            const isNearLimit = percent > 80;
            const isOverLimit = percent >= 100;

            return (
              <div key={budget._id} className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => handleDelete(budget._id)} className="text-gray-300 hover:text-red-500 transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                  </button>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl ${isOverLimit ? 'bg-red-50 text-red-500' : isNearLimit ? 'bg-orange-50 text-orange-500' : 'bg-primary/5 text-primary'}`}>
                    {budget.category.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">{budget.category}</h4>
                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Monthly Limit</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-2xl font-black text-navy">₹{budget.spent.toLocaleString()}</p>
                      <p className="text-[10px] text-gray-500 font-medium">Spent of ₹{budget.limit.toLocaleString()}</p>
                    </div>
                    <div className={`text-sm font-bold ${isOverLimit ? 'text-red-500' : isNearLimit ? 'text-orange-500' : 'text-primary'}`}>
                      {percent.toFixed(0)}%
                    </div>
                  </div>

                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                    <div 
                      style={{ width: `${percent}%` }} 
                      className={`h-full transition-all duration-1000 ease-out rounded-full ${isOverLimit ? 'bg-red-500' : isNearLimit ? 'bg-orange-500' : 'bg-primary'}`}
                    />
                  </div>

                  {isOverLimit && (
                    <div className="flex items-center gap-2 text-red-500 text-[10px] font-bold animate-pulse">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                      BUDGET EXCEEDED
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          
          {items.length === 0 && !loading && (
            <div className="col-span-full py-20 text-center bg-gray-50/50 rounded-[40px] border-2 border-dashed border-gray-200">
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-4 text-gray-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              </div>
              <h4 className="text-gray-800 font-bold mb-1">No Budgets Set</h4>
              <p className="text-gray-400 text-sm max-w-xs mx-auto">Start by setting your first monthly spending limit to take control of your finances.</p>
            </div>
          )}
        </div>

        {/* Set Budget Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-navy/20 backdrop-blur-md" onClick={() => setShowModal(false)} />
            <div className="relative bg-white rounded-[40px] p-8 md:p-12 w-full max-w-md shadow-2xl animate-in zoom-in-95 duration-200">
              <h3 className="text-2xl font-black text-navy mb-8 text-center">Set Budget Limit</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2 ml-1">Category</label>
                  <select 
                    value={newBudget.category}
                    onChange={(e) => setNewBudget({...newBudget, category: e.target.value})}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-navy appearance-none"
                  >
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2 ml-1">Monthly Limit (₹)</label>
                  <input 
                    type="number"
                    value={newBudget.limit}
                    onChange={(e) => setNewBudget({...newBudget, limit: e.target.value})}
                    placeholder="e.g. 5000"
                    required
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-navy"
                  />
                </div>
                <button type="submit" className="w-full py-5 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20 hover:bg-green-600 transition-all transform hover:-translate-y-1 active:scale-95">
                  Save Budget
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
