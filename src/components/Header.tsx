import React from 'react';
import { Share2, BookOpen } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onCopySummary: () => void;
  copied: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onCopySummary,
  copied
}) => {
  const navItems = [
    { id: 'phase', label: '相転移＆共通OS(新章)' },
    { id: 'plausibility', label: '妥当性・正解度スコア' },
    { id: 'matrix', label: '学説比較マトリクス' },
    { id: 'phylogeny', label: '深層時間系統樹' },
    { id: 'attractors', label: '6大幾何学的アトラクター' },
    { id: 'biomechanics', label: '生体力学シミュレータ' },
    { id: 'dialectics', label: '学説弁証法・総合' }
  ];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-3.5 bg-white border-b border-slate-200">
      {/* Zone 1: Single text element wordmark */}
      <div className="flex items-center gap-2.5">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setActiveTab('phase'); }} 
          className="text-base font-semibold tracking-tight text-slate-900 hover:text-slate-700 transition-colors whitespace-nowrap"
        >
          DPCM Comparative Engine
        </a>
        <button
          onClick={() => setActiveTab('plausibility')}
          className="hidden sm:inline-flex items-center gap-1 font-mono text-[11px] px-2 py-0.5 rounded bg-cyan-50 border border-cyan-200 text-cyan-800 font-bold hover:bg-cyan-100 transition-colors cursor-pointer"
          title="妥当性スコア詳細を見る"
        >
          <span>DPCM v2.0: 92.7点</span>
          <span className="text-[10px] text-cyan-600">(#1位)</span>
        </button>
      </div>

      {/* Zone 2: 4-6 clean text navigation links */}
      <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-slate-600">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`transition-colors pb-0.5 whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'text-slate-950 font-semibold border-b-2 border-slate-950'
                  : 'hover:text-slate-950 text-slate-600'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Zone 3: 1-2 primary actions */}
      <div className="flex items-center gap-2.5">
        <button
          onClick={onCopySummary}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors whitespace-nowrap cursor-pointer"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>{copied ? '要約をコピー完了' : '比較要約コピー'}</span>
        </button>
        <button
          onClick={() => setActiveTab('dialectics')}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors whitespace-nowrap cursor-pointer"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>学説評価レポート</span>
        </button>
      </div>
    </header>
  );
};
