import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, Badge } from '../components/UI';
import api from '../utils/axios';
import useAuthStore from '../context/authStore';

export default function DashboardPage() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.get('/users/profile');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center"><div className="loader" /></div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-secondary-50 to-primary-50 py-12"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-2">Welcome back, {userData?.firstName}! 👋</h1>
          <p className="text-lg text-secondary-600">Here's your learning dashboard</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Enrolled Courses', value: userData?.enrolledCourses?.length || 0, icon: '📚' },
            { label: 'Completion Rate', value: '75%', icon: '📊' },
            { label: 'Total Hours', value: '24.5', icon: '⏱️' },
            { label: 'Certificates', value: '3', icon: '🏆' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-6 text-center hover:shadow-lg">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <p className="text-secondary-600">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enrolled Courses */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="mb-6">Your Courses</h2>
          {userData?.enrolledCourses?.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {userData.enrolledCourses.map((course, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="border border-secondary-200 rounded-lg p-4 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold mb-2">{course?.title || 'Course'}</h3>
                  <div className="w-full bg-secondary-200 rounded-full h-2 mb-4">
                    <div className="bg-primary-600 h-2 rounded-full" style={{ width: '65%' }} />
                  </div>
                  <p className="text-sm text-secondary-600">65% Complete</p>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-secondary-600">No courses enrolled yet. Start exploring courses today!</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
