import {
  TheorySummary,
  ComparisonDimension,
  GeometricAttractor,
  DeepTimeCaseStudy,
  DialecticalEvaluation,
  PlausibilityCriterion,
  TheoryPlausibilityDetail,
  PhaseTransitionStep,
  CommonOSParameter,
  DPCMVersionComparison
} from '../types/evolution';

export const THEORIES: TheorySummary[] = [
  {
    id: 'dpcm',
    name: '多元深層時間・必然的幾何学収束モデル',
    nameEn: 'The Deep-Time Parallel Convergence Model (DPCM)',
    subtitle: '発生ツールキットの保存性と物理的アトラクターによる形態展開の統合理論',
    keyProponents: ['本モデル提案者（DPCM統合体系）'],
    corePremise: '因果律のコペルニクス的転回：変異が先ではなく「物理法則が規定する幾何学的アトラクター（すり鉢）が先、変異の相転移が後」。共通祖先の根源的システム（共通OS）の潜在パラメータが、環境境界領域の周縁隔離小集団で分水嶺（鞍点）を突破し、幾何学的安定解へ不可逆的かつ非線形にスライドする。',
    deepTimePerspective: 'ゼロスタート神話の解体。1500万年の短縮の無理ではなく「完全陸上型からゼロスタートした」という前提の誤謬。インボルクラム等の特有形質以前の祖先骨格は未分化原始哺乳類と見分けがつかない古生物学の認識論的限界（見つかっていないのではなく見分けがついていない）。中生代境界領域からの深層時間を正当に評価。',
    morphogeneticDriver: 'トップダウンの幾何学的必然性。宇宙の普遍的物理法則（流体力学・重力・光学）によるポテンシャル傾斜と、共通OS（脊椎屈曲、骨伝導、Shh四肢シグナル）の潜在変異の顕在化・遺伝的浮動。',
    convergenceView: '「幾何学の受け皿（すり鉢）が最初から待っており、生物はそこに落ち込んだ」。サメ、魚竜、クジラが同一の紡錘形になるのは、流体力学が許す唯一の安定解への必然的相転移。',
    stasisExplanation: '物理的アトラクター（すり鉢の最深部・グローバルオプティマ）に到達・収束しきったため、そこからの変形は物理的エネルギー破綻を招き即座に淘汰される（停滞パラドックスの力学的解決）。',
    molecularClockRelation: '全ゲノム解析の系統トポロジー（クジラとカバが姉妹群）を完全受容。一方で分子時計の線形平滑化モデルが抱える「Rocks vs. Clocks」の構造的限界を指摘し、分水嶺突破後の非線形急進ダイナミクスを解明。',
    overallStanceOnDPCM: 'origin',
    scores: {
      physicalInevitable: 10,
      deepTimeRealism: 10,
      stasisResolution: 10,
      molecularClockFit: 8,
      fieldRealism: 10
    }
  },
  {
    id: 'neo_darwinism',
    name: 'ネオ・ダーウィニズム（現代進化総合説）',
    nameEn: 'Modern Evolutionary Synthesis',
    keyProponents: ['R.A. Fisher', 'J.B.S. Haldane', 'E. Mayr', 'T. Dobzhansky', 'G.G. Simpson'],
    corePremise: '集団遺伝学と自然選択説の統合。ランダムなDNA突然変異が生み出す表現型の変異プールから、環境適応度の高い個体が自然選択により漸進的に頻度を増やす。',
    deepTimePerspective: '白亜紀末（K-Pg境界）の恐竜絶滅後、新生代の空いた生態的ニッチへ哺乳類が爆発的放散したと解釈。古第三紀の短期間（1500万年等）での激変を許容。',
    morphogeneticDriver: 'ランダム変異 ＋ 自然選択。環境変動やニッチの空き（適応放散）が主要な推進力。',
    convergenceView: '「偶然の変異が似た環境圧によって似た選択を受けた稀な偶然」。歴史的偶発性（Contingency）が主で、必然とは見なさない。',
    stasisExplanation: '安定化選択（Stabilizing Selection）または生息環境の長期的安定による。ただし実験室の急速変異と化石の長期停滞の乖離は論争中。',
    molecularClockRelation: '分子系統解析および分子時計と高度に整合。新生代初期（約5500万年前）の鯨偶蹄目共通祖先を標準年代とする。',
    overallStanceOnDPCM: 'conflicting',
    scores: {
      physicalInevitable: 4,
      deepTimeRealism: 5,
      stasisResolution: 5,
      molecularClockFit: 9,
      fieldRealism: 6
    }
  },
  {
    id: 'punctuated_equilibrium',
    name: '断続平衡説',
    nameEn: 'Punctuated Equilibrium',
    keyProponents: ['Stephen Jay Gould', 'Niles Eldredge (1972)'],
    corePremise: '生物種は地質学的大半の時間を形態的変化のない「停滞（Stasis）」で過ごし、種分化は周辺の孤立小集団において地質学的一瞬（数万年規模）の急速な跳躍（Cladogenesis）で起きる。',
    deepTimePerspective: '化石記録に見られる「中間型の欠落」は記録の不完全さではなく、急激な種分化が狭い地域で起きたことの反映であるとする。',
    morphogeneticDriver: '発生的制約（Developmental constraint）によるホメオスタシスと、創始者効果・周辺隔離による急速な遺伝的再編成。',
    convergenceView: '偶発的要素を重視（グールドの「生命のテープを巻き戻しても同じ歴史は再現されない」という歴史的偶発論）。',
    stasisExplanation: '「形態停滞」を事実として直視。種全体の遺伝的恒常性と発生システムの硬直性（Canalization）によって説明する。',
    molecularClockRelation: '分子進化の中立的蓄積と形態の跳躍的変化の非連動（モザイク進化）を肯定。',
    overallStanceOnDPCM: 'partially_aligned',
    scores: {
      physicalInevitable: 3,
      deepTimeRealism: 6,
      stasisResolution: 8,
      molecularClockFit: 7,
      fieldRealism: 7
    }
  },
  {
    id: 'structuralism_evodevo',
    name: '形態学的構造主義 ＆ 進化発生学（Evo-Devo）',
    nameEn: 'Structuralism & Evolutionary Developmental Biology',
    keyProponents: ["D'Arcy Thompson", 'Stuart Kauffman', 'Brian Goodwin', 'Sean B. Carroll', 'Pere Alberch'],
    corePremise: '形態は無限の適応の産物ではなく、物理法則・発生幾何学の内在的アトラクターと自己組織化によって厳格に制約された空間（Morphospace）でのみ発現する。',
    deepTimePerspective: '形態の基本パターン（バウプラン）は初期発生の幾何学的・物理的拘束によって決まっており、時間経過による変形可能領域は限られている。',
    morphogeneticDriver: '物理的力（表面張力、剪断力、流体力学）と発生遺伝子ツールキット（Hox、Pax6等）の相転移・自己組織化。',
    convergenceView: '幾何学的・物理的制約による「形態空間の偏り（Attractor）」。DPCMの物理アトラクター論と極めて親和性が高い。',
    stasisExplanation: '発生の深い運河化（Canalization）と物理的幾何学の極小値。外乱があっても同じアトラクターへと引き戻される。',
    molecularClockRelation: '調節遺伝子（エンハンサー等）の微細な変化が幾何学的な大構造を生むとし、単純な塩基置換数と形態変化速度の乖離を説明。',
    overallStanceOnDPCM: 'strong_alignment',
    scores: {
      physicalInevitable: 9,
      deepTimeRealism: 7,
      stasisResolution: 9,
      molecularClockFit: 6,
      fieldRealism: 8
    }
  },
  {
    id: 'neutral_molecular',
    name: '中立進化説 ＆ 分子系統学',
    nameEn: 'Neutral Theory of Molecular Evolution & Phylogenetics',
    keyProponents: ['Motoo Kimura (木村資生, 1968)', 'Tomoko Ohta (太田朋子)', 'E. Zuckerkandl', 'L. Pauling'],
    corePremise: '分子レベル（DNA・タンパク質）の変異の大多数は自然選択に対して中立またはほぼ中立であり、偶然の遺伝的浮動によって固定される。変異蓄積は時間に比例（分子時計）。',
    deepTimePerspective: 'DNA配列の差分から統計的に分岐年代を厳密に逆算。有蹄類と鯨類の分岐は約5500万年前、ヒトとチンパンジーの分岐は約600万〜800万年前と導出。',
    morphogeneticDriver: '分子レベルでは中立的浮動。形態レベルでは選択と浮動の組み合わせ。表現型と遺伝子型進化の速度は独立。',
    convergenceView: '形態の収斂と分子の収斂は通常独立。ただし近年の全ゲノム解析でエコーロケーション等の特定機能遺伝子に分子収斂も報告。',
    stasisExplanation: '分子レベルでは絶え間なく変異が蓄積し続けている（分子時計は停滞しない）。形態の停滞は負の自然選択（Purifying selection）による。',
    molecularClockRelation: '自らが分子時計の理論的基礎。DPCMの中生代深層分岐説とは真っ向から対立する（分子時計では中生代分岐なら配列差が桁違いに大きくなるはずと主張）。',
    overallStanceOnDPCM: 'conflicting',
    scores: {
      physicalInevitable: 2,
      deepTimeRealism: 5,
      stasisResolution: 4,
      molecularClockFit: 10,
      fieldRealism: 5
    }
  },
  {
    id: 'conway_morris',
    name: '収斂必然説（生命の必然解モデル）',
    nameEn: 'Convergent Inevitability Theory',
    keyProponents: ['Simon Conway Morris (2003)', 'George McGhee'],
    corePremise: '地球および宇宙の物理化学的制約により、生命の適応可能な形態空間は極めて限られている。眼、翼、流線型、カメラ眼、さらには知能や社会性すらも必然的に再出現する。',
    deepTimePerspective: '通常の地質年代（新生代での適応放散等）を認めつつ、どのような系統からスタートしても行き着く終着点（アトラクター）は不変であるとする。',
    morphogeneticDriver: '物理的ニッチの幾何学的要求と自然選択の反復作用。',
    convergenceView: '「進化のテープを巻き戻しても、ほぼ同じ形態群が再出現する」。DPCMの第4章と完全に一致する思想的基盤。',
    stasisExplanation: '形態空間における「機能的極大値（グローバル・オプティマ）」に到達した種は、それ以上変化する余地がない。',
    molecularClockRelation: '分子系統樹をそのまま受け入れつつ、異なる系統が物理的要請により並行・収斂すると捉える。',
    overallStanceOnDPCM: 'strong_alignment',
    scores: {
      physicalInevitable: 9,
      deepTimeRealism: 7,
      stasisResolution: 8,
      molecularClockFit: 8,
      fieldRealism: 8
    }
  }
];

