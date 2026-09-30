import React, { useState } from 'react';
import { Sliders, Activity, Zap, Play, RotateCcw, AlertTriangle, ArrowDown } from 'lucide-react';

export const BiomechanicalLab: React.FC = () => {
  // Simulator 1: Whale Hydrodynamics
  const [velocity, setVelocity] = useState<number>(3.5); // m/s
  const [hindlimbScale, setHindlimbScale] = useState<number>(15); // % of terrestrial ancestor size

  // Simulator 2: Human Inverted Pendulum
  const [walkSpeed, setWalkSpeed] = useState<number>(1.3); // m/s (~4.7 km/h)
  const [dailyWalkDistance, setDailyWalkDistance] = useState<number>(12); // km/day
  const [bodyMass, setBodyMass] = useState<number>(65); // kg

  // Physics calculation for Whale
  // Base fusiform body area A0 = 0.8 m^2, Cd0 = 0.04
  // Hindlimbs add projected area and vortex drag:
  const rho_water = 1025; // kg/m^3 (seawater)
  const extraArea = (hindlimbScale / 100) * 0.25; // m^2
  const totalArea = 0.8 + extraArea;
  const cd = 0.04 + (hindlimbScale / 100) * 0.18; // Cd climbs from 0.04 to 0.22
  const dragForce = 0.5 * cd * rho_water * Math.pow(velocity, 2) * totalArea; // N
  const powerWatts = dragForce * velocity; // W
  // Metabolic efficiency ~ 20%
  const metabolicPowerKcalPerHour = (powerWatts / 0.2) * 0.86; // kcal/hr
  const dailyPreyMassKg = (metabolicPowerKcalPerHour * 10) / 1200; // rough fish eq

  // Physics calculation for Human Bipedal vs Quadruped
  // Inverted pendulum walking: Recovery rate of mechanical energy
  // Bipedal recovery ~ 65-70%, COT ~ 2.1 J/(kg*m)
  // Quadruped / Chimp bipedal: Recovery ~ 25-35%, COT ~ 4.2 J/(kg*m)
  const bipedalCOT = 2.1; // J/(kg*m)
  const quadrupedCOT = 4.3; // J/(kg*m)
  const totalMeters = dailyWalkDistance * 1000;
  const bipedalEnergyJoules = bodyMass * bipedalCOT * totalMeters;
  const quadrupedEnergyJoules = bodyMass * quadrupedCOT * totalMeters;
  const bipedalKcal = bipedalEnergyJoules / 4184;
  const quadrupedKcal = quadrupedEnergyJoules / 4184;
  const savedKcal = quadrupedKcal - bipedalKcal;
  // Human brain consumption: ~20% of basal metabolic rate (~350 kcal/day)
  const brainMetabolicDemand = 360; // kcal/day
  const brainFundingRatio = (savedKcal / brainMetabolicDemand) * 100;

  return (
    <div className="space-y-8">
      {/* Intro Banner */}
      <div className="bg-white border border-slate-200 rounded-lg p-6">
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
            <span>第3章の生態物理シミュレーション</span>
            <span>·</span>
            <span>生体力学対話型ラボ</span>
            <span>·</span>
            <span>エネルギー収支の計算</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            野生の生き死にを支配する生体力学パラメータ検証
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            DPCMの中核原理である「流体ブレーキとしての後肢退化」および「倒立振子歩行による大脳新皮質投資」を、実際の物理方程式（流体力学抗力方程式・移動コストCOT方程式）でシミュレーションします。
          </p>
        </div>
      </div>

      {/* Simulator 1: Whale Hydrodynamics */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <div className="text-xs text-cyan-600 font-mono font-semibold">
              SIMULATION 01 : 流体力学的ブレーキと四肢退化
            </div>
            <h3 className="text-base font-bold text-slate-900 mt-0.5">
              クジラ：後肢が「推進器」から「命取りのブレーキ」に転落する物理方程式
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
            F_D = 0.5 · C_d · ρ · v² · A
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls */}
          <div className="space-y-5">
            <div>
              <div className="flex justify-between text-xs font-medium text-slate-700 mb-1.5">
                <span>後肢の残存率（四肢有蹄類祖先を100%とする）:</span>
                <span className="font-mono font-bold text-cyan-700">{hindlimbScale} %</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={hindlimbScale}
                onChange={(e) => setHindlimbScale(Number(e.target.value))}
                className="w-full accent-slate-900 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1">
                <span>0%（完全退化・現生鯨類）</span>
                <span>50%（アンブロケトゥス段階）</span>
                <span>100%（陸生偶蹄類）</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-medium text-slate-700 mb-1.5">
                <span>遊泳巡航速度（Velocity v）:</span>
                <span className="font-mono font-bold text-cyan-700">{velocity.toFixed(1)} m/s ({(velocity * 3.6).toFixed(1)} km/h)</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="6.0"
                step="0.1"
                value={velocity}
                onChange={(e) => setVelocity(Number(e.target.value))}
                className="w-full accent-slate-900 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1">
                <span>1.0 m/s (低速漂行)</span>
                <span>3.5 m/s (通常巡航)</span>
                <span>6.0 m/s (高速捕食突進)</span>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs space-y-2 text-slate-600">
              <span className="font-semibold text-slate-900 block">DPCMの生体力学的指摘：</span>
              <p>
                主動力が「背骨のドルフィンキック」になった瞬間、後ろ足は推進に寄与せず、水流を乱す渦抵抗源（ドラッグジェネレータ）となります。後肢が短くなるほど抗力係数 $C_d$ と投影面積 $A$ が縮小し、エネルギー消費が劇的に半減します。
              </p>
            </div>
          </div>

          {/* Telemetry Readouts */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-[11px] text-slate-500 font-mono block">流体抗力 (Drag Force)</span>
                <span className="text-xl font-bold font-mono text-slate-900">
                  {Math.round(dragForce)} N
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">
                  抗力係数 Cd: {cd.toFixed(3)}
                </span>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-[11px] text-slate-500 font-mono block">要求遊泳出力 (Power)</span>
                <span className="text-xl font-bold font-mono text-slate-900">
                  {(powerWatts / 1000).toFixed(2)} kW
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">
                  {Math.round(powerWatts * 1.36 / 1000)} 馬力相当
                </span>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-[11px] text-slate-500 font-mono block">代謝燃焼熱量</span>
                <span className="text-xl font-bold font-mono text-slate-900">
                  {Math.round(metabolicPowerKcalPerHour)} kcal/h
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">
                  筋運動効率 20%換算
                </span>
              </div>

              <div className={`p-3.5 rounded-lg border ${
                hindlimbScale > 50 ? 'bg-rose-50 border-rose-200' : 'bg-emerald-50 border-emerald-200'
              }`}>
                <span className="text-[11px] font-mono block text-slate-600">エネルギー収支判定</span>
                <span className={`text-base font-bold font-mono ${hindlimbScale > 50 ? 'text-rose-700' : 'text-emerald-700'}`}>
                  {hindlimbScale > 50 ? '⚠ エネルギー破綻' : '✓ 高効率最適化'}
                </span>
                <span className="text-[10px] text-slate-500 block mt-0.5">
                  後肢50%超では捕食量＜代謝浪費
                </span>
              </div>
            </div>

            {/* Drag Reduction Indicator */}
            <div className="p-3 bg-slate-900 text-white rounded-lg text-xs space-y-1 font-mono">
              <div className="flex justify-between text-slate-400">
                <span>後肢完全退化による抗力削減率:</span>
                <span className="text-cyan-400 font-bold">
                  {Math.round((1 - (0.5 * 0.04 * rho_water * Math.pow(velocity, 2) * 0.8) / dragForce) * 100)} % カット
                </span>
              </div>
              <p className="text-[11px] text-slate-300 font-sans pt-1 border-t border-slate-800">
                「足が短い個体ほど生き残る」ことは、都合の良い突然変異ではなく、流体力学が定常的に課した容赦のない物理的選択圧の必然です。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Simulator 2: Human Inverted Pendulum vs Brain Energetics */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <div className="text-xs text-purple-600 font-mono font-semibold">
              SIMULATION 02 : 倒立振子機構と大脳新皮質への代謝投資
            </div>
            <h3 className="text-base font-bold text-slate-900 mt-0.5">
              ヒト：二足歩行による移動コスト75%削減と巨大脳のエネルギー裏付け
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
            Recovery Rate ≈ 70% · COT = 2.1 J/(kg·m)
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls */}
          <div className="space-y-5">
            <div>
              <div className="flex justify-between text-xs font-medium text-slate-700 mb-1.5">
                <span>1日の地上移動距離（Daily Range）:</span>
                <span className="font-mono font-bold text-purple-700">{dailyWalkDistance} km/day</span>
              </div>
              <input
                type="range"
                min="3"
                max="30"
                step="1"
                value={dailyWalkDistance}
                onChange={(e) => setDailyWalkDistance(Number(e.target.value))}
                className="w-full accent-slate-900 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1">
                <span>3 km (森林小範囲)</span>
                <span>12 km (狩猟採集民平均)</span>
                <span>30 km (長距離追跡狩猟)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-medium text-slate-700 mb-1.5">
                <span>体重（Body Mass）:</span>
                <span className="font-mono font-bold text-purple-700">{bodyMass} kg</span>
              </div>
              <input
                type="range"
                min="40"
                max="90"
                step="1"
                value={bodyMass}
                onChange={(e) => setBodyMass(Number(e.target.value))}
                className="w-full accent-slate-900 cursor-pointer"
              />
            </div>

            <div className="p-4 bg-purple-50/50 border border-purple-200 rounded-lg text-xs space-y-2 text-slate-700">
              <span className="font-semibold text-purple-950 block">DPCMの生体力学的指摘：</span>
              <p>
                チンパンジー等のナックルウォークや四足歩行は1歩ごとに筋肉でブレーキと加速を行うため移動コスト（COT）が極めて高い。ヒトの直立二足歩行は「倒立振子（Inverted Pendulum）」として機能し、位置エネルギーと運動エネルギーを70%以上再利用します。
              </p>
            </div>
          </div>

          {/* Telemetry Readouts */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-[11px] text-slate-500 font-mono block">ヒト二足歩行 移動消費熱量</span>
                <span className="text-xl font-bold font-mono text-emerald-700">
                  {Math.round(bipedalKcal)} kcal
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">
                  COT: 2.1 J/(kg·m)
                </span>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-[11px] text-slate-500 font-mono block">類人猿四足歩行 移動消費熱量</span>
                <span className="text-xl font-bold font-mono text-slate-700">
                  {Math.round(quadrupedKcal)} kcal
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">
                  COT: 4.3 J/(kg·m)
                </span>
              </div>

              <div className="p-3.5 bg-purple-50 border border-purple-200 rounded-lg">
                <span className="text-[11px] text-purple-700 font-mono block font-semibold">二足歩行による節約カロリー</span>
                <span className="text-xl font-bold font-mono text-purple-900">
                  +{Math.round(savedKcal)} kcal/日
                </span>
                <span className="text-[10px] text-purple-600 block mt-0.5">
                  浮いた余剰代謝エネルギー
                </span>
              </div>

              <div className="p-3.5 bg-cyan-50 border border-cyan-200 rounded-lg">
                <span className="text-[11px] text-cyan-800 font-mono block font-semibold">大脳維持代謝の充足率</span>
                <span className="text-xl font-bold font-mono text-cyan-900">
                  {Math.round(brainFundingRatio)} %
                </span>
                <span className="text-[10px] text-cyan-700 block mt-0.5">
                  脳消費 ~360 kcal/日を完全賄う
                </span>
              </div>
            </div>

            {/* Theoretical Conclusion Box */}
            <div className="p-4 bg-slate-900 text-white rounded-lg text-xs space-y-1.5 font-mono">
              <span className="text-cyan-400 font-bold block">
                生体力学的必然の連鎖：
              </span>
              <p className="text-slate-300 text-xs font-sans leading-relaxed">
                二足歩行（倒立振子）という幾何学的アトラクターを走っていたからこそ、1日あたり数百kcalのエネルギーが浮き、その余剰代謝が「高燃費器官である巨大脳（大脳新皮質）」を養うことを物理的に可能にしました。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
