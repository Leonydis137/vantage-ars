-- migrations/0010_agents_infra.sql

-- Add agent audit logs and approval_requests tables to support agent infra and human-in-the-loop approvals.

create table if not exists agent_audit_logs (
  id text primary key,
  agent_id text not null,
  action_kind text not null,
  title text not null,
  inputs_json text not null,
  output_json text,
  status text not null,
  confidence numeric,
  reversible boolean not null default false,
  evidence_hash text,
  created_at timestamptz not null default now()
);

create table if not exists approval_requests (
  id text primary key,
  decision_id text,
  agent_id text not null,
  kind text not null,
  title text not null,
  rationale text not null,
  payload_json text not null,
  amount_cents integer not null default 0,
  status text not null default 'pending',
  requested_at timestamptz not null default now(),
  resolved_by text,
  resolved_at timestamptz
);

create index if not exists agent_audit_agent_idx on agent_audit_logs (agent_id, created_at desc);
create index if not exists approval_requests_status_idx on approval_requests (status, requested_at desc);