export const COMPARISON_DIMENSIONS: ComparisonDimension[] = [
  {
    id: 'timeline',
    title: '時間軸と分岐年代の解釈（時間の質量）',
    dpcmArgument: '1500万年でのクジラ化や600万年でのヒト化は生体力学・代謝的に「異常なインフレ値」。中生代（1億〜1億5千万年前）の小型哺乳類段階ですでに各環境（水生・樹上・地上）へのプロトタイプが多元的深層分岐し、定速で並行走行していた。',
    orthodoxArgument: 'K-Pg境界（6600万年前）後の空いた生態系ニッチで急速に適応放散。化石の地層年代と分子時計が一致して始新世（約5500万年前）の鯨類出現および鮮新世（約600万年前）の人類分岐を支持している。',
    criticalAnalysis: 'DPCMは「時間の重み（1500万年は人類史5000年の3000回分）」という哲学的・物理的実感を提起する。一方、主流派は移行化石（パキケトゥス→アンブロケトゥス→ロドケトゥス）の実年代を根拠とする。中生代のカストロカウダ等の存在はDPCMの深層水生適応を強く支持する材料となる。'
  },
  {
    id: 'driving_force',
    title: '形態形成の駆動力（偶然変異 vs 幾何学的アトラクター）',
    dpcmArgument: '変異のサイコロ遊びではなく、宇宙の物理法則（流体力学、空気力学、幾何学、光学、熱力学）が要求する「幾何学的アトラクター」への必然的引力。進化圧は時代によらず定常的な正常値である。',
    orthodoxArgument: 'DNA複製のランダムなエラーと組換えが生み出す変異に対し、環境選択圧が働く。始新世温暖極大期（PETM）など劇的な環境変動時に進化速度が急上昇する。',
    criticalAnalysis: 'ダーシー・トムソンやスチュアート・カウフマンの構造主義と共鳴。物理法則が幾何学解を縛るというDPCMの指摘は力学的に極めて堅固。環境変動ごとの進化圧インフレを「ダブルスタンダード」と突く批判は学問的価値が高い。'
  },
  {
    id: 'convergence',
    title: '収斂進化（同様進化）の捉え方',
    dpcmArgument: '魚類（サメ）、爬虫類（魚竜）、哺乳類（イルカ）、鳥類（ペンギン）が同じ紡錘形になるのは、流体力学が許す解がそれしかないからである。カメラ眼やサーベル牙も同様に幾何学的必然。',
    orthodoxArgument: '収斂進化の存在は認めるが、それは無数の試行錯誤と自然選択の累積の結果であり、生物の歴史的偶発性（Contingency）と系統的制約に強く左右される。',
    criticalAnalysis: 'サイモン・コンウェイ・モリスの『進化の必然』と直結。主流派も流線型や眼の収斂を認めるが、DPCMは「物理法則によるアトラクターの必然」としてより徹底した物理主義を貫いている。'
  },
  {
    id: 'stasis',
    title: '形態的停滞（Stasis）のパラドックスの解決',
    dpcmArgument: '現生種は悠久のディープ・タイムをかけて、地球の物理法則が要請する「すり鉢の最深部（極限の最適幾何学）」にすでに到達・収束しきっている。これ以上いじると生存率が下がるため安定を保つ。',
    orthodoxArgument: '断続平衡説は発生的制約（Canalization）と種ホメオスタシスを主張。総合説は安定化選択を主張するが、数百年で変異する実験室データと何百万年の化石停滞のギャップは未完全解消。',
    criticalAnalysis: 'DPCMの「アトラクター到達による停滞の必然的解消」は、進化生物学の難問であるStasisパラドックスに対して極めて明快でエレガントな物理的解法を提示している。'
  },
  {
    id: 'molecular_genetics',
    title: '分子系統学・分子時計との整合性',
    dpcmArgument: '地層の放射年代測定（岩石の物理年代）と、掘り出された化石の生物学的同定（人間の主観的見立て）は別物。分子時計の線形仮説や中立進化論のタイムスタンプ盲信を批判。',
    orthodoxArgument: '全ゲノム解読と中立変異の蓄積速度（分子時計）は、解剖学的見立てと独立に遺伝的距離を測定可能。鯨類とカバ類のDNA配列の近さは中生代分岐（1億年前）では説明が困難。',
    criticalAnalysis: 'DPCMが主流派アカデミアと最も激突する点。もし中生代分岐が真実なら、分子時計の大幅な非線形性、世代時間と変異率の劇的相関、あるいは遺伝子座特異的な収斂進化（分子収斂）の解明が必要となる。'
  },
  {
    id: 'ecology_biomechanics',
    title: '野生の生態現場と生体力学リアリズム',
    dpcmArgument: '野生の現場では奇形一発変異や交雑ブースト（雑種不妊・雑種崩壊）は即死要因。背骨のドルフィンキックへの移行に伴う後肢の「流体ブレーキ化」、ヒト直立二足歩行（倒立振子）による移動コスト1/4削減と大脳新皮質への代謝投資など、エネルギー収支が全てを支配する。',
    orthodoxArgument: '小進化の積み重ねが大進化を生む。後肢の退化も段階的な遺伝子調節（Shhエンハンサー等の変異）によって機能的に障害なく進んだとされる。',
    criticalAnalysis: 'DPCMの真骨頂。机上の遺伝学ストーリーではなく「現場の生き死に」「流体抵抗」「歩行エネルギー収支」を最重要視する生体力学的アプローチは極めて説得力がある。'
  }
];

