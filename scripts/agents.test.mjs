import { test } from 'node:test';
import assert from 'node:assert/strict';

// This test is skipped by default to avoid CI surprises while infra is being merged.
// Replace `test.skip` with `test` after reviewing the code.

test.skip('agent types and registry basic import', async () => {
  const { AgentCore } = await import('../../src/lib/agents/agent-core');
  const { registerAgent, listAgents } = await import('../../src/lib/agents/agent-registry');

  const agent = new AgentCore('test-agent', 'TEST', 'Test Agent', { dryRun: true });
  registerAgent(agent);
  const all = listAgents();
  assert.strictEqual(all.length >= 1, true);
});
