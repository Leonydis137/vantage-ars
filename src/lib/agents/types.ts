/*
 * Agents: types
 * src/lib/agents/types.ts
 */

export type AgentAction = {
  id: string;
  kind: string;
  title: string;
  inputs: Record<string, any>;
  createdAt?: string;
};

export type AgentDecision = {
  id: string;
  agentId: string;
  actionKind: string;
  title: string;
  rationale: string;
  status: 'draft' | 'proposed' | 'approved' | 'rejected' | 'executed' | 'failed';
  confidence?: number;
  reversible?: boolean;
  amountCents?: number;
  evidence?: Record<string, any>;
  createdAt?: string;
};

export type ApprovalRequest = {
  id: string;
  decisionId?: string;
  agentId: string;
  kind: string;
  title: string;
  rationale: string;
  payload: Record<string, any>;
  amountCents?: number;
  status: 'pending' | 'approved' | 'declined';
  requestedAt?: string;
};

export type AgentContext = {
  db?: any; // Kysely or a simple query/execute interface
  env?: Record<string, string>;
  logger?: { info(...args: any[]): void; warn(...args: any[]): void; error(...args: any[]): void };
  dryRun?: boolean;
};
