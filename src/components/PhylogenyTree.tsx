import React, { useState } from 'react';
import { DEEP_TIME_CASES } from '../data/evolutionData';
import { DeepTimeCaseStudy } from '../types/evolution';
import { Compass, Waves, Footprints, Trees, Info, ChevronRight, CheckCircle2, AlertCircle } from 'lucide-react';

export const PhylogenyTree: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>('whale');
  const [treeMode, setTreeMode] = useState<'dpcm' | 'orthodox'>('dpcm');

  const selectedCase = DEEP_TIME_CASES.find(c => c.id === selectedCaseId)!;

  return (
    <div className="space-y-8">
      {/* Introduction Card */}
      <div className="bg-white border border-slate-200 rounded-lg p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-xs text-slate-500 font-mono">
              第2章・第3章の視覚的実証
            </div>
            <h2 className="text-xl font-bold tracking-tight text-slate-900 mt-0.5">
              深層時間（ディープ・タイム）並行分岐 vs 新生代爆発ツリー
            </h2>
            <p className="text-xs text-slate-600 mt-1 max-w-2xl">
              1500万年（人類史5000年の3000回分）という時間の質量を直視。恐竜時代の中生代小型哺乳類からすでに始まっていた水生・樹上・地上レーンの併走を可視化します。
            </p>
          </div>

          {/* Tree Mode Toggle */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg border border-slate-200 shrink-0">
            <button
              onClick={() => setTreeMode('dpcm')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                treeMode === 'dpcm'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              DPCM 深層並行分岐ツリー
            </button>
            <button
              onClick={() => setTreeMode('orthodox')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                treeMode === 'orthodox'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              主流派 新生代放射ツリー
            </button>
          </div>
        </div>

        {/* Tree Canvas / Diagram */}
        <div className="mt-6 p-5 bg-slate-950 text-white rounded-lg border border-slate-800 overflow-x-auto">
          <div className="min-w-[700px] space-y-4">
            {/* Timeline Header */}
            <div className="grid grid-cols-5 text-center text-[11px] font-mono text-slate-400 border-b border-slate-800 pb-2">
              <div>ジュラ紀 (~1.6億年前)</div>
              <div>白亜紀 (~1億年前)</div>
              <div>K-Pg大絶滅 (6600万年前)</div>
              <div>古第三紀 (始新世 5000万年前)</div>
              <div>現在 (0 Ma)</div>
            </div>

            {treeMode === 'dpcm' ? (
              /* DPCM Tree Visualization */
              <div className="space-y-4 py-2 text-xs font-mono">
                <div className="flex items-center">
                  <div className="w-1/5 text-cyan-400 text-[11px]">
                    <span className="block font-bold">カストロカウダ</span>
                    <span className="text-[10px] text-slate-400">半水生哺乳形類(164Ma)</span>
                  </div>
                  <div className="w-4/5 relative flex items-center">
                    <div className="h-0.5 w-full bg-cyan-500/80 relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400" />
                    </div>
                    <span className="absolute right-0 translate-x-2 text-cyan-300 font-bold whitespace-nowrap">
                      ▶ 水生レーン（クジラ・イルカ完全収束）
                    </span>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-2/5 text-amber-400 text-[11px]">
                    <span className="block font-bold">ジデルフォドン (66Ma)</span>
                    <span className="text-[10px] text-slate-400">水底ベントス破砕歯列</span>
                  </div>
                  <div className="w-3/5 relative flex items-center">
                    <div className="h-0.5 w-full bg-amber-500/80 relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-amber-400" />
                    </div>
                    <span className="absolute right-0 translate-x-2 text-amber-300 font-bold whitespace-nowrap">
                      ▶ 半水生・淡水河川レーン（カバ・炭獣類繁栄）
                    </span>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-1/5 text-emerald-400 text-[11px]">
                    <span className="block font-bold">初期樹上小型哺乳類</span>
                    <span className="text-[10px] text-slate-400">パンゲア大陸分裂</span>
                  </div>
                  <div className="w-4/5 relative flex items-center">
                    <div className="h-0.5 w-full bg-emerald-500/80 relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <span className="absolute right-0 translate-x-2 text-emerald-300 font-bold whitespace-nowrap">
                      ▶ 樹上並行アトラクター（旧世界ザル ＆ 新世界ザル多系統収束）
                    </span>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-2/5 text-purple-400 text-[11px]">
                    <span className="block font-bold">地上移動プロトタイプ</span>
                    <span className="text-[10px] text-slate-400">長距離省エネ骨格基盤</span>
                  </div>
                  <div className="w-3/5 relative flex items-center">
                    <div className="h-0.5 w-full bg-purple-500/80 relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-purple-400" />
                    </div>
                    <span className="absolute right-0 translate-x-2 text-purple-300 font-bold whitespace-nowrap">
                      ▶ 地上直立二足歩行倒立振子レーン（ヒト・大脳新皮質投資）
                    </span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-800">
                  <span className="text-cyan-400 font-bold">DPCM解釈：</span> 進化圧は常時定常。中生代から各環境アトラクターへの並行レールが敷かれており、急激な変形ではなく長大な歴史の摩擦力をかけて最適解へ到達した。
                </div>
              </div>
            ) : (
              /* Orthodox Cenozoic Radiation Tree */
              <div className="space-y-4 py-2 text-xs font-mono">
                <div className="flex items-center text-slate-500">
                  <div className="w-3/5">（中生代は未分化の夜行性小型食虫類のみと仮定）</div>
                  <div className="w-2/5 border-l-2 border-red-500/80 pl-3 space-y-2">
                    <div className="text-red-400">
                      53Ma: パキケトゥス ➔ 38Ma: バシロサウルス
                      <span className="block text-[10px] text-red-300">
                        ※わずか1500万年で完全海洋化（異常な進化圧上昇を仮定）
                      </span>
                    </div>
                    <div className="text-amber-400">
                      35Ma: アフリカのサルが植物の筏で大西洋を漂流漂着（ラフティング仮説）
                    </div>
                    <div className="text-orange-400">
                      6Ma: チンパンジー祖先からサバンナ進出で急激に直立歩行＋脳3倍化
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-800">
                  <span className="text-red-400 font-bold">主流派の難点：</span> 恐竜絶滅後の短期間に異常な進化圧の跳ね上がり（PETM等のダブルスタンダード）や、野生現場では生存不可能な移行期リスクを軽視。
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Case Studies Selector */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {DEEP_TIME_CASES.map((item) => {
          const isSelected = item.id === selectedCaseId;
          const getIcon = () => {
            if (item.id === 'whale') return <Waves className="w-4 h-4" />;
            if (item.id === 'hippo') return <Compass className="w-4 h-4" />;
            if (item.id === 'primate') return <Trees className="w-4 h-4" />;
            return <Footprints className="w-4 h-4" />;
          };

          return (
            <button
              key={item.id}
              onClick={() => setSelectedCaseId(item.id)}
              className={`p-4 rounded-lg border text-left transition-colors cursor-pointer ${
                isSelected
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5 opacity-90">
                {getIcon()}
                <span className="text-xs font-semibold">{item.title.split('（')[0]}</span>
              </div>
              <p className={`text-[11px] line-clamp-2 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                {item.subject}
              </p>
            </button>
          );
        })}
      </div>

      {/* Selected Case Study Deep Dive */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
            <span>個別ケーススタディ詳細検証</span>
            <span>·</span>
            <span>生態学＆生体力学の現場リアリズム</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mt-1">
            {selectedCase.title}
          </h3>
          <p className="text-xs text-slate-600 mt-0.5">
            テーマ：{selectedCase.subject}
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Orthodox Explanation & Flaw */}
          <div className="p-5 bg-slate-50 border border-slate-200 rounded-lg space-y-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                <AlertCircle className="w-4 h-4 text-slate-500" />
                <span>既存主流説の主張</span>
              </div>
              <p className="text-xs text-slate-700 mt-2 leading-relaxed">
                {selectedCase.orthodoxView}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200">
              <span className="text-xs font-semibold text-amber-800 block">
                DPCMが暴く主流説の不条理・物語主義：
              </span>
              <p className="text-xs text-slate-800 mt-1 leading-relaxed">
                {selectedCase.orthodoxFlaw}
              </p>
            </div>
          </div>

          {/* DPCM Explanation & Biomechanical Evidence */}
          <div className="p-5 bg-cyan-50/50 border border-cyan-200 rounded-lg space-y-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-900">
                <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                <span>DPCM（本モデル）の解釈と生体力学</span>
              </div>
              <p className="text-xs text-slate-800 mt-2 leading-relaxed font-medium">
                {selectedCase.dpcmView}
              </p>
            </div>

            <div className="pt-3 border-t border-cyan-100">
              <span className="text-xs font-semibold text-cyan-900 block">
                中生代の先駆的実証証拠（Fossil Evidence）：
              </span>
              <p className="text-xs text-slate-800 mt-1 leading-relaxed">
                {selectedCase.dpcmEvidence}
              </p>
            </div>
          </div>
        </div>

        {/* Biomechanical Mechanism Highlight */}
        <div className="p-4 bg-slate-900 text-white rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[11px] font-mono text-cyan-400 block font-semibold">
              生体力学キーポイント（Biomechanical Key Mechanism）
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              {selectedCase.biomechanicalKey}
            </p>
          </div>
          {selectedCase.mesozoicPrecursors.length > 0 && (
            <div className="shrink-0 bg-slate-800/80 p-2.5 rounded border border-slate-700 text-xs">
              <span className="text-[10px] text-slate-400 block font-mono">注目化石・プロトタイプ</span>
              <span className="text-cyan-300 font-mono font-medium">
                {selectedCase.mesozoicPrecursors[0]}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
