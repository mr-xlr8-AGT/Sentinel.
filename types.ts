
export enum AgentRole {
  ROUTER = 'ROUTER',
  HUNTER = 'HUNTER',
  SCRAPER = 'SCRAPER',
  ANALYST = 'ANALYST',
  REPORTER = 'REPORTER'
}

export interface LogEntry {
  timestamp: string;
  agent: AgentRole;
  message: string;
  type: 'info' | 'success' | 'error' | 'warning';
  latencyMs?: number;
  tokenUsage?: number;
  cost?: number;
}

export interface WorkflowStats {
  totalWorkflows: number;
  successRate: number;
  avgExecutionTimeMs: number;
  totalTokens: number;
  totalCost: number;
  lastExecutionTimeMs: number;
}

export interface ScrapedContent {
  url: string;
  title: string;
  content: string; // Summarized/cleaned content
  snippet: string;
}

export interface StrategicScores {
  innovation: number;   // 0-100
  market_share: number; // 0-100 (estimated strength)
  pricing_power: number; // 0-100
  brand_reputation: number; // 0-100
  velocity: number; // 0-100 (speed of shipping)
}

export interface SWOT {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
  scores: StrategicScores; // Added for visualization
}

export interface AgentState {
  workflowId: string;
  status: 'idle' | 'running' | 'paused' | 'completed' | 'failed';
  currentAgent: AgentRole | null;
  targetCompany: string;
  analysisType: string;
  discoveredUrls: ScrapedContent[];
  extractedContent: string; // Combined text
  swotAnalysis: SWOT | null;
  finalReport: string | null;
  logs: LogEntry[];
  timestamp?: string; // Added for history sorting
}
