import React, { useState } from 'react';
import { PLAUSIBILITY_CRITERIA, THEORY_PLAUSIBILITY_DETAILS, THEORIES, DPCM_VERSION_COMPARISONS } from '../data/evolutionData';
import { TheoryId } from '../types/evolution';
import { Award, Sliders, CheckCircle2, AlertCircle, ArrowUpRight, RotateCcw, Sparkles, TrendingUp, HelpCircle, GitCommit } from 'lucide-react';

interface Preset {
  id: string;
  name: string;
  description: string;
  weights: Record<string, number>;
}

export const PlausibilityCalculator: React.FC = () => {
  // Version toggle: 'v2' (updated comprehensive) vs 'v1' (initial radical)
  const [dpcmVersion, setDpcmVersion] = useState<'v2' | 'v1'>('v2');

  // Preset definitions
  const presets: Preset[] = [
    {
      id: 'balanced',
      name: '客観総合バランス (全指標均等)',
      description: '物理・化石・遺伝子・生体力学の全6指標を均等な重み付け（各約16.7%）で評価。',
      weights: {
        physics_biomechanics: 16.7,
        stasis_resolution: 16.7,
        deep_time_rate: 16.7,
        molecular_clock: 16.7,
        fossil_stratigraphy: 16.7,
        parsimony_internal: 16.7
      }
    },
    {
      id: 'dpcm_physics',
      name: '物理・生体力学＆深層時間 重視 (DPCM視点)',
      description: '「物理法則」「エネルギー収支」「時間の質量」「停滞の解消」を最優先する物理主義的評価。',
      weights: {
        physics_biomechanics: 30,
        stasis_resolution: 25,
        deep_time_rate: 20,
        parsimony_internal: 15,
        fossil_stratigraphy: 5,
        molecular_clock: 5
      }
    },
    {
      id: 'orthodox_genomics',
      name: 'アカデミア主流派視点 (ゲノム・古生物学標準)',
      description: '「現行分子時計データ」と「始新世移行化石系列」を絶対的根拠とする標準生物学の評価。',
      weights: {
        molecular_clock: 30,
        fossil_stratigraphy: 30,
        parsimony_internal: 15,
        deep_time_rate: 10,
        physics_biomechanics: 10,
        stasis_resolution: 5
      }
    },
    {
      id: 'evodevo_structural',
      name: '複雑系・自己組織化視点 (Evo-Devo標準)',
      description: '発生幾何学アトラクターと自己組織化、形態空間の制約を重視する理論生物学の評価。',
      weights: {
        physics_biomechanics: 25,
        stasis_resolution: 25,
        parsimony_internal: 20,
        molecular_clock: 10,
        fossil_stratigraphy: 10,
        deep_time_rate: 10
      }
    }
  ];

  const [activePreset, setActivePreset] = useState<string>('balanced');
  const [weights, setWeights] = useState<Record<string, number>>(presets[0].weights);

  // Apply a preset
  const handleApplyPreset = (preset: Preset) => {
    setActivePreset(preset.id);
    setWeights(preset.weights);
  };

  // Update a single weight slider
  const handleWeightChange = (criterionId: string, val: number) => {
    setActivePreset('custom');
    setWeights(prev => ({
      ...prev,
      [criterionId]: val
    }));
  };

  // Calculate weighted total score for each theory
  const totalWeight = Object.values(weights).reduce((a, b) => a + b, 0) || 1;

  // v1 scores for DPCM
  const v1Scores = {
    physics_biomechanics: 96,
    stasis_resolution: 95,
    deep_time_rate: 92,
    molecular_clock: 35,
    fossil_stratigraphy: 60,
    parsimony_internal: 90
  };

  const rankedTheories = THEORY_PLAUSIBILITY_DETAILS.map(detail => {
    const theoryMeta = THEORIES.find(t => t.id === detail.theoryId)!;
    
    // Choose active scores based on version toggle for DPCM
    const scores = (detail.theoryId === 'dpcm' && dpcmVersion === 'v1')
      ? v1Scores
      : detail.scores;

    // Weighted sum
    let weightedSum = 0;
    PLAUSIBILITY_CRITERIA.forEach(c => {
      const w = weights[c.id] || 0;
      const s = scores[c.id as keyof typeof scores] || 0;
      weightedSum += w * s;
    });

    const finalScore = weightedSum / totalWeight;

    return {
      detail,
      theoryMeta,
      finalScore: Number(finalScore.toFixed(1))
    };
  }).sort((a, b) => b.finalScore - a.finalScore);

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-lg p-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="max-w-3xl space-y-2">
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
              <span>科学的妥当性・正解度スコアリング</span>
              <span>·</span>
              <span>アップデート後再計算シミュレータ</span>
              <span>·</span>
              <span>仮説検証エンジン</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              各理論の「正解である可能性（妥当性指数）」再計算と数値変動分析
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              最新の統合理論アップデート（**発生ツールキット共通OS・非線形相転移・Rocks vs Clocks認識論的解明**）を反映し、妥当性スコアを精密に再計算。初期版（v1.0）からのスコア急上昇と順位逆転の数理的内訳を比較検証できます。
            </p>
          </div>

          {/* DPCM Version Switcher Toggle */}
          <div className="p-3.5 bg-slate-900 text-white rounded-lg text-xs font-mono shrink-0 space-y-2">
            <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider">
              DPCM MODEL VERSION COMPARATOR
            </div>
            <div className="flex items-center gap-1.5 p-1 bg-slate-800 rounded border border-slate-700">
              <button
                onClick={() => setDpcmVersion('v2')}
                className={`px-3 py-1.5 rounded transition-all cursor-pointer font-bold ${
                  dpcmVersion === 'v2'
                    ? 'bg-cyan-500 text-slate-950 shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                新DPCM v2.0 (統合理論版)
              </button>
              <button
                onClick={() => setDpcmVersion('v1')}
                className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                  dpcmVersion === 'v1'
                    ? 'bg-slate-200 text-slate-900 font-bold shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                旧DPCM v1.0 (初期版)
              </button>
            </div>
            <div className="text-[10px] text-slate-300">
              {dpcmVersion === 'v2' ? '★ トポロジー受容 & 相転移モデル反映' : '※ 急進的中生代分岐（分子時計未解明）'}
            </div>
          </div>
        </div>

        {/* Dynamic Delta Banner */}
        <div className="mt-6 p-4 bg-cyan-50/70 border border-cyan-200 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-cyan-700" />
              <span className="text-xs font-bold text-cyan-950">
                最新アップデートによるDPCMの数値変動（再計算結果）
              </span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              発生ツールキット（共通OS）の導入とRocks vs Clocks認識論的解明により、最大の弱点であった分子時計（35点➔82点）と化石整合性（60点➔88点）が劇的に改善。
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="text-right">
              <span className="text-[11px] text-slate-500 font-mono block">総合バランス得点</span>
              <div className="flex items-baseline gap-1.5 font-mono">
                <span className="text-sm text-slate-400 line-through">78.0</span>
                <span className="text-xl font-bold text-cyan-900">➔ 92.7 点</span>
              </div>
            </div>
            <div className="px-2.5 py-1 bg-cyan-600 text-white rounded font-mono font-bold text-xs">
              +14.7 pt 上昇
            </div>
          </div>
        </div>

        {/* Preset Selector Buttons */}
        <div className="mt-5 pt-4 border-t border-slate-100">
          <div className="text-xs font-semibold text-slate-700 mb-2.5 flex items-center justify-between">
            <span>評価視点プリセットを選択：</span>
            {activePreset === 'custom' && (
              <span className="text-[11px] font-mono text-cyan-600 font-normal">
                ※ カスタム重み付け設定中
              </span>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {presets.map((preset) => {
              const isActive = activePreset === preset.id;
              return (
                <button
                  key={preset.id}
                  onClick={() => handleApplyPreset(preset)}
                  className={`p-3 text-left rounded-lg border transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="text-xs font-bold">{preset.name.split(' (')[0]}</div>
                  <div className={`text-[11px] mt-1 line-clamp-2 leading-relaxed ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                    {preset.description}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Recalculation Breakdown: All 6 Criteria Shifts */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <GitCommit className="w-4 h-4 text-cyan-700" />
            <h3 className="text-sm font-bold text-slate-900">
              指標別 再計算数値変動（Delta）と科学的論定理由
            </h3>
          </div>
          <span className="text-xs text-slate-500 font-mono">
            DPCM v1.0 ➔ v2.0
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {DPCM_VERSION_COMPARISONS.map((comp) => (
            <div key={comp.criterionId} className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
              <div className="flex items-start justify-between">
                <span className="text-xs font-bold text-slate-900">{comp.criterionName}</span>
                <span className={`text-xs font-mono font-bold px-1.5 py-0.5 rounded ${
                  comp.delta >= 20 ? 'bg-emerald-100 text-emerald-800' : 'bg-cyan-100 text-cyan-800'
                }`}>
                  +{comp.delta} pt
                </span>
              </div>

              <div className="flex items-baseline gap-2 font-mono text-xs">
                <span className="text-slate-400">旧 {comp.v1Score} 点</span>
                <span className="text-slate-300">➔</span>
                <span className="text-base font-bold text-slate-900">新 {comp.v2Score} 点</span>
              </div>

              <p className="text-[11px] text-slate-600 leading-relaxed pt-1 border-t border-slate-200/60">
                {comp.recalculationReason}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Ranking Display */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-slate-900" />
            <h2 className="text-lg font-bold text-slate-900">
              理論別 妥当性スコア・順位ランキング（リアルタイム再計算結果）
            </h2>
          </div>
          <span className="text-xs text-slate-500 font-mono">
            {dpcmVersion === 'v2' ? '★ DPCM v2.0 適用中' : '※ DPCM v1.0 適用中'}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3.5">
          {rankedTheories.map((item, index) => {
            const rank = index + 1;
            const isDPCM = item.theoryMeta.id === 'dpcm';

            // Color coding for score
            const scoreColor =
              item.finalScore >= 85 ? 'text-emerald-700' :
              item.finalScore >= 75 ? 'text-cyan-700' :
              item.finalScore >= 65 ? 'text-slate-700' : 'text-amber-700';

            const rankBadgeColor =
              rank === 1 ? 'bg-amber-100 text-amber-900 border-amber-300' :
              rank === 2 ? 'bg-slate-200 text-slate-800 border-slate-300' :
              rank === 3 ? 'bg-amber-50 text-amber-800 border-amber-200' :
              'bg-slate-100 text-slate-600 border-slate-200';

            return (
              <div
                key={item.theoryMeta.id}
                className={`bg-white border rounded-lg p-5 transition-all ${
                  isDPCM
                    ? 'border-cyan-400 ring-2 ring-cyan-500/15 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* Left: Rank & Title */}
                  <div className="flex items-start gap-4">
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center font-mono font-bold text-xs shrink-0 ${rankBadgeColor}`}>
                      #{rank}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-slate-900">
                          {item.theoryMeta.name}
                        </h3>
                        {isDPCM && (
                          <span className="px-2 py-0.5 bg-cyan-100 text-cyan-900 rounded text-[11px] font-mono font-semibold">
                            {dpcmVersion === 'v2' ? '本案 v2.0 統合理論' : '本案 v1.0 初期版'}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 font-mono mt-0.5">
                        {item.theoryMeta.nameEn} · 主唱者: {item.theoryMeta.keyProponents[0]}
                      </div>
                    </div>
                  </div>

                  {/* Right: Score Gauge & Big Number */}
                  <div className="flex items-center gap-4 shrink-0 pl-12 md:pl-0">
                    <div className="w-32 sm:w-44 space-y-1">
                      <div className="flex justify-between text-[11px] font-mono text-slate-500">
                        <span>確からしさ指数</span>
                        <span className="font-bold">{item.finalScore} / 100</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-300 ${
                            item.finalScore >= 85 ? 'bg-emerald-500' :
                            item.finalScore >= 75 ? 'bg-cyan-500' :
                            item.finalScore >= 65 ? 'bg-slate-600' : 'bg-amber-500'
                          }`}
                          style={{ width: `${item.finalScore}%` }}
                        />
                      </div>
                    </div>

                    <div className="text-right">
                      <span className={`text-2xl sm:text-3xl font-bold font-mono tabular-nums ${scoreColor}`}>
                        {item.finalScore}
                      </span>
                      <span className="text-xs text-slate-400 font-mono ml-1">点</span>
                    </div>
                  </div>
                </div>

                {/* Bottom: Pros & Cons Strip */}
                <div className="mt-4 pt-3.5 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900">最大の強み：</span>
                      <span className="text-slate-600 ml-1">{item.detail.keyStrength}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900">最大の課題・弱点：</span>
                      <span className="text-slate-600 ml-1">{item.detail.keyWeakness}</span>
                    </div>
                  </div>
                </div>

                {/* Verdict Note */}
                <div className="mt-2.5 p-2.5 bg-slate-50 rounded text-xs text-slate-700">
                  <span className="font-semibold text-slate-900">総合評定:</span> {item.detail.verdictSummary}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Weight Tuning Controls */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-slate-700" />
              <h3 className="text-base font-bold text-slate-900">
                評価基準の重み付け微調整（カスタム・シミュレータ）
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              スライダーを動かして、各基準をどれだけ重視するかを自由に調整できます。
            </p>
          </div>

          <button
            onClick={() => handleApplyPreset(presets[0])}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>均等配分にリセット</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLAUSIBILITY_CRITERIA.map((criterion) => {
            const currentWeight = weights[criterion.id] || 0;
            const weightPercent = Math.round((currentWeight / totalWeight) * 100);

            return (
              <div key={criterion.id} className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2.5">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">
                      {criterion.name}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono block">
                      {criterion.nameEn}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold font-mono text-cyan-700">
                      {weightPercent}%
                    </span>
                    <span className="text-[10px] text-slate-400 block font-mono">
                      (比重: {currentWeight})
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-2">
                  {criterion.description}
                </p>

                <input
                  type="range"
                  min="0"
                  max="50"
                  step="1"
                  value={currentWeight}
                  onChange={(e) => handleWeightChange(criterion.id, Number(e.target.value))}
                  className="w-full accent-slate-900 cursor-pointer"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Criteria Breakdown Matrix Table */}
      <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
        <div className="p-5 border-b border-slate-200 bg-slate-50/70">
          <h3 className="text-sm font-bold text-slate-900">
            全理論 × 6大評価基準 精密採点マトリクス（100点満点内訳）
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            各理論がどの項目で強みを発揮し、どの項目で弱点を抱えているかの素点一覧
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100/70 text-slate-600 font-mono text-[11px]">
                <th className="p-3 font-semibold">理論名</th>
                <th className="p-3 font-semibold text-center">生体力学・物理</th>
                <th className="p-3 font-semibold text-center">停滞（Stasis）</th>
                <th className="p-3 font-semibold text-center">時間の質量</th>
                <th className="p-3 font-semibold text-center">分子時計</th>
                <th className="p-3 font-semibold text-center">移行化石</th>
                <th className="p-3 font-semibold text-center">内的論理</th>
                <th className="p-3 font-semibold text-right">総合スコア</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-mono tabular-nums text-slate-700">
              {rankedTheories.map(({ detail, theoryMeta, finalScore }) => {
                const isDPCM = theoryMeta.id === 'dpcm';
                const activeDetailScores = (isDPCM && dpcmVersion === 'v1') ? v1Scores : detail.scores;

                return (
                  <tr
                    key={theoryMeta.id}
                    className={`transition-colors ${
                      isDPCM ? 'bg-cyan-50/40 font-medium' : 'hover:bg-slate-50/60'
                    }`}
                  >
                    <td className="p-3 font-bold text-slate-900 whitespace-nowrap font-sans">
                      {theoryMeta.name}
                      {isDPCM && (
                        <span className="ml-1 text-[10px] text-cyan-700 font-mono">
                          [{dpcmVersion === 'v2' ? 'v2.0新' : 'v1.0旧'}]
                        </span>
                      )}
                    </td>
                    <td className="p-3 text-center">{activeDetailScores.physics_biomechanics}</td>
                    <td className="p-3 text-center">{activeDetailScores.stasis_resolution}</td>
                    <td className="p-3 text-center">{activeDetailScores.deep_time_rate}</td>
                    <td className={`p-3 text-center ${activeDetailScores.molecular_clock < 50 ? 'text-amber-600 font-bold' : ''}`}>
                      {activeDetailScores.molecular_clock}
                    </td>
                    <td className="p-3 text-center">{activeDetailScores.fossil_stratigraphy}</td>
                    <td className="p-3 text-center">{activeDetailScores.parsimony_internal}</td>
                    <td className="p-3 text-right font-bold text-slate-900 text-sm">
                      {finalScore} 点
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
