"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function HomePage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } 
    },
  };    

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } 
    },
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-grow pt-20 md:pt-24 pb-12">
        {/* Hero */}
        <section className="relative flex min-h-[100svh] md:min-h-[700px] items-center justify-center overflow-hidden px-6 md:px-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-container/40 via-background to-background" />

          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 md:gap-12 py-12 lg:grid-cols-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <motion.h1 
                variants={itemVariants}
                className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight text-on-surface"
              >
                Human-Centric <br className="hidden sm:block" />
                <span className="text-gradient-gold">
                  Cyber Risk Intelligence
                </span>
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="max-w-xl text-base sm:text-lg md:text-xl text-on-surface-variant"
              >
                Behavioral analytics and adaptive vulnerability intelligence
                for modern enterprise defense. Move beyond theoretical threats
                to operational human realities.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap w-full sm:w-auto gap-4 pt-2">
                <Link
                  href="/products"
                  className="btn-gold w-full sm:w-auto rounded-lg px-8 py-3.5 sm:py-3 text-center font-semibold transition-transform hover:scale-105 active:scale-95"
                >
                  Deploy Intelligence
                </Link>

                <Link
                  href="/sentinel"
                  className="w-full sm:w-auto rounded-lg border border-white/20 px-8 py-3.5 sm:py-3 text-center font-semibold text-on-surface transition-all hover:bg-white/5 hover:scale-105 active:scale-95"
                >
                  Explore Platform
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="glass-panel group relative aspect-square sm:aspect-[4/3] w-full max-w-md lg:max-w-none mx-auto overflow-hidden rounded-xl mt-6 lg:mt-0"
            >
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9Wm76cW4iunAuMWJROYUI27jO26nhJEVg76R-3h6c6Guugwb0ldnjTRWQ6pMU2SmCYcfH4EBnv3e9owrzAhu3simBqHCBzCtBsHx3OiONQkBwSYia0sH9cD1hfxF4YGfshalQssDPrr-VqlKe6l-AMAy9UoF0xl9Qbj5EwFAVc_2Bt4EIUI9HHWZ7QMItcGvxspiZFB3zWhMNBI3jWDl9P8voQkZT_yP8CZeLNlqnDvPNb3aW0IQ8T4ZIaMOlYxRn-xViRlZJ8eOa"
                alt="Cybersecurity command-center dashboard preview"
                fill
                priority
                className="object-cover opacity-80 transition-opacity duration-700 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="my-12 border-y border-outline-variant/10 bg-surface-container-low py-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mx-auto flex max-w-7xl flex-col sm:flex-row flex-wrap items-center justify-center gap-8 sm:gap-10 md:gap-20 px-6 opacity-80"
          >
            {[
              ["psychology", "AI-Driven Behavioral Intelligence"],
              ["monitoring", "Real-Time Telemetry Analysis"],
              ["visibility", "Enterprise Risk Visibility"],
            ].map(([icon, label]) => (
              <motion.div variants={itemVariants} key={label} className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3">
                <span className="material-symbols-outlined text-3xl sm:text-2xl text-tertiary">
                  {icon}
                </span>
                <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.12em] text-on-surface-variant max-w-[150px] sm:max-w-none">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Products showcase */}
        <section className="mx-auto max-w-7xl px-6 md:px-8 py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 md:mb-12 text-center"
          >
            <h2 className="font-display mb-3 md:mb-4 text-3xl md:text-4xl">
              Enterprise Defense Fleet
            </h2>
            <p className="mx-auto max-w-2xl text-sm md:text-base text-on-surface-variant">
              Purpose-built intelligence platforms for comprehensive human
              risk management.
            </p>
          </motion.div>

          {/* Centered single card container for mobile and desktop */}
          <div className="mx-auto max-w-2xl">
            {/* Flagship */}
            <motion.div 
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8 }}
              className="glass-panel flex flex-col rounded-xl p-6 md:p-8"
            >
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <span className="mb-2 block text-[10px] md:text-[12px] font-bold uppercase tracking-[0.12em] text-tertiary">
                    Flagship
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-on-surface">
                    Aegis HVI
                  </h3>
                </div>
                <span className="material-symbols-outlined text-3xl text-primary">
                  shield_person
                </span>
              </div>

              <p className="mb-8 flex-grow text-sm md:text-base text-on-surface-variant">
                Our core Human Vulnerability Intelligence platform. Aggregates
                behavioral signals to map organizational risk topography in
                real-time.
              </p>

              {/* Product image */}
              <div className="relative mb-6 h-40 sm:h-48 md:h-56 w-full overflow-hidden rounded-lg">
                <motion.div whileHover={{ scale: 1.05 }} className="h-full w-full transition-transform duration-500">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuakRzkFk2YZUFpZW9QB-7JXw7BWu-AreqQPfagKl9IgsIHigQ1rCWG8GE00Q4dmhMX3TV9kfXrySZwrWnFLCMkCOaQWVbieqqFL1sDByQ5cAReLazuWP6IBZcgsNtZ17zxhojwrwIrCcDljo5YDg3mfd4w3dEzRbZ3QKa1ioq6sJg2cdlGLK6V40HSfTG9jdExtJyJCUnc3NFg1isoofOlkPOjrCrvWb3dkrFVuBK_JcbTNqfCFrWa0hemSwkNu8BX8Ti4DWKgqJv"
                    alt="Aegis HVI analytics interface"
                    fill
                    className="object-cover opacity-70"
                  />
                </motion.div>
              </div>

              <Link
                href="/products"
                className="w-full rounded-lg border border-tertiary/30 py-3.5 md:py-3 text-center font-semibold text-tertiary transition-colors hover:bg-tertiary/10"
              >
                Explore Aegis
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}