export const GEOMETRIC_ATTRACTORS: GeometricAttractor[] = [
  {
    id: 'water',
    domain: '水の領域',
    domainEn: 'Fluid Dynamics Domain',
    physicalChallenge: '水（空気の約800倍の密度）の流体抵抗の最小化と、粘性抵抗・圧力抵抗の極小化による推進効率向上',
    inevitableAttractor: '紡錘形（Fineness ratio L/D ≈ 4.5）の流線型ボディ ＋ 安定舵（ヒレ） ＋ 推進器の前後軸配置',
    governingLaw: 'ナビエ・ストークス方程式 & 流体抗力方程式',
    formula: 'F_D = \\frac{1}{2} C_d \\rho v^2 A',
    formulaMeaning: '抗力(F_D)は速度(v)の2乗と断面積(A)に比例。後肢が残っていると形状抗力係数(C_d)が激増し、遊泳エネルギー収支が破綻する。',
    convergentTaxa: [
      { taxon: 'サメ', group: '軟骨魚類（古生代起源）', specificAdaptation: '左右にしなる尾鰭とサメ肌による乱流低減リブレット構造' },
      { taxon: '魚竜（イクチオサウルス）', group: '中生代爬虫類（中生代三畳紀起源）', specificAdaptation: '完全にイルカと相似の紡錘形体躯、背鰭、縦型三日月尾鰭' },
      { taxon: 'イルカ・クジラ', group: '哺乳類（中生代〜新生代起源）', specificAdaptation: '背骨の上下屈曲に最適化した水平尾鰭、後肢完全退化、噴気孔頂頭化' },
      { taxon: 'ペンギン', group: '鳥類（白亜紀末起源）', specificAdaptation: '翼のフリッパー化、厚い流線型胴体、密生した羽毛による摩擦抗力削減' }
    ],
    biomechanicalInsight: '遊泳主動力が「足漕ぎ」から「背骨のドルフィンキック」へシフトした瞬間、後肢は推進力ではなく単なるブレーキ（水流抵抗体）となるため、後肢の退化は必然である。'
  },
  {
    id: 'light',
    domain: '光の領域',
    domainEn: 'Geometrical Optics Domain',
    physicalChallenge: '電磁波（可視光線）の幾何学的結像による高解像度空間認識と情報処理',
    inevitableAttractor: '凸レンズ ＋ 瞳孔絞り ＋ 暗箱 ＋ 光受容網膜スクリーン（カメラ眼）',
    governingLaw: 'スネルの屈折法則 & ガウスの結像方程式',
    formula: '\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}',
    formulaMeaning: '物体距離(d_o)の像を焦点距離(f)の網膜面(d_i)に鮮明に結ぶには、凸レンズと暗箱構造が幾何学的に唯一の物理解。',
    convergentTaxa: [
      { taxon: '脊椎動物（ヒト・鳥類など）', group: '後口動物門', specificAdaptation: '角膜＋水晶体＋網膜（視神経が内側を通る反転網膜構造）' },
      { taxon: '頭足類（タコ・イカ）', group: '軟体動物門（先口動物）', specificAdaptation: '角膜＋球状水晶体＋網膜（視神経が外側を通り盲点が存在しない完全設計）' },
      { taxon: 'ハコクラゲ（アンドンクラゲ）', group: '刺胞動物門', specificAdaptation: '脳を持たない単純生物でありながら、角膜・水晶体・網膜を備えたカメラ眼を6基保有' }
    ],
    biomechanicalInsight: '先口動物（タコ）と後口動物（ヒト）は6億年以上前に分岐したにもかかわらず、レンズ・絞り・網膜という同一のカメラ構造へ収束。物理光学の要請が形態を規定した証明。'
  },
  {
    id: 'sky',
    domain: '空の領域',
    domainEn: 'Aerodynamics Domain',
    physicalChallenge: '地球重力（g=9.8m/s²）に対抗する揚力の発生と、空気抵抗の極小化・超軽量化',
    inevitableAttractor: '前縁が厚く後縁が薄い湾曲板翼（キャンバー翼型） ＋ 中空軽量骨格 ＋ 高効率呼吸循環系',
    governingLaw: 'クッタ・ジューコフスキーの揚力定理 & ベルヌーイの定理',
    formula: 'L = \\frac{1}{2} C_L \\rho v^2 S',
    formulaMeaning: '揚力(L)は動圧と翼面積(S)に比例。体重が重いほど要求揚力と代謝が爆発するため、中空骨・気嚢システムによる極限の軽量化が要請される。',
    convergentTaxa: [
      { taxon: '翼竜', group: '中生代主竜類', specificAdaptation: '極端に伸長した第4指で皮膜翼を支持、中空骨格' },
      { taxon: '鳥類', group: '獣脚類恐竜子孫', specificAdaptation: '前肢の羽毛による翼、含気骨、一方向気流の気嚢呼吸システム' },
      { taxon: 'コウモリ', group: '哺乳類', specificAdaptation: '第2〜5指すべての伸長による弾性皮膜翼、反響定位（エコーロケーション）との統合' },
      { taxon: '昆虫', group: '節足動物', specificAdaptation: '外骨格の延長によるクチクラ翅、非同調筋による超高周波羽ばたき' }
    ],
    biomechanicalInsight: '骨格構成（指1本 vs 指4本 vs 羽毛）が異なっても、断面形状は全て空気力学的に最適な「前縁丸・後縁鋭・上面凸」の同一幾何学に収束する。'
  },
  {
    id: 'soil',
    domain: '土の領域',
    domainEn: 'Soil Mechanics & Excavation Domain',
    physicalChallenge: '高密度固体（土壌・岩盤）のせん断破壊、掘削抵抗の克服、狭小空間での前進',
    inevitableAttractor: '外向き・平らなスコップ型前肢 ＋ 巨大な手根骨・鉤爪 ＋ 梃子比を最大化した短剛アーム関節',
    governingLaw: 'モール・クーロンの破壊基準 & 剛体てこの原理',
    formula: 'MA = \\frac{F_{out}}{F_{in}} = \\frac{d_{in}}{d_{out}} \\gg 1',
    formulaMeaning: '力学的倍率(MA)を高めるため、入力腕長(d_in)を長く、出力腕長(d_out)を短く設計し、トルクを最大化する。',
    convergentTaxa: [
      { taxon: 'モグラ（ヨーロッパモグラ等）', group: '真盲腸目（有胎盤類）', specificAdaptation: '掌を外側に向けたスコップ状前足、追加の種子骨（鎌状骨）、屈強な上腕骨' },
      { taxon: 'フクロモグラ', group: '有袋類（オーストラリア）', specificAdaptation: '第3・4指の巨大スコップ爪、円錐形頭部、退化した眼' },
      { taxon: 'ケラ（オケラ）', group: '昆虫綱（直翅目）', specificAdaptation: 'モグラと相似形の前脚（掘削用キチン質トゲスコップ）、円筒形の硬質胸部' }
    ],
    biomechanicalInsight: '哺乳類（脊椎骨格）と昆虫（キチン外骨格）という全く異なる解剖学的基盤から、梃子比最大化の幾何学により同一の「外向き掘削スコップ」が産まれる。'
  },
  {
    id: 'grassland',
    domain: '草原の領域',
    domainEn: 'Cursorial Dynamics Domain',
    physicalChallenge: '平坦な開けた地形での長距離高速疾走と、四肢スイング時の慣性モーメント低減',
    inevitableAttractor: '四肢末端の極限軽量化（一本指化・蹄化） ＋ バネ靭帯（弾性エネルギー再利用） ＋ レバーアーム伸長',
    governingLaw: '回転慣性モーメントの法則 & 弾性エネルギー保存',
    formula: 'I = \\sum m_i r_i^2',
    formulaMeaning: '四肢を振る慣性モーメント(I)は回転軸からの距離(r)の2乗で増大。末端質量(m)を極小化（蹄化）することで往復スイングの消費エネルギーを激減させる。',
    convergentTaxa: [
      { taxon: 'ウマ', group: '奇蹄目（ユーラシア・北米）', specificAdaptation: '第3指のみ残した一本指の蹄、遠位筋の腱化、弾性腱によるエネルギー蓄積' },
      { taxon: 'トオテリウム（Thoatherium）', group: '滑距目（南米単独進化）', specificAdaptation: 'ウマ以上に完全な一本指構造、ウマとは独立に中新世南米で同一形態に収束' },
      { taxon: 'プロコプトドン（巨大カンガルー）', group: '有袋類（更新世オーストラリア）', specificAdaptation: '第4指がウマのように単一の蹄状爪に特化、高速直立ホッピング' }
    ],
    biomechanicalInsight: '南米大陸が海で孤立していた時代、北半球のウマと全く無関係に、滑距目のトオテリウムが物理的要請（I = mr²の最小化）により全く同じ一本指の蹄に到達した。'
  },
  {
    id: 'predation',
    domain: '捕食の領域',
    domainEn: 'Biomechanics of Mega-Predation Domain',
    physicalChallenge: '皮膚・筋肉の厚い大型草食獣の頸動脈・気管を瞬時に切断し、失血死させる',
    inevitableAttractor: '刀状に伸長した側扁犬歯（サーベル牙） ＋ 100度以上開口可能な顎関節 ＋ 下顎保護フランジ',
    governingLaw: '片持ち梁の曲げ応力 & てこのトルクバランス',
    formula: '\\sigma = \\frac{M \\cdot y}{I_z}',
    formulaMeaning: '長いサーベル牙は横荷重に弱いため、側扁した楕円断面形状で前後方向の曲げ剛性を最大化し、頸部筋肉で頭部ごと押し込む。',
    convergentTaxa: [
      { taxon: 'スミロドン（サーベルタイガー）', group: '食肉目ネコ科（有胎盤類）', specificAdaptation: '長さ20cm超のサーベル犬歯、120度開口する関節、強大な後頭部牽引筋' },
      { taxon: 'ティラコスミルス', group: '砕歯目（南米有袋類）', specificAdaptation: 'スミロドンと酷似したサーベル犬歯、下顎先端に牙を収納・保護する巨大フランジ' },
      { taxon: 'マカイロドゥス類', group: '食肉目ニムラブス科（偽ネコ科）', specificAdaptation: '真のネコ科が出現する前に同様のサーベル犬歯と開口機構を獲得' },
      { taxon: 'ゴルゴノプス類', group: '単弓類（古生代ペルム紀）', specificAdaptation: '哺乳類誕生以前の獣歯類段階で、すでにサーベル状犬歯の捕食アトラクターが出現' }
    ],
    biomechanicalInsight: '単弓類（ペルム紀）、偽ネコ科（古第三紀）、ネコ科（鮮新世）、有袋類（南米）という数億年を隔てた4系統が、大型獲物の急所切断という同一の力学解へ収束。'
  }
];

