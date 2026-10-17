# Agents

This document explains the small agent infrastructure landed in src/lib/agents.

- AgentCore: a lightweight runtime for executing an AgentAction, producing an AgentDecision, and recording an audit row in migrations/0010_agents_infra.sql -> agent_audit_logs.
- AgentRegistry: registerAgent/getAgent/listAgents for runtime discovery.

Guidelines
- Agents must be safe by default: use ctx.dryRun = true in staging and when SAFE_MODE is enabled.
- Any action that spends money, modifies billing, or affects customers must create an approval request (insert into approval_requests) and set status "pending" until founder approval.

Next steps
- Wire AgentCore into the existing routes (office approvals UI).
- Implement concrete agents (quote-draft, support-triage, invoice-manager) that call external connectors.
