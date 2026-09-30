import React, { useState } from 'react';
import { THEORIES, COMPARISON_DIMENSIONS } from '../data/evolutionData';
import { TheoryId, TheorySummary } from '../types/evolution';
import { ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, Cpu, Clock, Layers, Orbit } from 'lucide-react';

export const TheoryMatrix: React.FC = () => {
  const [selectedTheoryId, setSelectedTheoryId] = useState<TheoryId>('neo_darwinism');
  const [activeDimension, setActiveDimension] = useState<string>('timeline');

  const dpcm = THEORIES.find(t => t.id === 'dpcm')!;
  const targetTheory = THEORIES.find(t => t.id === selectedTheoryId)!;
  const currentDimension = COMPARISON_DIMENSIONS.find(d => d.id === activeDimension)!;

  return (
    <div className="space-y-8">
      {/* Overview Banner */}
      <div className="bg-white border border-slate-200 rounded-lg p-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="max-w-3xl space-y-2">
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
              <span>学説比較コンソール</span>
              <span>·</span>
              <span>理論的対比マトリクス</span>
              <span>·</span>
              <span>6次元統合評価</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              多元的深層時間・必然的幾何学収束モデル（DPCM）vs 既存有力説
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              DPCM（深層並行分岐・物理法則アトラクター・定常進化圧）を、生物学史上の主要学説（現代進化総合説、断続平衡説、形態学的構造主義、中立進化説、収斂必然説）と徹底比較。時間の質量、生体力学的整合性、および形態停滞（Stasis）の解法を浮き彫りにします。
            </p>
          </div>

          <div className="flex flex-wrap lg:flex-col gap-2 shrink-0">
            <div className="px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-md text-xs">
              <span className="text-slate-500 block">比較学説数</span>
              <span className="text-base font-bold font-mono text-slate-900">5 主要理論体系</span>
            </div>
            <div className="px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-md text-xs">
              <span className="text-slate-500 block">検証次元</span>
              <span className="text-base font-bold font-mono text-slate-900">6 大科学的指標</span>
            </div>
          </div>
        </div>

        {/* Quick Theory Switcher Tabs */}
        <div className="mt-6 pt-5 border-t border-slate-100">
          <div className="text-xs font-semibold text-slate-500 mb-2.5">
            対照する既存学説を選択してください：
          </div>
          <div className="flex flex-wrap gap-2">
            {THEORIES.filter(t => t.id !== 'dpcm').map((t) => {
              const isSelected = t.id === selectedTheoryId;
              return (
                <button
                  key={t.id}
                  onClick={() => setSelectedTheoryId(t.id)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors border cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span className="font-semibold">{t.name}</span>
                  <span className="ml-1.5 opacity-70 text-[11px]">({t.keyProponents[0]})</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Side-by-Side Theory Spotlight */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* DPCM Card */}
        <div className="bg-white border-2 border-slate-900 rounded-lg p-6 space-y-5">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-xs text-cyan-600 font-mono font-semibold">
                [PROPOSED MODEL] 提案理論
              </div>
              <h2 className="text-lg font-bold text-slate-900 mt-0.5">
                {dpcm.name}
              </h2>
              {dpcm.subtitle && (
                <div className="text-xs text-cyan-800 font-medium mt-0.5">
                  ――{dpcm.subtitle}――
                </div>
              )}
              <div className="text-xs text-slate-500 font-mono mt-0.5">
                {dpcm.nameEn}
              </div>
            </div>
            <div className="px-2.5 py-1 bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-medium rounded">
              定常進化圧・物理アトラクター
            </div>
          </div>

          <div className="space-y-3 text-xs leading-relaxed">
            <div>
              <span className="text-slate-400 block font-mono text-[11px]">中核理念（Core Premise）</span>
              <p className="text-slate-800 font-medium mt-0.5">{dpcm.corePremise}</p>
            </div>
            <div>
              <span className="text-slate-400 block font-mono text-[11px]">時間の質量と深層時間（Deep-Time）</span>
              <p className="text-slate-700 mt-0.5">{dpcm.deepTimePerspective}</p>
            </div>
            <div>
              <span className="text-slate-400 block font-mono text-[11px]">形態形成の駆動力（Driver）</span>
              <p className="text-slate-700 mt-0.5">{dpcm.morphogeneticDriver}</p>
            </div>
            <div>
              <span className="text-slate-400 block font-mono text-[11px]">形態停滞（Stasis）の解明</span>
              <p className="text-slate-700 mt-0.5">{dpcm.stasisExplanation}</p>
            </div>
          </div>

          {/* Metric Ratings */}
          <div className="pt-4 border-t border-slate-100">
            <div className="text-xs font-semibold text-slate-700 mb-2.5">
              特性スコア指標（10点満点評価）
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="p-2 bg-slate-50 rounded border border-slate-100">
                <span className="text-slate-500 block text-[11px]">物理必然性</span>
                <span className="font-mono font-bold text-slate-900">{dpcm.scores.physicalInevitable}/10</span>
              </div>
              <div className="p-2 bg-slate-50 rounded border border-slate-100">
                <span className="text-slate-500 block text-[11px]">深層時間リアリズム</span>
                <span className="font-mono font-bold text-slate-900">{dpcm.scores.deepTimeRealism}/10</span>
              </div>
              <div className="p-2 bg-slate-50 rounded border border-slate-100">
                <span className="text-slate-500 block text-[11px]">停滞パラドックス解明</span>
                <span className="font-mono font-bold text-slate-900">{dpcm.scores.stasisResolution}/10</span>
              </div>
              <div className="p-2 bg-slate-50 rounded border border-slate-100">
                <span className="text-slate-500 block text-[11px]">生態・生体力学現場</span>
                <span className="font-mono font-bold text-slate-900">{dpcm.scores.fieldRealism}/10</span>
              </div>
              <div className="p-2 bg-slate-50 rounded border border-slate-100">
                <span className="text-slate-500 block text-[11px]">現行分子時計整合度</span>
                <span className="font-mono font-bold text-amber-600">{dpcm.scores.molecularClockFit}/10 (課題)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Target Theory Card */}
        <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-5">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-xs text-slate-500 font-mono">
                [ORTHODOX / TRADITIONAL THEORY]
              </div>
              <h2 className="text-lg font-bold text-slate-900 mt-0.5">
                {targetTheory.name}
              </h2>
              <div className="text-xs text-slate-500 font-mono mt-0.5">
                {targetTheory.nameEn}
              </div>
            </div>
            <div className={`px-2.5 py-1 text-xs font-medium rounded border ${
              targetTheory.overallStanceOnDPCM === 'strong_alignment'
                ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                : targetTheory.overallStanceOnDPCM === 'partially_aligned'
                ? 'bg-blue-50 border-blue-200 text-blue-800'
                : 'bg-amber-50 border-amber-200 text-amber-800'
            }`}>
              {targetTheory.overallStanceOnDPCM === 'strong_alignment' && '◎ 強い理論的親和性'}
              {targetTheory.overallStanceOnDPCM === 'partially_aligned' && '○ 一部補完・着眼点共通'}
              {targetTheory.overallStanceOnDPCM === 'conflicting' && '✕ 正面衝突（根本前提の相違）'}
            </div>
          </div>

          <div className="text-xs text-slate-500">
            <span className="font-semibold text-slate-700">主唱者・代表的研究者:</span> {targetTheory.keyProponents.join(', ')}
          </div>

          <div className="space-y-3 text-xs leading-relaxed">
            <div>
              <span className="text-slate-400 block font-mono text-[11px]">中核理念（Core Premise）</span>
              <p className="text-slate-800 font-medium mt-0.5">{targetTheory.corePremise}</p>
            </div>
            <div>
              <span className="text-slate-400 block font-mono text-[11px]">時間の質量と地質年代</span>
              <p className="text-slate-700 mt-0.5">{targetTheory.deepTimePerspective}</p>
            </div>
            <div>
              <span className="text-slate-400 block font-mono text-[11px]">形態形成の駆動力（Driver）</span>
              <p className="text-slate-700 mt-0.5">{targetTheory.morphogeneticDriver}</p>
            </div>
            <div>
              <span className="text-slate-400 block font-mono text-[11px]">形態停滞（Stasis）の解明</span>
              <p className="text-slate-700 mt-0.5">{targetTheory.stasisExplanation}</p>
            </div>
          </div>

          {/* Metric Ratings */}
          <div className="pt-4 border-t border-slate-100">
            <div className="text-xs font-semibold text-slate-700 mb-2.5">
              特性スコア指標（10点満点評価）
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="p-2 bg-slate-50 rounded border border-slate-100">
                <span className="text-slate-500 block text-[11px]">物理必然性</span>
                <span className="font-mono font-bold text-slate-900">{targetTheory.scores.physicalInevitable}/10</span>
              </div>
              <div className="p-2 bg-slate-50 rounded border border-slate-100">
                <span className="text-slate-500 block text-[11px]">深層時間リアリズム</span>
                <span className="font-mono font-bold text-slate-900">{targetTheory.scores.deepTimeRealism}/10</span>
              </div>
              <div className="p-2 bg-slate-50 rounded border border-slate-100">
                <span className="text-slate-500 block text-[11px]">停滞パラドックス解明</span>
                <span className="font-mono font-bold text-slate-900">{targetTheory.scores.stasisResolution}/10</span>
              </div>
              <div className="p-2 bg-slate-50 rounded border border-slate-100">
                <span className="text-slate-500 block text-[11px]">生態・生体力学現場</span>
                <span className="font-mono font-bold text-slate-900">{targetTheory.scores.fieldRealism}/10</span>
              </div>
              <div className="p-2 bg-slate-50 rounded border border-slate-100">
                <span className="text-slate-500 block text-[11px]">現行分子時計整合度</span>
                <span className="font-mono font-bold text-slate-900">{targetTheory.scores.molecularClockFit}/10</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deep-Dive Dimension Inspector */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-6">
        <div>
          <h3 className="text-base font-bold text-slate-900">
            6大論点ごとの精密対照分析
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            各項目をクリックして、DPCMと主流学説の論理構造と批判的対比を検証します。
          </p>
        </div>

        {/* Dimension Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-3">
          {COMPARISON_DIMENSIONS.map((dim) => {
            const isActive = dim.id === activeDimension;
            return (
              <button
                key={dim.id}
                onClick={() => setActiveDimension(dim.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                {dim.title.split('（')[0]}
              </button>
            );
          })}
        </div>

        {/* Selected Dimension Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
          {/* DPCM Position */}
          <div className="p-4 bg-cyan-50/50 border border-cyan-100 rounded-lg space-y-2">
            <div className="flex items-center gap-1.5 text-cyan-800 text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4 text-cyan-600" />
              <span>DPCM（本モデル）の主張</span>
            </div>
            <p className="text-xs text-slate-800 leading-relaxed font-medium">
              {currentDimension.dpcmArgument}
            </p>
          </div>

          {/* Orthodox Position */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
            <div className="flex items-center gap-1.5 text-slate-700 text-xs font-semibold">
              <Clock className="w-4 h-4 text-slate-500" />
              <span>既存主流派（総合説・分子系統等）の立場</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              {currentDimension.orthodoxArgument}
            </p>
          </div>

          {/* Critical Analysis & Assessment */}
          <div className="p-4 bg-amber-50/60 border border-amber-200 rounded-lg space-y-2">
            <div className="flex items-center gap-1.5 text-amber-900 text-xs font-semibold">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>科学的評価 ＆ 止揚のポイント</span>
            </div>
            <p className="text-xs text-slate-800 leading-relaxed">
              {currentDimension.criticalAnalysis}
            </p>
          </div>
        </div>
      </div>

      {/* Comprehensive Synthesis Table */}
      <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
        <div className="p-5 border-b border-slate-200 bg-slate-50/70">
          <h3 className="text-sm font-bold text-slate-900">
            全6理論体系の総合対照総括表
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            DPCMと各学説の基本公理、分岐年代、形態形成力、収斂の解釈、停滞の扱いを一望
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100/70 text-slate-600 font-mono text-[11px]">
                <th className="p-3 font-semibold">理論体系名</th>
                <th className="p-3 font-semibold">主要提唱者</th>
                <th className="p-3 font-semibold">分岐年代の前提</th>
                <th className="p-3 font-semibold">形態形成の駆動力</th>
                <th className="p-3 font-semibold">収斂・同様進化</th>
                <th className="p-3 font-semibold">形態停滞（Stasis）</th>
                <th className="p-3 font-semibold">DPCMとの親和性</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {THEORIES.map((theory) => {
                const isDPCM = theory.id === 'dpcm';
                return (
                  <tr
                    key={theory.id}
                    className={`transition-colors ${
                      isDPCM ? 'bg-cyan-50/40 font-medium' : 'hover:bg-slate-50/60'
                    }`}
                  >
                    <td className="p-3 font-bold text-slate-900 whitespace-nowrap">
                      {theory.name}
                      {isDPCM && (
                        <span className="ml-1.5 text-[10px] text-cyan-700 font-mono">[本モデル]</span>
                      )}
                    </td>
                    <td className="p-3 text-slate-500 whitespace-nowrap">
                      {theory.keyProponents[0]}
                    </td>
                    <td className="p-3">
                      {theory.id === 'dpcm' ? '中生代深層並行分岐（1億年以上〜）' : '新生代適応放散（約6600万年前〜）'}
                    </td>
                    <td className="p-3">
                      {theory.id === 'dpcm' || theory.id === 'structuralism_evodevo'
                        ? '物理法則の幾何学的アトラクター'
                        : theory.id === 'neutral_molecular'
                        ? '中立的遺伝的浮動 ＋ 選択'
                        : 'ランダム変異 ＋ 自然選択'}
                    </td>
                    <td className="p-3">
                      {theory.id === 'dpcm' || theory.id === 'conway_morris'
                        ? '物理的必然（唯一解への収束）'
                        : '環境選択による歴史的偶然'}
                    </td>
                    <td className="p-3">
                      {theory.id === 'dpcm'
                        ? 'アトラクター最深部到達による必然解消'
                        : theory.id === 'punctuated_equilibrium'
                        ? '発生的制約によるホメオスタシス'
                        : '安定化選択（議論中）'}
                    </td>
                    <td className="p-3 whitespace-nowrap font-mono text-[11px]">
                      {theory.overallStanceOnDPCM === 'origin' && (
                        <span className="text-cyan-800 font-semibold">提案理論</span>
                      )}
                      {theory.overallStanceOnDPCM === 'strong_alignment' && (
                        <span className="text-emerald-700 font-semibold">強い親和性</span>
                      )}
                      {theory.overallStanceOnDPCM === 'partially_aligned' && (
                        <span className="text-blue-700">一部補完</span>
                      )}
                      {theory.overallStanceOnDPCM === 'conflicting' && (
                        <span className="text-amber-700">対立（課題）</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
