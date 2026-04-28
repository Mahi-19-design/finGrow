import React from 'react';
import Layout from '../components/Layout';

export default function Insights() {
  return (
    <Layout>
      <div className="flex flex-col gap-6 max-w-6xl mx-auto pb-10">
        
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Financial Insights</h2>
            <p className="text-gray-500 text-sm">We've analyzed your spending patterns from the last 30 days to help you reach your goals faster.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
              Last 30 Days
            </button>
            <button className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-800 transition-colors shadow-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              Report
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-2">
          
          {/* Left Column (Trends & Breakdown) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            {/* Spending Trends */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Spending Trends</h3>
                  <p className="text-xs text-gray-500">Comparison of current vs previous period</p>
                </div>
                <div className="flex items-center gap-4 text-xs font-medium">
                  <div className="flex items-center gap-1.5 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                    Current
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    Previous
                  </div>
                </div>
              </div>
              
              {/* Mock Chart Area */}
              <div className="h-48 w-full mt-4 relative">
                <div className="absolute inset-0 flex items-end">
                   {/* Grid Lines */}
                   <div className="w-full h-full flex flex-col justify-between text-[10px] text-gray-400 font-medium">
                      <div className="border-b border-gray-100 w-full flex-1"></div>
                      <div className="border-b border-gray-100 w-full flex-1"></div>
                      <div className="border-b border-gray-100 w-full flex-1"></div>
                      <div className="border-b border-gray-100 w-full flex-1"></div>
                      <div className="border-b border-gray-200 w-full flex-1"></div>
                   </div>
                </div>
                {/* Chart Line (SVG curve) */}
                <svg className="absolute inset-0 h-full w-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                   <path d="M0,80 Q20,60 40,75 T80,20 T100,50" fill="none" stroke="#16a34a" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                   <path d="M0,80 Q20,60 40,75 T80,20 T100,50 L100,100 L0,100 Z" fill="rgba(22, 163, 74, 0.1)" stroke="none" />
                </svg>
                {/* X Axis labels */}
                <div className="absolute bottom-[-24px] left-0 w-full flex justify-between text-[10px] text-gray-400 font-medium px-4">
                  <span>Week 1</span>
                  <span>Week 2</span>
                  <span>Week 3</span>
                  <span>Week 4</span>
                </div>
              </div>
            </div>

            {/* Category Breakdown */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-6">Category Breakdown</h3>
              <div className="space-y-5">
                {[
                  { name: 'Housing & Utilities', amount: '$2,100', width: '80%', color: 'bg-green-600' },
                  { name: 'Groceries & Dining', amount: '$850', width: '45%', color: 'bg-blue-500' },
                  { name: 'Transportation', amount: '$420', width: '25%', color: 'bg-orange-500' },
                  { name: 'Entertainment', amount: '$310', width: '15%', color: 'bg-purple-500' }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs font-semibold mb-2">
                      <span className="text-gray-700">{item.name}</span>
                      <span className="text-gray-900">{item.amount}</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                      <div className={`h-full ${item.color} rounded-full`} style={{ width: item.width }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>

          {/* Right Column (Cards & Suggestions) */}
          <div className="flex flex-col gap-6">
            
            {/* Top Cards Row */}
            <div className="grid grid-cols-1 gap-6">
              {/* Savings Target */}
              <div className="bg-green-700 text-white p-6 rounded-2xl shadow-sm relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center mb-6 backdrop-blur-sm">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                  </div>
                  <div className="text-sm text-green-100 mb-1">Total Savings Target</div>
                  <div className="text-3xl font-bold mb-6">$12,450.00</div>
                  <div className="w-full bg-black/20 rounded-full h-2 mb-2 overflow-hidden">
                    <div className="bg-white h-full rounded-full" style={{ width: '72%' }}></div>
                  </div>
                  <div className="text-xs text-green-100 font-medium">72% of your goal reached</div>
                </div>
                <div className="absolute right-[-20px] bottom-[-20px] opacity-10 pointer-events-none transform scale-[2]">
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                </div>
              </div>

              {/* Efficiency Score */}
              <div className="bg-[#2d88ff] text-white p-6 rounded-2xl shadow-sm relative overflow-hidden flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                  </div>
                  <span className="bg-white/20 px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm">New Achievement</span>
                </div>
                <div className="relative z-10">
                  <div className="text-sm text-blue-100 mb-1">Efficiency Score</div>
                  <div className="text-3xl font-bold">84/100</div>
                </div>
              </div>
            </div>

            {/* Smart Suggestions */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Smart Suggestions</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Spending Alert", desc: "You spent 20% more on food this month. Consider home-cooking next week.", icon: "cutlery", color: "red" },
                  { title: "Savings On Track", desc: "Great job! You're on track for your savings goal. You could reach it 12 days earlier.", icon: "check", color: "green" },
                  { title: "Subscription Check", desc: "We found two duplicate streaming services. Canceling one could save you $156 per year.", icon: "tv", color: "blue" },
                  { title: "Investment Tip", desc: "You have $2,400 in idle cash. Transferring it to your index fund could earn ~7% annually.", icon: "chart", color: "green-dark" }
                ].map((s, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col hover:shadow-md transition-shadow cursor-pointer">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-3 flex-shrink-0 ${
                      s.color === 'red' ? 'bg-red-50 text-red-500' :
                      s.color === 'blue' ? 'bg-blue-50 text-blue-500' :
                      s.color === 'green' ? 'bg-green-50 text-green-500' :
                      'bg-emerald-50 text-emerald-600'
                    }`}>
                      {s.icon === 'cutlery' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>}
                      {s.icon === 'check' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>}
                      {s.icon === 'tv' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="15" x="2" y="7" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>}
                      {s.icon === 'chart' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>}
                    </div>
                    <h4 className="text-[11px] font-bold text-gray-900 mb-1">{s.title}</h4>
                    <p className="text-[10px] text-gray-500 leading-relaxed leading-snug">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* AI Predictor Banner */}
        <div className="w-full bg-navy rounded-2xl p-8 relative overflow-hidden shadow-lg border border-gray-800 mt-2">
           <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#2d88ff 1px, transparent 1px), linear-gradient(90deg, #2d88ff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
           <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-30 flex items-end justify-center px-4">
              <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="none">
                 <path d="M0,100 L10,80 L20,90 L30,60 L40,70 L50,40 L60,50 L70,20 L80,30 L90,10 L100,20 L110,0" fill="none" stroke="#2d88ff" strokeWidth="2" />
                 {/* Chart bars */}
                 <rect x="10" y="80" width="5" height="20" fill="#2d88ff" />
                 <rect x="30" y="60" width="5" height="40" fill="#2d88ff" />
                 <rect x="50" y="40" width="5" height="60" fill="#2d88ff" />
                 <rect x="70" y="20" width="5" height="80" fill="#2d88ff" />
              </svg>
           </div>
           
           <div className="relative z-10 max-w-sm">
             <div className="text-xs font-semibold text-blue-300 mb-2">Visualize your future with FinGrow AI</div>
             <p className="text-sm text-gray-300 mb-6 leading-relaxed">
               Our new predictive engine shows you exactly where you'll be in 5 years based on today's habits.
             </p>
             <button className="bg-white text-navy font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-gray-100 transition-colors shadow-sm">
               Try Predictor
             </button>
           </div>
        </div>

        {/* Anomalous Transactions */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6 border-b border-gray-50 pb-4">
            <h3 className="font-bold text-gray-900 text-lg">Anomalous Transactions</h3>
            <a href="#" className="text-sm font-semibold text-green-700 hover:text-green-800">View All</a>
          </div>
          <div className="space-y-4">
            {[
              { name: 'Amazon Marketplace', date: 'Oct 24, 2023', reason: 'Higher than usual', amount: '-$245.80', icon: 'bag' },
              { name: 'City Power & Light', date: 'Oct 22, 2023', reason: 'Seasonal peak', amount: '-$182.40', icon: 'zap' },
              { name: 'Cash Withdrawal', date: 'Oct 20, 2023', reason: 'ATM Outside Area', amount: '-$100.00', icon: 'money' }
            ].map((t, i) => (
              <div key={i} className="flex justify-between items-center group cursor-pointer hover:bg-gray-50 p-2 rounded-xl transition-colors -mx-2">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                     {t.icon === 'bag' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>}
                     {t.icon === 'zap' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>}
                     {t.icon === 'money' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-900 group-hover:text-green-700 transition-colors">{t.name}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{t.date} • {t.reason}</div>
                  </div>
                </div>
                <div className="font-bold text-sm text-gray-900">{t.amount}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Layout>
  );
}
