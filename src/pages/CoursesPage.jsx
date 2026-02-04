import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Card, Badge } from '../components/UI';
import api from '../utils/axios';

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await api.get('/courses');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center"><div className="loader" /></div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-secondary-50 py-12"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h1 className="mb-4">Explore Courses</h1>
          <p className="text-lg text-secondary-600">Discover and enroll in world-class courses</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course._id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden cursor-pointer hover:scale-105">
                <div className="bg-gradient-to-br from-primary-400 to-primary-600 h-40" />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold">{course.title}</h3>
                    <Badge variant="primary">{course.level}</Badge>
                  </div>
                  <p className="text-secondary-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary-600">${course.price}</span>
                    <Button variant="primary" size="sm">Enroll</Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
