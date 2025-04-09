'use client';
  
import React from 'react';

/**
 * AboutPage Component
 * (Fallback component due to generation failure)
 */
export default function AboutPage() {
  return (
    <div className="w-full py-12 px-4 bg-white" dir="ltr">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center" style={{color: '#D4A5A5'}}>
          משרד עורכי דין מוביל בישראל
        </h2>
        <p className="text-lg mb-8 text-center">
          חווית לקוח מושלמת בכל ביקור
        </p>
        <div className="text-center">
          <button 
            className="px-6 py-3 rounded-md text-white font-medium"
            style={{backgroundColor: '#4ECDC4'}}
          >
            קבע תור עכשיו
          </button>
        </div>
      </div>
    </div>
  );
}