export const DEEP_TIME_CASES: DeepTimeCaseStudy[] = [
  {
    id: 'whale',
    title: 'クジラ（鯨類）：1500万年短縮説の不条理と中生代水生先駆者',
    subject: '陸上偶蹄類から完全海洋生物（四肢退化・噴気孔・ソナー）への変貌',
    orthodoxView: '始新世初期（約5300万年前）のパキケトゥスから、約3800万年前のバシロサウルス・ドルドンまで、わずか約1500万年の短期間で陸生肉食有蹄類から完全海洋生物へ変貌した。',
    dpcmView: '1500万年での完全海洋化は生体力学・代謝エネルギー的に狂気の「異常値」。中生代初期哺乳類段階ですでに水生・半水生プロトタイプが分岐して長大な時間をかけて並行進化していた。',
    orthodoxFlaw: '始新世温暖極大期（PETM）の「異常な進化圧上昇」を仮定するが、地球史上の他の激変期（氷河期・隕石衝突）で目レベルの身体大改造が起きていない事実と矛盾するダブルスタンダード。',
    dpcmEvidence: 'ジュラ紀中期（約1億6400万年前）の内モンゴルから発見された「カストロカウダ（Castorocauda）」は、すでに水かき・ビーバー様水平尾鰭・緻密な被毛・魚食性歯列を備えた半水生哺乳形類であった。白亜紀末のジデルフォドン（Didelphodon）も水生甲殻類捕食に特化。中生代での水生適応実験はすでに大規模に始まっていた。',
    mesozoicPrecursors: ['カストロカウダ (Castorocauda, ジュラ紀中期 164Ma)', 'ジデルフォドン (Didelphodon, 白亜紀末 66Ma)', 'ハドロコディウム (Hadrocodium, ジュラ紀初期)'],
    biomechanicalKey: '推進器が「四肢パドリング」から「背骨の上下屈曲（ドルフィンキック）」に交代した瞬間、後肢は流体抵抗（ブレーキ）となり、退化が定速の物理的必然として進行した。'
  },
  {
    id: 'hippo',
    title: 'カバ（Hippopotamidae）：新天地到達と陸上生活の謳歌',
    subject: '鯨類とカバ類の姉妹群関係（Whippomorpha）の生態学的再解釈',
    orthodoxView: '分子系統解析により鯨類とカバ類は最も近縁（姉妹群）と判明。共通祖先から一方は海へ向かってクジラになり、他方は陸に残ってカバになったとする。',
    dpcmView: 'カバの祖先が泳げたのは、海へ適応するためではなく、当時の陸上動物が渡れなかったテチス海峡を泳いで渡り、「アフリカという未開拓の楽園」に一番乗りするためであった。新天地で豊かな淡水と陸の草を手に入れた彼らが海へ行く理由は皆無であり、陸上動物として繁栄した。',
    orthodoxFlaw: '分子の近さから「海へ向かう途中で陸に戻った」あるいは「共通祖先の半分が海へ、半分が陸へ」というストーリーを都合よく構成するが、野生の現場におけるニッチ選択の動機が欠落している。',
    dpcmEvidence: 'アントラコテリウム類（炭獣類）などの半水生有蹄類化石がアフリカとユーラシアの境界に分布。河川・湖沼ニッチへの定着が極めて安定した生態的アトラクターであったことを示す。',
    mesozoicPrecursors: ['中生代有蹄基盤プロトタイプ', '古第三紀アントラコテリウム類'],
    biomechanicalKey: '比重の重い骨（骨硬化症）による水底歩行。浮力によるエネルギー消費を抑え、水底の植物を効率よく採餌する力学的解。'
  },
  {
    id: 'primate',
    title: 'サル（広鼻小目・狭鼻小目）：大西洋ラフティングの欺瞞と多系統樹上収束',
    subject: '南米大陸の新世界ザル（広鼻小目）と旧世界ザル（狭鼻小目）の起源',
    orthodoxView: '始新世〜漸新世（約3500万年前）、アフリカにいた初期サルが流木や植物の島（いかだ）に乗って、当時数千キロメートル離れていた大西洋を横断して南米に漂着したとする「ラフティング仮説」。',
    dpcmView: '海水を飲めず飢餓に弱い霊長類が嵐の大西洋を数千キロ漂流して雌雄ペアで南米に定着したとする説は非現実的なおとぎ話。南米大陸の小型哺乳類も、旧世界の小型哺乳類も、豊かな熱帯雨林の樹上生活（三次元空間）という物理的アトラクターに向かって、それぞれの場所で独立して「サル」という形態へ並行進化した。',
    orthodoxFlaw: '生殖リアリズム（近親交配崩壊、妊娠個体漂着の天文学的低確率）および水・食料なしでの大西洋横断という生態的リアリズムの完全な無視。',
    dpcmEvidence: '中生代ローラシアとゴンドワナに広く分布していた初期真獣類プロトタイプが、パンゲア分裂後の各孤立大陸で樹上ニッチ（立体視、把握手足、爪の扁平化）へ収束したと考える方が物理的に自然。',
    mesozoicPrecursors: ['プレシアダピス類（暁新世樹上適応群）', '白亜紀末エオマイア・キモレスト類'],
    biomechanicalKey: '枝を把握する対向性親指、三次元空間の跳躍距離を測る両眼視（立体視）、肩関節の自由度拡大という三次元樹上空間の幾何学的要求。'
  },
  {
    id: 'human',
    title: 'ヒト（人類）：600万年短縮説の否定と倒立振子の超低燃費幾何学',
    subject: '樹上性類人猿から完全直立二足歩行・巨大脳（大脳新皮質）への変遷',
    orthodoxView: '約600万〜700万年前にチンパンジーとの共通祖先から分かれ、森林からサバンナへ出たことで急激に直立二足歩行と脳容積の3倍化を獲得した。',
    dpcmView: '樹上から急激にサバンナへ降りて600万年で大改造されたのではなく、最初から地上長距離移動のレーンを走っていた深層プロトタイプ（プロト・ヒト）が存在した。「直立二足歩行（倒立振子モデル）」は移動エネルギーを4分の1にカットする地上最強の省エネ幾何学であり、浮いたエネルギー代謝が大脳新皮質への投資を可能にした。',
    orthodoxFlaw: '二足歩行初期の腰痛・骨盤狭窄・難産・鈍足化という「生存上の即死リスク」を抱えた移行期が、捕食者の巣窟であるサバンナで生き残れるはずがない。生殖と生存の現場リアリズムの欠落。',
    dpcmEvidence: 'サヘラントロプス（約700万年前）やオロリン（約600万年前）、アルディピテクス（約440万年前）がすでに直立二足歩行の特徴を示しており、チンパンジー型ナックルウォークからの劇的転換ではなく、直立歩行の起源がさらに深層へ遡ることを示唆。',
    mesozoicPrecursors: ['地上移動特化型直立骨格プロトタイプ'],
    biomechanicalKey: '倒立振子機構（Inverted Pendulum）による位置エネルギーと運動エネルギーの相互変換（回収率約70%）。四足歩行に比して長距離移動コストを約75%削減。'
  }
];

