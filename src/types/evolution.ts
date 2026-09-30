export type TheoryId = 
  | 'dpcm'
  | 'neo_darwinism'
  | 'punctuated_equilibrium'
  | 'neutral_molecular'
  | 'structuralism_evodevo'
  | 'conway_morris';

export interface TheorySummary {
  id: TheoryId;
  name: string;
  nameEn: string;
  subtitle?: string;
  keyProponents: string[];
  corePremise: string;
  deepTimePerspective: string;
  morphogeneticDriver: string;
  convergenceView: string;
  stasisExplanation: string;
  molecularClockRelation: string;
  overallStanceOnDPCM: 'origin' | 'conflicting' | 'partially_aligned' | 'strong_alignment';
  scores: {
    physicalInevitable: number; // 物理法則の必然性評価 (1-10)
    deepTimeRealism: number; // 時間の質量・深層時間度 (1-10)
    stasisResolution: number; // 形態停滞の説明力 (1-10)
    molecularClockFit: number; // 既存分子時計との整合度 (1-10)
    fieldRealism: number; // 野生の生態・生体力学リアリズム (1-10)
  };
}

export interface PhaseTransitionStep {
  step: number;
  stageName: string;
  stageNameEn: string;
  setting: string;
  populationMechanism: string;
  geneticDynamic: string;
  physicalAttractorShift: string;
}

export interface CommonOSParameter {
  id: string;
  name: string;
  ancestralPreAdaptation: string;
  deepTimeOrigin: string;
  physicalAttractorFit: string;
  geneOrBiomechanicalSwitch: string;
}

export type ComparisonDimensionId = 
  | 'timeline'
  | 'driving_force'
  | 'convergence'
  | 'stasis'
  | 'molecular_genetics'
  | 'ecology_biomechanics';

export interface ComparisonDimension {
  id: ComparisonDimensionId;
  title: string;
  dpcmArgument: string;
  orthodoxArgument: string;
  criticalAnalysis: string;
}

export interface GeometricAttractor {
  id: string;
  domain: string;
  domainEn: string;
  physicalChallenge: string;
  inevitableAttractor: string;
  governingLaw: string;
  formula: string;
  formulaMeaning: string;
  convergentTaxa: {
    taxon: string;
    group: string;
    specificAdaptation: string;
  }[];
  biomechanicalInsight: string;
}

export interface DeepTimeCaseStudy {
  id: string;
  title: string;
  subject: string;
  orthodoxView: string;
  dpcmView: string;
  orthodoxFlaw: string;
  dpcmEvidence: string;
  mesozoicPrecursors: string[];
  biomechanicalKey: string;
}

export interface DialecticalEvaluation {
  category: 'strength' | 'criticism' | 'synthesis';
  title: string;
  summary: string;
  details: string;
  counterPerspective?: string;
  resolutionPath?: string;
}

export interface PlausibilityCriterion {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  defaultWeight: number;
}

export interface TheoryPlausibilityDetail {
  theoryId: TheoryId;
  scores: {
    physics_biomechanics: number; // 生体力学・物理法則適合度 (0-100)
    stasis_resolution: number; // 形態停滞（Stasis）説明力 (0-100)
    deep_time_rate: number; // 時間の質量・進化速度リアリズム (0-100)
    molecular_clock: number; // 分子系統・分子時計との整合度 (0-100)
    fossil_stratigraphy: number; // 地層移行化石系列との一致度 (0-100)
    parsimony_internal: number; // 内的論理性・アドホック排除度 (0-100)
  };
  keyStrength: string;
  keyWeakness: string;
  verdictSummary: string;
  recommendationNote: string;
}

export interface DPCMVersionComparison {
  criterionId: string;
  criterionName: string;
  v1Score: number;
  v2Score: number;
  delta: number;
  recalculationReason: string;
}


