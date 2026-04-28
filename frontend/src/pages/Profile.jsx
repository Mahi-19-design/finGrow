import React from 'react';
import Layout from '../components/Layout';

export default function Profile() {
  return (
    <Layout>
      <div className="flex flex-col gap-6 max-w-4xl mx-auto pb-20">
        
        {/* Header */}
        <div className="mb-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-1 tracking-tight">Profile & Settings</h2>
          <p className="text-gray-500 text-sm max-w-2xl">
            Manage your personal information, financial preferences, and account security in one place.
          </p>
        </div>

        {/* Personal Info Card */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8">
          
          {/* Avatar Section */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-sm">
                <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center shadow-sm hover:bg-green-800 transition-colors border-2 border-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <div className="flex-1 flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Full Name</label>
                <input 
                  type="text" 
                  defaultValue="Alex Harrison"
                  className="block w-full px-4 py-2.5 bg-gray-50 border border-transparent rounded-xl text-gray-900 focus:ring-2 focus:ring-green-600 focus:bg-white transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email Address</label>
                <input 
                  type="email" 
                  defaultValue="alex.harrison@email.com"
                  className="block w-full px-4 py-2.5 bg-gray-50 border border-transparent rounded-xl text-gray-900 focus:ring-2 focus:ring-green-600 focus:bg-white transition-colors text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Bio (Optional)</label>
              <textarea 
                rows="3" 
                defaultValue="Saving for a new home and exploring sustainable investment portfolios."
                className="block w-full px-4 py-2.5 bg-gray-50 border border-transparent rounded-xl text-gray-900 focus:ring-2 focus:ring-green-600 focus:bg-white transition-colors text-sm resize-none"
              ></textarea>
            </div>
          </div>
        </div>

        {/* App Preferences Card */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-base font-bold text-gray-900 flex items-center gap-2 mb-6">
            <svg width="18" height="18" className="text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            App Preferences
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Language</label>
              <select className="block w-full px-4 py-2.5 bg-gray-50 border border-transparent rounded-xl text-gray-900 text-sm focus:ring-2 focus:ring-green-600 focus:bg-white transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNhMGEwYTAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSIvPjwvc3ZnPg==')] bg-no-repeat bg-[position:calc(100%-1rem)_center] bg-[length:1.2em_1.2em]">
                <option value="en-US">English (US)</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Base Currency</label>
              <select className="block w-full px-4 py-2.5 bg-gray-50 border border-transparent rounded-xl text-gray-900 text-sm focus:ring-2 focus:ring-green-600 focus:bg-white transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNhMGEwYTAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSIvPjwvc3ZnPg==')] bg-no-repeat bg-[position:calc(100%-1rem)_center] bg-[length:1.2em_1.2em]">
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Theme Appearance</label>
              <div className="flex items-center bg-gray-50 rounded-xl p-1">
                <button className="flex-1 flex items-center justify-center gap-2 py-1.5 px-3 bg-white shadow-sm rounded-lg text-sm font-medium text-green-700">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
                  Light
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-1.5 px-3 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                  Dark
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Notification Controls Card */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-base font-bold text-gray-900 flex items-center gap-2 mb-6">
            <svg width="18" height="18" className="text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
            Notification Controls
          </h3>
          <div className="space-y-6">
            {/* Toggle 1 */}
            <div className="flex items-center justify-between pb-6 border-b border-gray-50">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-0.5">Email Alerts</h4>
                <p className="text-xs text-gray-500">Weekly summaries and unusual activity alerts</p>
              </div>
              <div className="w-11 h-6 bg-green-700 rounded-full flex items-center px-0.5 cursor-pointer shadow-inner">
                <div className="w-5 h-5 bg-white rounded-full shadow-sm transform translate-x-5 transition-transform"></div>
              </div>
            </div>
            {/* Toggle 2 */}
            <div className="flex items-center justify-between pb-6 border-b border-gray-50">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-0.5">Push Notifications</h4>
                <p className="text-xs text-gray-500">Instant alerts for transactions and goals</p>
              </div>
              <div className="w-11 h-6 bg-green-700 rounded-full flex items-center px-0.5 cursor-pointer shadow-inner">
                <div className="w-5 h-5 bg-white rounded-full shadow-sm transform translate-x-5 transition-transform"></div>
              </div>
            </div>
            {/* Toggle 3 */}
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-0.5">Investment Insights</h4>
                <p className="text-xs text-gray-500">Market updates and personalized portfolio tips</p>
              </div>
              <div className="w-11 h-6 bg-gray-200 rounded-full flex items-center px-0.5 cursor-pointer">
                <div className="w-5 h-5 bg-white rounded-full shadow-sm transform translate-x-0 transition-transform"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-6 pt-2">
          <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">Discard Changes</a>
          <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-xl transition-colors text-sm shadow-sm">
            Save Preferences
          </button>
        </div>

      </div>
    </Layout>
  );
}