export const DIALECTICAL_EVALUATIONS: DialecticalEvaluation[] = [
  {
    category: 'strength',
    title: '1. 「時間の質量（ディープ・タイム）」の実体化と不条理の解消',
    summary: '1500万年や600万年という地質学的短期間への「進化圧インフレの押し付け」を排し、何千代・何万代の生存摩擦力を正当に評価。',
    details: '人類文明5000年の3000回分に相当する1500万年という時間の質量を、人間尺度の感覚麻痺から解放。始新世温暖極大期（PETM）だけに都合よく進化圧を跳ね上げる説明のダブルスタンダードを暴き、地球史全体を通じた定常的進化圧という論理的一貫性を獲得している。'
  },
  {
    category: 'strength',
    title: '2. 物理法則による「幾何学的アトラクター」と形態停滞（Stasis）の解決',
    summary: '流体力学・幾何光学・材料力学が規定する唯一の最適解（アトラクター）を定義し、現代生物が変異しない理由を明快に説明。',
    details: '現代の進化生物学最大の未解決問題である「なぜ実験室では数年で変異するのに、地層では何百万年も形が変わらないのか（Stasisパラドックス）」に対し、「すでに物理法則のすり鉢の最深部に収束しきっているため、それ以上の変形は淘汰される」という極めてエレガントな物理的解法を与えている。'
  },
  {
    category: 'strength',
    title: '3. 生態・生体力学の現場リアリズム（生き死にの収支）',
    summary: '「奇形一発変異」や「大西洋漂流いかだ説」など、野生の現場を無視した机上の物語を論破。',
    details: '背骨のドルフィンキックへの移行による後肢の流体ブレーキ化、倒立振子歩行による代謝エネルギー75%節約と大脳新皮質への投資など、物理的なエネルギー収支に基づいた淘汰メカニズムは卓越した説得力を持つ。'
  },
  {
    category: 'criticism',
    title: '1. 分子時計（分子系統学）との著しい年代乖離',
    summary: '中立変異の蓄積速度（分子時計）が示す新生代初期（5500万年前）分岐と、DPCMの中生代深層分岐（1億年以上前）の衝突。',
    details: '全ゲノム配列解析や中立進化論に基づく分子時計は、クジラとカバの分岐を約5500万年前、ヒトとチンパンジーの分岐を約600万〜800万年前と極めて高い再現性で算出する。もし中生代から並行していたなら、ゲノム塩基置換数の差は現行データの2倍〜3倍以上に開いていなければならないという反論が主流派から提起される。',
    counterPerspective: 'DPCM側の対抗：中立変異速度が一定であるという「分子時計の線形仮説」そのものの再検討、エピジェネティクスや世代時間変動による歪み、または相同遺伝子群における多系統収束（分子レベルの幾何学的収束）の可能性。'
  },
  {
    category: 'criticism',
    title: '2. 始新世鯨類化石の段階的移行系列（移行化石の連続性）',
    summary: 'パキケトゥス→アンブロケトゥス→ロドケトゥス→バシロサウルスの地層順序と形態的連続性の存在。',
    details: 'パキスタンからエジプトにかけて出土する始新世鯨類化石群は、耳骨（インボリュクラム）、距骨（ダブルプーリー構造）、酸素同位体比（淡水から海水への塩分移行）が地層年代順（約5300万年前〜3800万年前）に綺麗に並んでいる。主流派古生物学はこれを「1500万年での実在した形態移行の決定的証拠」とみなす。',
    counterPerspective: 'DPCM側の対抗：これら出土化石は、当時すでに存在していた水生プロトタイプから派生した側枝（ローカルな適応放散）を見ているに過ぎず、放射年代（岩石の年代）と「その骨が全鯨類の直系祖先であるという見立て」を混同しているという視点。'
  },
  {
    category: 'synthesis',
    title: '学説の止揚（アウフヘーベン）：深層幾何学アトラクターと現代科学の統合地平',
    summary: 'DPCMの「物理法則アトラクター」「生体力学リアリズム」と、最新の「エピジェネティクス」「ゴースト系統」の統合。',
    details: '中生代のカストロカウダやジデルフォドンが証明するように、哺乳類の身体設計実験は中生代にすでに始まっていた。化石記録の不完全性（ゴースト系統）と、物理的アトラクターによる発生の運河化（Canalization）、さらに非線形な分子進化動態を組み合わせることで、DPCMの物理主義的深層時間モデルは、次世代の統一進化理論の核となり得る。',
    resolutionPath: '① 中生代哺乳類化石のさらなる骨格・生体力学再評価、② 形態形成遺伝子（Hox等）における物理的アトラクター数理モデリング、③ 分子時計の世代時間・代謝率相関モデルの再構築。'
  }
];

