#!/usr/bin/env node

type Scenario = {
  name: string;
  prior: number;
  likelihoodIfHypothesis: number;
  likelihoodIfNotHypothesis: number;
};

export function bayesianUpdate(
  prior: number,
  likelihoodIfHypothesis: number,
  likelihoodIfNotHypothesis: number
): number {
  const totalEvidence =
    likelihoodIfHypothesis * prior + likelihoodIfNotHypothesis * (1 - prior);

  return (likelihoodIfHypothesis * prior) / totalEvidence;
}

export function processScenarios(scenarios: Scenario[]): void {
  const results = scenarios.map(
    ({ name, prior, likelihoodIfHypothesis, likelihoodIfNotHypothesis }) => ({
      Scenario: name,
      Prior: parseFloat(prior.toFixed(2)),
      UpdatedProbability: parseFloat(
        bayesianUpdate(
          prior,
          likelihoodIfHypothesis,
          likelihoodIfNotHypothesis
        ).toFixed(2)
      ),
    })
  );

  console.table(results);
}

const scenarios: Scenario[] = [
  {
    name: "Leadership Decision-Making in Crisis",
    prior: 0.75,
    likelihoodIfHypothesis: 0.3,
    likelihoodIfNotHypothesis: 0.7,
  },
  {
    name: "OKR & KPI Adjustments",
    prior: 0.8,
    likelihoodIfHypothesis: 0.5,
    likelihoodIfNotHypothesis: 0.6,
  },
  {
    name: "Enterprise Sales Forecasting",
    prior: 0.7,
    likelihoodIfHypothesis: 0.4,
    likelihoodIfNotHypothesis: 0.8,
  },
  {
    name: "Feature Sunset Decisions",
    prior: 0.5,
    likelihoodIfHypothesis: 0.6,
    likelihoodIfNotHypothesis: 0.3,
  },
  {
    name: "Prioritizing Bugs & Technical Debt",
    prior: 0.2,
    likelihoodIfHypothesis: 0.7,
    likelihoodIfNotHypothesis: 0.2,
  },
  {
    name: "User Acquisition Strategy",
    prior: 0.6,
    likelihoodIfHypothesis: 0.5,
    likelihoodIfNotHypothesis: 0.4,
  },
  {
    name: "Retention Experimentation",
    prior: 0.55,
    likelihoodIfHypothesis: 0.7,
    likelihoodIfNotHypothesis: 0.3,
  },
  {
    name: "M&A Decision-Making",
    prior: 0.4,
    likelihoodIfHypothesis: 0.8,
    likelihoodIfNotHypothesis: 0.5,
  },
  {
    name: "AI & Automation Rollout",
    prior: 0.65,
    likelihoodIfHypothesis: 0.4,
    likelihoodIfNotHypothesis: 0.7,
  },
];

processScenarios(scenarios);
