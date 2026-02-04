import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/UI';

export default function HomePage() {
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen"
      >
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-white mb-4">Transform Your Learning Journey</h1>
                <p className="text-xl text-primary-100 mb-6">
                  Access world-class courses, live classes, and expert mentorship in one integrated platform.
                </p>
                <div className="flex gap-4">
                  <Button variant="primary">Start Learning</Button>
                  <Button variant="outline">Explore Courses</Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-xl p-8 shadow-2xl"
              >
                <div className="space-y-4">
                  <div className="h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg animate-pulse" />
                  <div className="h-4 bg-secondary-200 rounded-full" />
                  <div className="h-4 bg-secondary-200 rounded-full w-4/5" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="mb-4">Powerful Features</h2>
              <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
                Everything you need for effective online learning
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Live Classes', desc: 'Interactive real-time learning sessions', icon: '🎥' },
                { title: 'Smart Quizzes', desc: 'AI-powered adaptive assessments', icon: '📝' },
                { title: 'Progress Tracking', desc: 'Detailed analytics and insights', icon: '📊' },
                { title: 'Certificates', desc: 'Verified digital credentials', icon: '🏆' },
                { title: '24/7 Support', desc: 'Expert mentorship and guidance', icon: '🤝' },
                { title: 'Mobile Ready', desc: 'Learn anywhere, anytime', icon: '📱' },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-secondary-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-white mb-4">Ready to Start Learning?</h2>
            <p className="text-primary-100 mb-8 text-lg">Join thousands of students transforming their careers</p>
            <Button variant="primary">Get Started Today</Button>
          </div>
        </section>
      </motion.div>
      <Footer />
    </>
  );
}
