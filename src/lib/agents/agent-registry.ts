/*
 * Agent registry: register and retrieve agents
 * src/lib/agents/agent-registry.ts
 */
import type { AgentCore } from './agent-core';

const registry = new Map<string, AgentCore>();

export function registerAgent(agent: AgentCore) {
  registry.set(agent.id, agent);
}

export function getAgent(id: string) {
  return registry.get(id) ?? null;
}

export function listAgents() {
  return Array.from(registry.values());
}