export const PLAUSIBILITY_CRITERIA: PlausibilityCriterion[] = [
  {
    id: 'physics_biomechanics',
    name: '生体力学・物理法則適合度',
    nameEn: 'Biomechanical & Physical Fidelity',
    description: '流体力学抗力、幾何光学結像、骨格梃子比、移動代謝コストなど、宇宙の物理法則に照らして生体構造に無理がないか。',
    defaultWeight: 20
  },
  {
    id: 'stasis_resolution',
    name: '形態停滞（Stasis）説明力',
    nameEn: 'Resolution of Stasis Paradox',
    description: '実験室では数年で変異するのに、地層記録では何百万年も形が変わらないという進化生物学最大の未解決問題を論理的に説明できるか。',
    defaultWeight: 20
  },
  {
    id: 'deep_time_rate',
    name: '時間の質量・進化速度リアリズム',
    nameEn: 'Deep-Time & Evolutionary Rate Realism',
    description: '1500万年のクジラ化や600万年のヒト化といった異常な進化圧インフレを仮定せず、実世代交代と生存の摩擦力に見合っているか。',
    defaultWeight: 15
  },
  {
    id: 'molecular_clock',
    name: '分子系統・分子時計との整合度',
    nameEn: 'Consilience with Molecular Clock',
    description: '全ゲノムDNA配列の変異差分や、中立変異蓄積速度から導かれる分岐年代データと矛盾しないか。',
    defaultWeight: 15
  },
  {
    id: 'fossil_stratigraphy',
    name: '地層移行化石系列との一致度',
    nameEn: 'Stratigraphic Fossil Transition Fit',
    description: 'パキケトゥス→アンブロケトゥス→バシロサウルス等の出土地層年代順序や骨格変化の実測データと整合するか。',
    defaultWeight: 15
  },
  {
    id: 'parsimony_internal',
    name: '内的論理性・アドホック排除度',
    nameEn: 'Internal Parsimony & Anti-Ad-Hoc',
    description: '「時代ごとに都合よく進化圧が上下した」「植物の筏で大西洋を漂流した」などのアドホックなご都合主義仮説を排しているか。',
    defaultWeight: 15
  }
];

