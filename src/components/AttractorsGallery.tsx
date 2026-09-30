import React, { useState } from 'react';
import { GEOMETRIC_ATTRACTORS } from '../data/evolutionData';
import { GeometricAttractor } from '../types/evolution';
import { Eye, Wind, Droplets, Mountain, Gauge, Scissors, Sparkles, Orbit } from 'lucide-react';

export const AttractorsGallery: React.FC = () => {
  const [selectedAttractorId, setSelectedAttractorId] = useState<string>('water');

  const selectedAttractor = GEOMETRIC_ATTRACTORS.find(a => a.id === selectedAttractorId)!;

  const getAttractorIcon = (id: string) => {
    switch (id) {
      case 'water': return <Droplets className="w-4 h-4 text-cyan-500" />;
      case 'light': return <Eye className="w-4 h-4 text-amber-500" />;
      case 'sky': return <Wind className="w-4 h-4 text-blue-500" />;
      case 'soil': return <Mountain className="w-4 h-4 text-stone-500" />;
      case 'grassland': return <Gauge className="w-4 h-4 text-emerald-500" />;
      case 'predation': return <Scissors className="w-4 h-4 text-rose-500" />;
      default: return <Orbit className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Intro Banner */}
      <div className="bg-white border border-slate-200 rounded-lg p-6">
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
            <span>第4章の物理数理解析</span>
            <span>·</span>
            <span>幾何学的アトラクター</span>
            <span>·</span>
            <span>必然的同様進化</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            物理法則が要請する6大幾何学的アトラクター
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            形態はサイコロの偶然によって決まるのではない。流体力学、幾何光学、空気力学、破壊力学などの物理法則が、生物の形態空間（Morphospace）に「唯一の幾何学的最適解」を彫り込んでいます。
          </p>
        </div>

        {/* 6 Attractor Selectors */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mt-6">
          {GEOMETRIC_ATTRACTORS.map((attractor) => {
            const isSelected = attractor.id === selectedAttractorId;
            return (
              <button
                key={attractor.id}
                onClick={() => setSelectedAttractorId(attractor.id)}
                className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                    : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  {getAttractorIcon(attractor.id)}
                  <span className="text-xs font-bold">{attractor.domain.split('の')[0]}</span>
                </div>
                <div className={`text-[10px] font-mono truncate ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                  {attractor.domainEn.split(' ')[0]}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Attractor Details */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold text-cyan-700">
                {selectedAttractor.domainEn}
              </span>
              <span className="text-slate-300">/</span>
              <span className="text-xs text-slate-500 font-mono">
                支配法則: {selectedAttractor.governingLaw}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">
              {selectedAttractor.domain}における必然解
            </h3>
          </div>

          <div className="px-3 py-1.5 bg-slate-900 text-white rounded-md text-xs font-mono">
            {selectedAttractor.governingLaw}
          </div>
        </div>

        {/* Physics Core Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Challenge & Inevitable Attractor */}
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
              <span className="text-xs font-semibold text-slate-500 block mb-1">
                克服すべき物理的課題（Physical Challenge）
              </span>
              <p className="text-xs text-slate-800 leading-relaxed font-medium">
                {selectedAttractor.physicalChallenge}
              </p>
            </div>

            <div className="p-4 bg-cyan-50/60 border border-cyan-200 rounded-lg">
              <span className="text-xs font-semibold text-cyan-900 block mb-1">
                物理法則が導く唯一の幾何学的解（Inevitably Emergent Attractor）
              </span>
              <p className="text-xs text-slate-900 leading-relaxed font-semibold">
                {selectedAttractor.inevitableAttractor}
              </p>
            </div>

            <div className="p-4 bg-slate-900 text-white rounded-lg">
              <span className="text-[11px] font-mono text-cyan-400 block font-semibold mb-1">
                生体力学的洞察（Biomechanical Insight）
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedAttractor.biomechanicalInsight}
              </p>
            </div>
          </div>

          {/* Governing Formula & Physics Explanation */}
          <div className="space-y-4 flex flex-col justify-between">
            <div className="p-5 bg-slate-950 text-white rounded-lg border border-slate-800 space-y-3 font-mono">
              <div className="text-xs text-slate-400 flex items-center justify-between">
                <span>GOVERNING PHYSICAL FORMULA</span>
                <span className="text-cyan-400 text-[11px]">幾何学境界条件</span>
              </div>
              
              {/* Formula Display Box */}
              <div className="p-3 bg-slate-900 rounded border border-slate-800 text-center">
                <span className="text-lg md:text-xl font-bold tracking-wider text-cyan-300">
                  {selectedAttractor.formula}
                </span>
              </div>

              <div className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-slate-800">
                <span className="text-cyan-400 font-semibold block mb-0.5">数理的意味：</span>
                {selectedAttractor.formulaMeaning}
              </div>
            </div>

            <div className="p-4 border border-slate-200 rounded-lg bg-slate-50/50">
              <span className="text-xs font-semibold text-slate-700 block mb-1.5">
                Stasis（停滞）との連動メカニズム
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                この数理条件を満たした形態は、適応度景観（Fitness Landscape）における「グローバルな極小エネルギー点」を形成します。ここから形態を崩す変異は全て流体抵抗増やエネルギー浪費となり、定常的な自然淘汰によって即座に排除されます。これが何百万年も形が変わらない理由です。
              </p>
            </div>
          </div>
        </div>

        {/* Cross-Phyla Convergent Taxa Showcase */}
        <div className="pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-bold text-slate-900">
              全く異なる門・系統から同じ幾何学へ収束した生物群（実証データ）
            </h4>
            <span className="text-xs text-slate-500 font-mono">
              別起源 ➔ 同一アトラクター
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {selectedAttractor.convergentTaxa.map((taxon, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-white border border-slate-200 rounded-lg hover:border-slate-300 transition-colors space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">{taxon.taxon}</span>
                  <span className="text-[10px] text-slate-500 font-mono">{idx + 1}</span>
                </div>
                <div className="text-[11px] font-mono text-cyan-700">
                  {taxon.group}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-1 border-t border-slate-100">
                  {taxon.specificAdaptation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
