# Quantara | Quantum Finance Platform

Quantara is a high-fidelity frontend implementation of a futuristic Quantum Finance Architecture platform. It features a suite of advanced financial tools designed for the intersection of Quantum Computing and Islamic Finance.

## 🚀 Live Demo
**URL:** [www.quantara.ink](https://www.quantara.ink)  
*(Note: Requires a browser environment capable of transpiling TSX or a build step like Vite)*

## 🛠 Technologies Used

*   **Core Framework:** [React 18](https://react.dev/) (Functional Components, Hooks)
*   **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict typing for financial data structures)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Utility-first, responsive, custom "Quantum" color palette)
*   **Visualization:** [Recharts](https://recharts.org/) (Responsive financial charting and data viz)
*   **Icons:** [Lucide React](https://lucide.dev/) (Consistent, lightweight SVG iconography)
*   **Routing:** Custom Hash-based routing (optimized for static hosting compatibility)

## 📦 Application Modules

The application is structured into a central Hub (`LandingPage`) and four specialized product modules:

1.  **Q-Val (Quantum Valuation Engine)**
    *   *Purpose:* Real-time Mark-to-Model valuation for illiquid assets.
    *   *Features:* Synthetic price path generation, risk scoring, live comparison charts.

2.  **SukukGuard**
    *   *Purpose:* Smart contract security and tangibility monitoring for Sukuk.
    *   *Features:* Tangibility ratio tracking, "Cliff" prevention, auto-rebalancing triggers.

3.  **ReguSim (Systemic Risk Simulator)**
    *   *Purpose:* Agent-based modeling for regulatory stress testing.
    *   *Features:* Contagion network visualization, macroeconomic scenario injection.

4.  **Wa'dWizard**
    *   *Purpose:* Derivative structuring and pricing.
    *   *Features:* Quantum path integrals, multi-leg option pricing, Shariah compliance checks.

## 🏃‍♂️ How to Run Locally

This project uses modern ES Modules and JSX. To run it locally, you should use a bundler like **Vite** to handle the TypeScript compilation.

1.  **Initialize Project**
    ```bash
    npm create vite@latest quantara -- --template react-ts
    cd quantara
    npm install
    ```

2.  **Install Dependencies**
    ```bash
    npm install lucide-react recharts
    # Ensure tailwind is setup (npx tailwindcss init -p)
    ```

3.  **Copy Files**
    *   Place `App.tsx` and `index.tsx` (rename to `main.tsx` for Vite) in `src/`.
    *   Place `pages/`, `components/`, and `types.ts` in `src/`.
    *   Copy the `tailwind.config` contents from `index.html` to `tailwind.config.js`.

4.  **Run Development Server**
    ```bash
    npm run dev
    ```

## 🌐 Deployment (GitHub Pages)

This repository includes a `CNAME` file for custom domain routing.
*   **Domain:** `www.quantara.ink`
*   **DNS Config:** CNAME record points to the GitHub Pages URL.

---

*© 2024 Quantara Technologies. All rights reserved.*