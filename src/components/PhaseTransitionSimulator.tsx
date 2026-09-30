import React, { useState } from 'react';
import { PHASE_TRANSITION_STEPS, COMMON_OS_PARAMETERS } from '../data/evolutionData';
import { GitBranch, ShieldAlert, Cpu, Sparkles, Orbit, Compass, ArrowRight, Layers, HelpCircle } from 'lucide-react';

interface PhaseTransitionSimulatorProps {
  onNavigateToPlausibility?: () => void;
}

export const PhaseTransitionSimulator: React.FC<PhaseTransitionSimulatorProps> = ({
  onNavigateToPlausibility
}) => {
  const [activeStep, setActiveStep] = useState<number>(3); // 1 to 4
  const [selectedOSParam, setSelectedOSParam] = useState<string>('dorsoventral_flexion');

  const currentStep = PHASE_TRANSITION_STEPS.find(s => s.step === activeStep)!;
  const currentOS = COMMON_OS_PARAMETERS.find(p => p.id === selectedOSParam)!;

  // Potential curve coordinates for SVG
  // A double well with a barrier (saddle):
  // Well 1 (Ecotone): x=120, y=140
  // Barrier / Saddle (Watershed): x=240, y=70
  // Attractor Basin (Geometric Sink): x=420, y=220
  const getParticlePos = (step: number) => {
    switch (step) {
      case 1: return { x: 120, y: 138, label: '周縁隔離（境界ニッチ）' };
      case 2: return { x: 175, y: 105, label: '潜在変異顕在化（斜面上昇）' };
      case 3: return { x: 242, y: 70, label: '遺伝的浮動（分水嶺・鞍点突破）' };
      case 4: return { x: 420, y: 220, label: '物理すり鉢への滑落完了（Stasis到達）' };
      default: return { x: 242, y: 70, label: '' };
    }
  };

  const particle = getParticlePos(activeStep);

  return (
    <div className="space-y-8">
      {/* Intro Header */}
      <div className="bg-white border border-slate-200 rounded-lg p-6">
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
            <span>DPCM v2.0 アップデート統合理論</span>
            <span>·</span>
            <span>トップダウン幾何学アトラクター</span>
            <span>·</span>
            <span>非線形相転移ダイナミクス</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            発生ツールキットの保存性と物理的すり鉢による相転移モデル
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            進化の因果律をコペルニクス的に逆転：**「変異が先・形態は偶然」ではなく、「物理法則が用意した幾何学的すり鉢（アトラクター）が先・変異の相転移が後」**。共通OSの潜在パラメータが周縁隔離小集団において分水嶺（鞍点）を越え、不可逆的に安定解へと滑落する動態を可視化します。
          </p>
        </div>

        {onNavigateToPlausibility && (
          <div className="mt-4 pt-3.5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs">
              <span className="font-semibold text-slate-900">この統合理論による妥当性スコア再計算結果:</span>
              <span className="font-mono font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">
                92.7 点 (全理論中 #1位 首位)
              </span>
            </div>
            <button
              onClick={onNavigateToPlausibility}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded text-xs font-medium transition-colors cursor-pointer w-fit"
            >
              <span>妥当性・正解度スコア詳細画面へ</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Interactive Potential Landscape & Phase Transition Simulation */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <div className="text-xs text-cyan-700 font-mono font-semibold">
              DYNAMIC POTENTIAL WELL & PHASE TRANSITION
            </div>
            <h3 className="text-base font-bold text-slate-900 mt-0.5">
              分水嶺（適応度の鞍点）突破と物理すり鉢への不可逆的滑落
            </h3>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-xs">
            <span className="text-slate-400">現在ステージ:</span>
            <span className="font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">
              Step 0{activeStep} / 04
            </span>
          </div>
        </div>

        {/* 2D Potential Landscape Diagram */}
        <div className="p-5 bg-slate-950 text-white rounded-lg border border-slate-800 relative overflow-hidden">
          <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between mb-2">
            <span>MORPHOGENETIC POTENTIAL LANDSCAPE V(x)</span>
            <span className="text-cyan-400">幾何学的ポテンシャルエネルギー景観</span>
          </div>

          <div className="relative w-full h-64 sm:h-72">
            <svg viewBox="0 0 540 260" className="w-full h-full">
              <defs>
                {/* Gradient for potential surface */}
                <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#64748b" stopOpacity="0.4" />
                  <stop offset="45%" stopColor="#f59e0b" stopOpacity="0.5" />
                  <stop offset="75%" stopColor="#06b6d4" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#0891b2" stopOpacity="0.4" />
                </linearGradient>

                <linearGradient id="fillArea" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0891b2" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#0f172a" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid lines */}
              <line x1="40" y1="230" x2="510" y2="230" stroke="#334155" strokeDasharray="3 3" />
              <line x1="240" y1="40" x2="240" y2="230" stroke="#475569" strokeDasharray="2 2" />

              {/* Landscape Curve */}
              {/* Left basin (x=120, y=140), Saddle (x=240, y=70), Right deep attractor basin (x=420, y=220) */}
              <path
                d="M 50 110 
                   C 80 150, 110 150, 130 140
                   C 170 120, 200 70, 240 70
                   C 280 70, 320 180, 420 220
                   C 470 240, 490 200, 510 160"
                fill="none"
                stroke="url(#curveGradient)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Shaded fill underneath */}
              <path
                d="M 50 110 
                   C 80 150, 110 150, 130 140
                   C 170 120, 200 70, 240 70
                   C 280 70, 320 180, 420 220
                   C 470 240, 490 200, 510 160
                   L 510 240 L 50 240 Z"
                fill="url(#fillArea)"
              />

              {/* Annotations */}
              <text x="75" y="180" fill="#94a3b8" fontSize="10" fontFamily="monospace">
                [初期境界ニッチ]
              </text>
              <text x="80" y="195" fill="#64748b" fontSize="9" fontFamily="monospace">
                汽水域・親集団安定解
              </text>

              <text x="180" y="55" fill="#f59e0b" fontSize="10" fontFamily="monospace" fontWeight="bold">
                ▲ 分水嶺（鞍点・適応度の谷）
              </text>

              <text x="350" y="248" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold">
                ▼ 物理すり鉢（幾何学的アトラクター）
              </text>
              <text x="375" y="145" fill="#0284c7" fontSize="9" fontFamily="monospace">
                流体力学最深部 (Stasis)
              </text>

              {/* The Particle (Population Morphotype) */}
              <circle
                cx={particle.x}
                cy={particle.y}
                r="7"
                fill="#38bdf8"
                stroke="#ffffff"
                strokeWidth="2.5"
                className="transition-all duration-500 shadow-lg"
              />

              {/* Halo pulse */}
              <circle
                cx={particle.x}
                cy={particle.y}
                r="14"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="1.5"
                opacity="0.6"
                className="animate-ping"
              />
            </svg>

            {/* Particle HUD Card */}
            <div className="absolute bottom-3 left-4 bg-slate-900/90 backdrop-blur border border-slate-700 p-2.5 rounded text-xs font-mono">
              <span className="text-slate-400 block text-[10px]">CURRENT POPULATION STATE:</span>
              <span className="text-cyan-300 font-bold">{particle.label}</span>
            </div>
          </div>

          {/* Stepper Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 pt-3 border-t border-slate-800">
            {PHASE_TRANSITION_STEPS.map((s) => {
              const isSelected = s.step === activeStep;
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStep(s.step)}
                  className={`p-2.5 rounded text-left transition-colors font-mono cursor-pointer ${
                    isSelected
                      ? 'bg-cyan-950 border border-cyan-400 text-cyan-200'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="text-[10px] text-slate-400">STEP 0{s.step}</div>
                  <div className="text-xs font-bold font-sans mt-0.5">{s.stageName}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Explanation of Current Phase Transition Step */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-1.5">
            <span className="text-[11px] font-mono text-slate-500 font-semibold block">
              1. 生態的環境・境界セッティング
            </span>
            <p className="text-xs text-slate-800 leading-relaxed font-medium">
              {currentStep.setting}
            </p>
          </div>

          <div className="p-4 bg-cyan-50/50 border border-cyan-200 rounded-lg space-y-1.5">
            <span className="text-[11px] font-mono text-cyan-900 font-semibold block">
              2. 集団遺伝学＆変異顕在化メカニズム
            </span>
            <p className="text-xs text-slate-800 leading-relaxed font-medium">
              {currentStep.populationMechanism}
            </p>
          </div>

          <div className="p-4 bg-slate-900 text-white rounded-lg space-y-1.5 font-mono">
            <span className="text-[11px] text-cyan-400 font-semibold block">
              3. 物理アトラクターへの不可逆的変位
            </span>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              {currentStep.physicalAttractorShift}
            </p>
          </div>
        </div>
      </div>

      {/* Common OS Toolkit Parameters */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
            <span>第2章：深層時間の動態</span>
            <span>·</span>
            <span>根源的システム（共通OS）の潜在パラメータ</span>
          </div>
          <h3 className="text-base font-bold text-slate-900 mt-1">
            外適応（Exaptation）の上位概念：共通OSに刻まれた可動レバー
          </h3>
          <p className="text-xs text-slate-600 mt-0.5">
            白紙からのランダムな新造ではない。海に入る遥か以前の中生代深層時間から準備されていた生体力学的レバーの可動域を検証。
          </p>
        </div>

        {/* OS Parameter Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {COMMON_OS_PARAMETERS.map((param) => {
            const isSelected = param.id === selectedOSParam;
            return (
              <button
                key={param.id}
                onClick={() => setSelectedOSParam(param.id)}
                className={`p-3.5 rounded-lg border text-left transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                    : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <Cpu className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`} />
                  <span className="text-xs font-bold">{param.name.split('（')[0]}</span>
                </div>
                <div className={`text-[11px] truncate ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                  祖先事前適応: {param.ancestralPreAdaptation}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected OS Parameter Detail */}
        <div className="p-5 bg-cyan-50/40 border border-cyan-200 rounded-lg space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-cyan-100 pb-3">
            <h4 className="text-sm font-bold text-cyan-950">
              {currentOS.name}
            </h4>
            <span className="text-xs font-mono text-cyan-800 bg-cyan-100 px-2.5 py-0.5 rounded">
              深層起源: {currentOS.deepTimeOrigin}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="space-y-1">
              <span className="font-semibold text-slate-500 font-mono text-[11px] block">
                中生代の祖先的基盤（Ancestral Pre-Adaptation）：
              </span>
              <p className="text-slate-800 leading-relaxed font-medium">
                {currentOS.ancestralPreAdaptation}
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-semibold text-cyan-900 font-mono text-[11px] block">
                物理アトラクターとの幾何学的合致（Physical Fit）：
              </span>
              <p className="text-slate-800 leading-relaxed font-medium">
                {currentOS.physicalAttractorFit}
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-cyan-100 text-xs">
            <span className="font-semibold text-slate-900 font-mono text-[11px] block mb-0.5">
              遺伝子スイッチ ＆ 生体力学作動メカニズム：
            </span>
            <p className="text-slate-700 leading-relaxed">
              {currentOS.geneOrBiomechanicalSwitch}
            </p>
          </div>
        </div>
      </div>

      {/* Epistemological Breakthroughs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Epistemological Limit */}
        <div className="bg-white border border-slate-200 rounded-lg p-5 space-y-2.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
            <Compass className="w-4 h-4 text-cyan-600" />
            <span>古生物学の認識論的限界</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            始新世以前にクジラ祖先が化石記録に登場しないのは骨が存在しなかったからではない。耳胞（インボルクラム）などの顕著な特有形質が現れる前は、未分化原始哺乳類と解剖学的に見分けがつかないという**「見つかっていないのではなく見分けがついていない」**認識論的限界である。
          </p>
        </div>

        {/* Demolishing Reversible Storytelling */}
        <div className="bg-white border border-slate-200 rounded-lg p-5 space-y-2.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
            <ShieldAlert className="w-4 h-4 text-amber-600" />
            <span>「陸→海巻き戻し物語」の粉砕</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            完成された陸上重厚動物が海へ逃げて足を捨てて魚に戻る（可逆的進化）ことは生体力学的・熱力学的に破綻する（ドロの法則）。海洋化は、水陸両用のニュートラルな境界領域からの**「不可逆的二極展開」**である。
          </p>
        </div>

        {/* Rocks vs Clocks Resolution */}
        <div className="bg-white border border-slate-200 rounded-lg p-5 space-y-2.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
            <Orbit className="w-4 h-4 text-purple-600" />
            <span>Rocks vs. Clocks 論争の解明</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            ゲノム系統樹トポロジー（クジラとカバが姉妹群）は客観的事実として受容する。しかし分子時計の年代は平滑化モデルに依存しており、分水嶺突破後の急激な相転移（非線形進化）では速度を過大・過小評価する。相転移モデルがこの論争を架橋する。
          </p>
        </div>
      </div>
    </div>
  );
};
