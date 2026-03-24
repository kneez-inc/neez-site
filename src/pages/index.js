import React, { useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "./index.module.css"

const GOOGLE_SCRIPT_URL = process.env.GATSBY_GOOGLE_SCRIPT_URL

const EmailSignup = () => {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("idle")

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    setStatus("submitting")
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({ email }),
      })
      setStatus("success")
      setEmail("")
    } catch {
      // POST still goes through even if CORS blocks the response
      setStatus("success")
      setEmail("")
    }
  }

  return (
    <div className={styles.signup}>
      <h3 className={styles.signupHeading}>Get early access</h3>
      <p className={styles.signupText}>
        Be the first to know when neez launches.
      </p>
      {status === "success" ? (
        <p className={styles.signupSuccess}>
          You're on the list! We'll be in touch.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className={styles.signupForm}>
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.signupInput}
            disabled={status === "submitting"}
          />
          <button
            type="submit"
            className={styles.signupButton}
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending..." : "Notify Me"}
          </button>
        </form>
      )}
    </div>
  )
}

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className={styles.hero}>
      <div className="container flex flex-end">
        <div className={styles.heroContent + " flex flex-end"}>
          <h1 className={styles.heroTitle}>
            Move with <span className="text-primary">less pain</span>
          </h1>
        </div>
      </div>
    </section>

    <section className={styles.mission}>
      <div className="container">
        <h2 className={styles.missionTitle}>
          pain-free joints
          <br /> <span className="text-background">for everyone</span>
        </h2>
        <p className={styles.missionText}>
          neez is a free, ad-supported mobile app that tackles knee (and other
          joint) pain. Users simply talk to the app to receive movement
          modifications for immediate pain relief. Then, they follow
          personalized exercises and stretching routines to enjoy life with less
          joint pain.
        </p>
      </div>
    </section>

    <section className={styles.signupSection}>
      <div className="container">
        <EmailSignup />
      </div>
    </section>
  </Layout>
)

export default IndexPage
