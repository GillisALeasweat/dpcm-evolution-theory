import React from 'react';
import { DIALECTICAL_EVALUATIONS } from '../data/evolutionData';
import { ShieldCheck, AlertOctagon, Sparkles, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';

export const DialecticalCritique: React.FC = () => {
  const strengths = DIALECTICAL_EVALUATIONS.filter(e => e.category === 'strength');
  const criticisms = DIALECTICAL_EVALUATIONS.filter(e => e.category === 'criticism');
  const syntheses = DIALECTICAL_EVALUATIONS.filter(e => e.category === 'synthesis');

  return (
    <div className="space-y-8">
      {/* Intro Banner */}
      <div className="bg-white border border-slate-200 rounded-lg p-6">
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
            <span>学術的評価 ＆ 弁証法</span>
            <span>·</span>
            <span>批判的検討</span>
            <span>·</span>
            <span>次世代進化論の統合地平</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            DPCMモデルの客観的評価と既存有力説との対決・止揚（Aufheben）
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            どのような優れた理論も、主流派からの反証課題と向き合うことで真の科学的生命力を得ます。DPCMの卓越した論理的優位性と、既存生物学（特に分子系統学・移行化石系列）からの重大な批判的検証課題を公平に対比し、統合への展望を提示します。
          </p>
        </div>
      </div>

      {/* Section 1: Formidable Strengths */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-5">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <h3 className="text-base font-bold text-slate-900">
            【DPCMの強み・優位性】既存理論の欺瞞を排する3つの画期性
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {strengths.map((item, idx) => (
            <div
              key={idx}
              className="p-4 bg-emerald-50/40 border border-emerald-200 rounded-lg space-y-2.5 flex flex-col justify-between"
            >
              <div>
                <div className="text-[11px] font-mono text-emerald-800 font-semibold mb-1">
                  STRENGTH 0{idx + 1}
                </div>
                <h4 className="text-xs font-bold text-slate-900 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-700 mt-2 leading-relaxed">
                  {item.details}
                </p>
              </div>
              <div className="p-2 bg-white/80 rounded border border-emerald-100 text-[11px] text-emerald-900 font-medium">
                {item.summary}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: Critical Challenges from Orthodox Biology */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-5">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <AlertOctagon className="w-5 h-5 text-amber-600" />
          <h3 className="text-base font-bold text-slate-900">
            【既存学説からの批判・反証課題】DPCMが直面する2大ハードル
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {criticisms.map((item, idx) => (
            <div
              key={idx}
              className="p-5 bg-amber-50/40 border border-amber-200 rounded-lg space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-amber-800 font-semibold">
                  CHALLENGE 0{idx + 1}
                </span>
                <span className="text-xs text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded font-mono">
                  実証科学的検証点
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">
                {item.title}
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                {item.details}
              </p>

              {item.counterPerspective && (
                <div className="p-3 bg-white rounded border border-amber-200 text-xs space-y-1">
                  <span className="font-semibold text-slate-900 block font-mono text-[11px]">
                    DPCM側からの再解釈・対抗論理：
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    {item.counterPerspective}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Dialectical Synthesis */}
      <div className="bg-slate-900 text-white rounded-lg p-6 space-y-5">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
          <Sparkles className="w-5 h-5 text-cyan-400" />
          <h3 className="text-base font-bold text-white">
            【学説の止揚（アウフヘーベン）】次世代進化理論への統合シナリオ
          </h3>
        </div>

        {syntheses.map((item, idx) => (
          <div key={idx} className="space-y-4">
            <h4 className="text-sm font-bold text-cyan-300">
              {item.title}
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {item.details}
            </p>

            {item.resolutionPath && (
              <div className="p-4 bg-slate-950 rounded-lg border border-slate-800 text-xs space-y-2">
                <span className="text-cyan-400 font-mono font-semibold block">
                  具体的な科学的検証・統合ロードマップ：
                </span>
                <p className="text-slate-300 leading-relaxed">
                  {item.resolutionPath}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Epistemological Summary Note */}
      <div className="p-5 bg-white border border-slate-200 rounded-lg text-xs leading-relaxed text-slate-700 space-y-2">
        <span className="font-bold text-slate-900 block text-sm">
          総括：DPCMが切り拓く進化思想の地平
        </span>
        <p>
          DPCMは、単なる進化論への異議申し立てにとどまらず、「時間の質量を直視する哲学的リアリズム」「野生の過酷なエネルギー収支」「物理法則による幾何学的必然」を統合した極めて独創的かつ骨太な理論体系です。
        </p>
        <p>
          中生代小型哺乳類化石のさらなる再同定と、発生遺伝学におけるアトラクター数理モデリングが進むことで、ダーウィニズムの「盲目の時計職人（偶然の蓄積）」から「宇宙の幾何学的必然」へのパラダイムシフトが現実のものとなるでしょう。
        </p>
      </div>
    </div>
  );
};
