'use client';

import React from 'react';

interface MoonPhaseProps {
  phase: number; // 0-100
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showLabel?: boolean;
  animated?: boolean;
}

const MoonPhase: React.FC<MoonPhaseProps> = ({ 
  phase, 
  size = 'md', 
  showLabel = false,
  animated = true 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32',
  };

  const getMoonPhaseInfo = () => {
    if (phase < 12.5) return { name: 'Nueva', emoji: '🌑' };
    if (phase < 25) return { name: 'Creciente', emoji: '🌒' };
    if (phase < 37.5) return { name: 'Cuarto Creciente', emoji: '🌓' };
    if (phase < 50) return { name: 'Gibosa Creciente', emoji: '🌔' };
    if (phase < 62.5) return { name: 'Luna Llena', emoji: '🌕' };
    if (phase < 75) return { name: 'Gibosa Menguante', emoji: '🌖' };
    if (phase < 87.5) return { name: 'Cuarto Menguante', emoji: '🌗' };
    return { name: 'Menguante', emoji: '🌘' };
  };

  const phaseInfo = getMoonPhaseInfo();

  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`relative ${sizeClasses[size]}`}>
        {/* Luna base */}
        <div 
          className={`absolute inset-0 rounded-full bg-gradient-to-br from-gray-200 via-gray-100 to-white shadow-lg ${
            animated ? 'animate-pulse' : ''
          }`}
          style={{
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.5), inset 0 0 20px rgba(0, 0, 0, 0.1)'
          }}
        />
        
        {/* Progreso de llenado */}
        <div 
          className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-200 via-yellow-100 to-white overflow-hidden"
          style={{
            clipPath: `inset(0 ${100 - phase}% 0 0)`,
            transition: 'clip-path 0.5s ease-out'
          }}
        >
          <div 
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #fff9c4, #fff59d, #fff176)',
              boxShadow: 'inset 0 0 30px rgba(255, 235, 59, 0.8)'
            }}
          />
        </div>

        {/* Estrellas brillantes alrededor */}
        {phase > 40 && (
          <>
            <div className="absolute -top-1 -right-1 text-yellow-300 text-xs animate-pulse">✨</div>
            <div className="absolute -bottom-1 -left-1 text-yellow-300 text-xs animate-pulse delay-75">✨</div>
          </>
        )}
      </div>

      {showLabel && (
        <div className="text-center">
          <div className="text-2xl mb-1">{phaseInfo.emoji}</div>
          <p className="text-sm font-medium text-gray-700">{phaseInfo.name}</p>
          <p className="text-xs text-gray-500">{Math.round(phase)}%</p>
        </div>
      )}
    </div>
  );
};

export default MoonPhase;