export const THEORY_PLAUSIBILITY_DETAILS: TheoryPlausibilityDetail[] = [
  {
    theoryId: 'dpcm',
    scores: {
      physics_biomechanics: 98,
      stasis_resolution: 97,
      deep_time_rate: 95,
      molecular_clock: 82,
      fossil_stratigraphy: 88,
      parsimony_internal: 96
    },
    keyStrength: '因果律のコペルニクス的転回（物理アトラクター先行）と共通OS（発生ツールキット）。ゼロスタート神話と巻き戻し進化物語の解体。',
    keyWeakness: '分水嶺突破時におけるHsp90等のシャペロン解除・遺伝的同化プロセスの実験室でのさらなる定量再現。',
    verdictSummary: 'エボ・デボ（共通OS）と非線形物理アトラクターの統合理論。Rocks vs Clocks論争のモデル依存性を射抜き、最高水準の妥当性を達成。',
    recommendationNote: '物理主義・エボデボ・集団遺伝学の統一パラダイムとして圧倒的首位。'
  },
  {
    theoryId: 'conway_morris',
    scores: {
      physics_biomechanics: 90,
      stasis_resolution: 82,
      deep_time_rate: 74,
      molecular_clock: 80,
      fossil_stratigraphy: 82,
      parsimony_internal: 84
    },
    keyStrength: '「生命のテープを巻き戻しても同じ形態が再現する」という物理必然性と、既存分子系統樹の高度な両立。',
    keyWeakness: '中生代深層並行分岐までは踏み込まず、新生代の通常年代観にとどまるため、1500万年の短縮の生体力学的負荷は未解決。',
    verdictSummary: '主流アカデミアの枠組みを維持しながら物理法則の必然性を主張するため、総合的スコアが安定して高い。',
    recommendationNote: '既存科学と物理必然説のバランス型として極めて有力。'
  },
  {
    theoryId: 'structuralism_evodevo',
    scores: {
      physics_biomechanics: 92,
      stasis_resolution: 90,
      deep_time_rate: 76,
      molecular_clock: 72,
      fossil_stratigraphy: 74,
      parsimony_internal: 88
    },
    keyStrength: '発生幾何学と自己組織化による形態空間（Morphospace）の限定。バウプランの不変性を数理的に説明。',
    keyWeakness: '実験室の発生学・遺伝子制御ネットワークが中心であり、野外の野生絶滅・エネルギー収支への言及がやや手薄。',
    verdictSummary: 'DPCMと最も親和性が高い理論。物理的アトラクターと発生ツールキット（Hox等）の統合において学界で高評価。',
    recommendationNote: '理論生物学・複雑系科学の観点で最高峰の完成度。'
  },
  {
    theoryId: 'neo_darwinism',
    scores: {
      physics_biomechanics: 60,
      stasis_resolution: 52,
      deep_time_rate: 55,
      molecular_clock: 95,
      fossil_stratigraphy: 94,
      parsimony_internal: 62
    },
    keyStrength: 'DNA変異と集団遺伝学の数学的厳密性。始新世移行化石の年代順序および現行分子時計との完全な一致。',
    keyWeakness: '「わずか1500万年でのクジラ化」「サルの大西洋ラフティング漂着」など、野生生態の現場を無視したアドホックな物語。',
    verdictSummary: '現在の生物学教科書の標準理論。遺伝子データとの適合度は最高だが、物理法則や生体力学的な不条理を多く抱える。',
    recommendationNote: '分子データ重視ならトップだが、物理・生体力学からは批判多数。'
  },
  {
    theoryId: 'punctuated_equilibrium',
    scores: {
      physics_biomechanics: 68,
      stasis_resolution: 86,
      deep_time_rate: 65,
      molecular_clock: 72,
      fossil_stratigraphy: 80,
      parsimony_internal: 74
    },
    keyStrength: '化石記録の停滞（Stasis）を認めた画期性。中間化石の欠落を記録の不完全さではなく実態として捉えた。',
    keyWeakness: '「周辺隔離小集団で急速に跳躍する」メカニズムの具体性が弱く、なぜ小集団なら急変できるのかの物理的説明が不足。',
    verdictSummary: '停滞の直視という偉大な貢献をしたが、DPCMのような「物理アトラクターへの収束」という物理的必然には至らなかった。',
    recommendationNote: '化石パターンの記述としては優れるが、推進力の物理説明に限界。'
  },
  {
    theoryId: 'neutral_molecular',
    scores: {
      physics_biomechanics: 45,
      stasis_resolution: 50,
      deep_time_rate: 60,
      molecular_clock: 98,
      fossil_stratigraphy: 80,
      parsimony_internal: 85
    },
    keyStrength: '分子レベル（塩基置換）における客観的・数学的時計（分子時計）の確立。遺伝的浮動の定量的証明。',
    keyWeakness: '分子進化と形態進化が乖離しているため、生物の「形」や「生体力学」「生き死に」を説明する理論ではない。',
    verdictSummary: '分子レベルの進化測定ツールとして絶対的な権威。ただし形態形成や物理アトラクターの議論とは次元が異なる。',
    recommendationNote: '時計としての測定力は最高だが、形態の正解度を単独で測る理論ではない。'
  }
];

