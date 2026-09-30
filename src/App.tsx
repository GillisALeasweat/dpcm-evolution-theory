import React, { useState } from 'react';
import { Header } from './components/Header';
import { PhaseTransitionSimulator } from './components/PhaseTransitionSimulator';
import { PlausibilityCalculator } from './components/PlausibilityCalculator';
import { TheoryMatrix } from './components/TheoryMatrix';
import { PhylogenyTree } from './components/PhylogenyTree';
import { AttractorsGallery } from './components/AttractorsGallery';
import { BiomechanicalLab } from './components/BiomechanicalLab';
import { DialecticalCritique } from './components/DialecticalCritique';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('phase');
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopySummary = () => {
    const summaryText = `【多元深層時間・必然的幾何学収束モデル（DPCM v2.0）統合理論の要約】
■ 核心概念：
1. 因果律のコペルニクス的転回：
   変異が先・形態は偶然ではなく、「物理法則が規定する幾何学的アトラクター（すり鉢）が先、変異の相転移が後」。

2. 共通根源システム（共通OS）と潜在パラメータ：
   生命は海に入る遥か以前の中生代深層時間から、脊椎背腹屈曲（ドルフィンキック）、下顎骨伝導（ソナー受容）、四肢形成Shh等の可動レバーをOS内に準備していた。

3. 周縁隔離小集団における非線形相転移：
   環境境界領域（汽水域・林冠）で潜在変異が顕在化し、遺伝的浮動が分水嶺（鞍点）を突破。物理すり鉢へ不可逆的かつ爆発的に滑落・固定。

4. 認識論的限界とRocks vs Clocksの解明：
   耳胞（インボルクラム）以前の祖先骨格は未分化原始哺乳類と見分けがつかない古生物学の同定限界を解明。平滑化分子時計のモデル依存性を射抜き、最高水準の妥当性を達成。`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-cyan-100 selection:text-cyan-900">
      {/* Top Bar Contract (Zone 1 - Zone 2 - Zone 3) */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onCopySummary={handleCopySummary}
        copied={copied}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'phase' && (
          <PhaseTransitionSimulator onNavigateToPlausibility={() => setActiveTab('plausibility')} />
        )}
        {activeTab === 'plausibility' && <PlausibilityCalculator />}
        {activeTab === 'matrix' && <TheoryMatrix />}
        {activeTab === 'phylogeny' && <PhylogenyTree />}
        {activeTab === 'attractors' && <AttractorsGallery />}
        {activeTab === 'biomechanics' && <BiomechanicalLab />}
        {activeTab === 'dialectics' && <DialecticalCritique />}
      </main>

      {/* Clean Scientific Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 px-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-800">DPCM Comparative Engine v2.0</span>
            <span>·</span>
            <span>The Deep-Time Parallel Convergence Model Analysis Platform</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>共通OS発生ツールキット</span>
            <span>·</span>
            <span>非線形相転移ダイナミクス</span>
            <span>·</span>
            <span>物理的アトラクターすり鉢</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
