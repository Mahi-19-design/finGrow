import React from 'react';
import Layout from '../components/Layout';

export default function Investments() {
  return (
    <Layout>
      <div className="flex flex-col gap-10 max-w-5xl mx-auto h-full pb-10">
        
        {/* Header */}
        <div>
          <h2 className="text-xl font-medium text-gray-800 mb-2">Invest with Confidence</h2>
          <p className="text-gray-500 max-w-2xl text-sm leading-relaxed">
            We've simplified complex markets into clear, stress-free paths. Choose the pace that feels right for your future.
          </p>
        </div>

        {/* Investment Options Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Low Risk */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow relative">
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <span className="text-xs font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full">Low Risk</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Safe Growth</h3>
            <p className="text-xs text-gray-500 leading-relaxed flex-1">
              Keep your money safe while earning more than a regular savings account. Great for short-term goals.
            </p>
            <div className="my-6">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-green-700">2-4%</span>
                <span className="text-[10px] text-gray-400 font-semibold">Est. Return</span>
              </div>
            </div>
            <button className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-xl transition-colors text-sm shadow-sm">
              Start Investing
            </button>
          </div>

          {/* Medium Risk */}
          <div className="bg-white p-6 rounded-2xl shadow-xl shadow-blue-50 border-2 border-blue-100 flex flex-col relative z-10 scale-105">
            <div className="absolute -top-3 right-6 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
              POPULAR
            </div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18"/><rect width="4" height="4" x="4" y="10" rx="1"/><rect width="4" height="4" x="16" y="10" rx="1"/><path d="M6 10V6h12v4"/></svg>
              </div>
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Medium Risk</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Balanced Fund</h3>
            <p className="text-xs text-gray-500 leading-relaxed flex-1">
              A mix of stocks and bonds designed to grow your wealth steadily without too much of a rollercoaster ride.
            </p>
            <div className="my-6">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-blue-600">5-8%</span>
                <span className="text-[10px] text-gray-400 font-semibold">Est. Return</span>
              </div>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors text-sm shadow-sm">
              Start Investing
            </button>
          </div>

          {/* High Risk */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow relative">
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
              </div>
              <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">High Risk</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Aggressive Growth</h3>
            <p className="text-xs text-gray-500 leading-relaxed flex-1">
              Focus on maximum potential returns by investing in fast-growing companies. Best for long-term horizons.
            </p>
            <div className="my-6">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-green-800">10-14%</span>
                <span className="text-[10px] text-gray-400 font-semibold">Est. Return</span>
              </div>
            </div>
            <button className="w-full bg-[#3d6e15] hover:bg-[#2d520f] text-white font-semibold py-3 rounded-xl transition-colors text-sm shadow-sm">
              Start Investing
            </button>
          </div>
        </div>

        {/* Guides Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-700">Investing made simple</h3>
            <a href="#" className="text-xs font-semibold text-green-700 hover:text-green-800 flex items-center gap-1">
              View all guides <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-xl border border-gray-100 flex gap-4 items-start shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
              <div className="w-8 h-8 rounded-full bg-green-50 text-green-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-gray-900 mb-1">Think Long Term</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed">The best results come from staying invested for years, not days or weeks.</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-100 flex gap-4 items-start shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 3 3 9-3 9 19-9Z"/><path d="M6 12h16"/></svg>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-gray-900 mb-1">Compound Growth</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed">Your interest earns interest. Starting early is your biggest financial advantage.</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-100 flex gap-4 items-start shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
              <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2v10l5.5 5.5"/></svg>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-gray-900 mb-1">Diversify Always</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed">Don't put all your eggs in one basket. Spreading risk keeps your portfolio stable.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quiz Banner */}
        <div className="bg-green-50 rounded-2xl p-8 relative overflow-hidden shadow-inner border border-green-100/50 flex items-center">
          <div className="relative z-10 max-w-sm">
            <h3 className="text-lg font-medium text-green-900 mb-4">Not sure where to start?</h3>
            <p className="text-sm text-green-800 leading-relaxed mb-8">
              Take our 2-minute "Investor Style" quiz to get a personalized recommendation based on your goals.
            </p>
            <button className="bg-[#0b5c2a] hover:bg-green-900 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-md transition-colors">
              Take the Quiz
            </button>
          </div>
          
          {/* Abstract Image representing the chart from the design */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-navy rounded-full mr-8 overflow-hidden shadow-2xl flex items-center justify-center border-4 border-navy/20">
            <div className="w-full h-full opacity-60 bg-gradient-to-tr from-cyan-600 via-blue-800 to-navy relative flex items-end justify-center p-8">
               {/* Abstract chart bars */}
               <div className="flex items-end gap-1 w-full h-3/4 opacity-50">
                  <div className="w-full bg-cyan-400 rounded-t h-1/6"></div>
                  <div className="w-full bg-cyan-400 rounded-t h-2/6"></div>
                  <div className="w-full bg-cyan-400 rounded-t h-3/6"></div>
                  <div className="w-full bg-cyan-400 rounded-t h-2/6"></div>
                  <div className="w-full bg-cyan-400 rounded-t h-4/6"></div>
                  <div className="w-full bg-cyan-400 rounded-t h-5/6"></div>
                  <div className="w-full bg-cyan-400 rounded-t h-4/6"></div>
                  <div className="w-full bg-cyan-400 rounded-t h-full"></div>
               </div>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}