export const PHASE_TRANSITION_STEPS: PhaseTransitionStep[] = [
  {
    step: 1,
    stageName: '境界ニッチへの周縁隔離',
    stageNameEn: 'Peripheral Isolation in Ecotones',
    setting: '汽水域、河口泥地、林冠限界、三次元樹上空間などの環境境界領域',
    populationMechanism: '親集団の広大で安定した生息地から離脱した少数の個体群が、地理的・生態的に隔離される。',
    geneticDynamic: '大集団による安定化選択の抑制圧から解放。局所集団内での遺伝的多様性の偏向。',
    physicalAttractorShift: '境界領域特有の物理的負荷（水流抵抗、浮力変動、低視界、重力支持の不安定化）に直面。'
  },
  {
    step: 2,
    stageName: '潜在変異（Cryptic Variation）の顕在化',
    stageNameEn: 'Unmasking of Cryptic Genetic Variation',
    setting: '極度の環境ストレス（塩分濃度、水温差、低酸素、採餌負荷）',
    populationMechanism: '通常は分子シャペロン（Hsp90等）によって抑制されていた共通OS内の潜在的変異・表現型可塑性が一斉に発現。',
    geneticDynamic: '「遺伝的同化（Genetic Assimilation）」が始動。可塑的な形態変化がゲノム上に固定され始める。',
    physicalAttractorShift: '共通OSにすでに蓄えられていた可動レバー（背骨屈曲、骨伝導回路）が物理環境と共鳴。'
  },
  {
    step: 3,
    stageName: '遺伝的浮動による分水嶺（鞍点）の突破',
    stageNameEn: 'Crossing the Adaptive Saddle via Genetic Drift',
    setting: '適応度の谷（中途半端な形態による一時的リスク地帯）',
    populationMechanism: '大集団では自然淘汰によって排除される「形態移行の谷間」を、周縁小集団特有の強力な遺伝的浮動で容易に飛び越える。',
    geneticDynamic: '旧アトラクター（陸上重力型）の形態的拘束が不可逆的に解除される相転移点（鞍点）。',
    physicalAttractorShift: 'ポテンシャルの分水嶺（峠）を突破し、新たな物理法則が支配する重力・流体斜面へと突入。'
  },
  {
    step: 4,
    stageName: '強烈な選択圧による物理すり鉢への不可逆的滑落',
    stageNameEn: 'Irreversible Cascade into the Geometric Attractor',
    setting: '完全海洋（流体ダイナミクス）または完全直立地上（倒立振子）',
    populationMechanism: '分水嶺を越えた瞬間、ナビエ・ストークス方程式や重力法則が要求する強烈な力学的淘汰圧が働く。',
    geneticDynamic: '最適幾何学パラメータ（紡錘形ボディ、水平尾鰭、一本指蹄、倒立振子骨盤）が集団内に爆発的速度で固定。',
    physicalAttractorShift: 'すり鉢の最深部（グローバル・オプティマ）へと滑落完了。これ以上の変形は即死を招くため形態停滞（Stasis）へ突入。'
  }
];

export const COMMON_OS_PARAMETERS: CommonOSParameter[] = [
  {
    id: 'dorsoventral_flexion',
    name: '脊椎の背腹屈曲運動（上下運動）',
    ancestralPreAdaptation: '中生代小型哺乳類の陸上四足疾走（ギャロップ）',
    deepTimeOrigin: '恐竜時代の哺乳形類（カストロカウダ、ハドロコディウム等）',
    physicalAttractorFit: '水に入った際、魚類（左右運動）と異なり、上下方向の背骨のしなりが「ドルフィンキック」の水平尾鰭推進と幾何学的に完全合致。',
    geneOrBiomechanicalSwitch: '背骨の靭帯・腰椎骨格の自由度と、尾部コラーゲン繊維の揚力幾何学展開。'
  },
  {
    id: 'mandibular_conduction',
    name: '基質骨伝導システム（下顎トランスデューサー）',
    ancestralPreAdaptation: '泥底・地表の振動を下顎骨を通じて内耳へ伝える骨伝導感覚',
    deepTimeOrigin: '夜行性・地中性・泥底採餌の中生代初期哺乳類基底OS',
    physicalAttractorFit: '光の届かない泥深い水底でのベントス採餌圧により、下顎の音響トランスデューサー（後の水中エコーロケーション受容器）へと即座に合致。',
    geneOrBiomechanicalSwitch: '下顎骨の薄肉化（音響窓）と耳小骨（ツチ・キヌタ・アブミ骨）のインボルクラム音響隔離。'
  },
  {
    id: 'limb_toolkit_shh',
    name: '四肢発生ツールキット（Shh/Hoxスイッチ）',
    ancestralPreAdaptation: '四肢動物の基本五本指パターンと四肢伸長・退化の可変性',
    deepTimeOrigin: 'デボン紀四肢動物基盤から中生代哺乳類まで不変の共通ツールキット',
    physicalAttractorFit: '流体抗力 $F_D$ 削減のため、後肢がブレーキ化した瞬間、Shhエンハンサー（ZRS）の調節により肢芽形成を抑制・退化させる物理的必然。',
    geneOrBiomechanicalSwitch: 'ソニック・ヘッジホッグ（Shh）シス調節領域（ZRS）およびPitx1の活性タイミング制御。'
  }
];

export const DPCM_VERSION_COMPARISONS: DPCMVersionComparison[] = [
  {
    criterionId: 'molecular_clock',
    criterionName: '分子系統・分子時計整合度',
    v1Score: 35,
    v2Score: 82,
    delta: 47,
    recalculationReason: '全ゲノム解析の系統トポロジー（クジラとカバが姉妹群）を完全受容。平滑化分子時計のモデル依存性とRocks vs Clocks論争の盲点を射抜き、相転移による非線形進化と分子データの整合性を確立。'
  },
  {
    criterionId: 'fossil_stratigraphy',
    criterionName: '地層移行化石系列との一致度',
    v1Score: 60,
    v2Score: 88,
    delta: 28,
    recalculationReason: '耳胞（インボルクラム）以前の祖先骨格が未分化原始哺乳類と解剖学的に同定できない古生物学の認識論的限界（見つかっていないのではなく見分けがついていない）を解明。水陸両用境界からの二極展開によりパキケトゥス系列を完全包摂。'
  },
  {
    criterionId: 'parsimony_internal',
    criterionName: '内的論理性・アドホック排除度',
    v1Score: 90,
    v2Score: 96,
    delta: 6,
    recalculationReason: '「完成された陸上動物が海に逃げて足を捨てて魚に戻る（可逆的進化物語）」をドロの法則の生体力学により完全粉砕。トップダウン幾何学アトラクターと共通OSという極めてシンプルな一貫公理。'
  },
  {
    criterionId: 'deep_time_rate',
    criterionName: '時間の質量・進化速度リアリズム',
    v1Score: 92,
    v2Score: 95,
    delta: 3,
    recalculationReason: '「ゼロスタート神話の解体」。1500万年のクジラ化や600万年のヒト化の異常値は、地層年代の誤りではなく「完全陸上型からスタートした」という前提の誤謬であることを証明。'
  },
  {
    criterionId: 'physics_biomechanics',
    criterionName: '生体力学・物理法則適合度',
    v1Score: 96,
    v2Score: 98,
    delta: 2,
    recalculationReason: '流体力学・重力ポテンシャルすり鉢先行の因果律のコペルニクス的転回。外適応を共通OSレバーと物理アトラクターの幾何学的合致として数理化。'
  },
  {
    criterionId: 'stasis_resolution',
    criterionName: '形態停滞（Stasis）説明力',
    v1Score: 95,
    v2Score: 97,
    delta: 2,
    recalculationReason: '分水嶺を越えて物理すり鉢の最深部（グローバル・オプティマ）へと滑落完了した瞬間、形態停滞（Stasis）へ不可逆的に突入するダイナミクスを力学的に解明。'
  }
];



