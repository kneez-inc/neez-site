import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "./why-neez.module.css"

const WhyNeezPage = () => (
  <Layout>
    <Seo
      title="Why neez?"
      description="neez is a free mobile app that tackles knee pain at its source — poor biomechanics, muscle imbalances, and misaligned movement patterns."
    />

    <section className={styles.heroSection}>
      <div className="container">
        <h1 className={styles.pageTitle}>Why neez?</h1>
        <p className={styles.pageSubtitle}>
          Healthy, pain-free joints for everyone
        </p>
      </div>
    </section>

    <section className={styles.contentSection}>
      <div className="container">
        <div className={styles.content}>
          {/* Summary */}
          <div className={styles.summary}>
            <p className={styles.summaryText}>
              neez is a free mobile application that tackles knee pain at its
              source — poor biomechanics, muscle imbalances, and misaligned
              movement patterns. Users simply talk to the app about their joint
              pain to receive movement modifications for immediate pain relief.
              Then they follow personalized exercise and stretching routines for
              long-term pain improvements.
            </p>
          </div>

          {/* The Problem */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>The Problem</h2>
            <div className={styles.cardGrid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Common & Costly</h3>
                <p className={styles.cardText}>
                  Knee pain affects 25% of adults, with 4M+ primary care visits
                  each year.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Healthcare Frustration</h3>
                <p className={styles.cardText}>
                  Rising costs, insurance hurdles, and limited therapy
                  availability drive people to seek self-managed solutions.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Traditional Gaps</h3>
                <p className={styles.cardText}>
                  Surgery helps major injuries and arthritis (45% of cases), but
                  everyday misalignments (55%) can often be fixed with movement
                  adjustments and targeted exercises.
                </p>
              </div>
            </div>
          </div>

          {/* The Solution */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>The Solution</h2>
            <div className={styles.cardGrid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Conversational AI</h3>
                <p className={styles.cardText}>
                  Voice chat that pinpoints joint pain causes and triggers.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Immediate Relief</h3>
                <p className={styles.cardText}>
                  Quick tips (e.g., adjusting squat form) offer "aha" moments to
                  build trust.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Personalized Long-Term Care</h3>
                <p className={styles.cardText}>
                  Tailored exercises and stretches evolve with user feedback —
                  users experience less pain and improved mobility.
                </p>
              </div>
            </div>
          </div>

          {/* Market Opportunity */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Market Opportunity</h2>
            <div className={styles.twoCol}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Massive & Growing</h3>
                <p className={styles.cardText}>
                  Knee pain has risen 65% in 20 years; patellofemoral and
                  osteoarthritis conditions are on the rise.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Demand for Self-Reliance</h3>
                <p className={styles.cardText}>
                  Frustrated with the current healthcare system, consumers want
                  in-home, tech-driven solutions that bypass bureaucracy.
                </p>
              </div>
            </div>
          </div>

          {/* Competition & Differentiation */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Competition & Differentiation
            </h2>
            <div className={styles.cardGrid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Physical Therapy</h3>
                <p className={styles.cardText}>
                  Effective but costly, limited appointments, and generic
                  treatment plans that patients don't stick to.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Fitness Apps</h3>
                <p className={styles.cardText}>
                  Focus on general fitness — muscle building & fat loss — rather
                  than solving joint pain.
                </p>
              </div>
              <div className={styles.cardHighlight}>
                <h3 className={styles.cardTitle}>neez Advantage</h3>
                <p className={styles.cardText}>
                  Free, easy-to-use, and offers immediate, interactive guidance
                  for joint pain relief.
                </p>
              </div>
            </div>
          </div>

          {/* Product Roadmap */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Product Roadmap</h2>
            <div className={styles.roadmap}>
              <div className={styles.roadmapItem}>
                <span className={styles.phase}>Phase 1</span>
                <p className={styles.roadmapText}>
                  Niche rollouts (tennis players, yoga practitioners, dancers),
                  immediate pain relief, AI learns from diverse cases.
                </p>
              </div>
              <div className={styles.roadmapItem}>
                <span className={styles.phase}>Phase 2</span>
                <p className={styles.roadmapText}>
                  Custom rehab plans, progress tracking and gamification to
                  sustain engagement.
                </p>
              </div>
              <div className={styles.roadmapItem}>
                <span className={styles.phase}>Phase 3</span>
                <p className={styles.roadmapText}>
                  Offer expansion: Knees, then hips and back, and so on.
                </p>
              </div>
              <div className={styles.roadmapItem}>
                <span className={styles.phase}>Phase 4</span>
                <p className={styles.roadmapText}>
                  Monetization through carefully vetted ads for relevant products
                  and local services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default WhyNeezPage
