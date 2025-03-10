'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col lg:flex-row lg:gap-20">
          {/* Title Section - full width on mobile, 1/3 width on desktop */}
          <div className="mb-10 sm:mb-12 md:mb-16 lg:mb-0 lg:w-1/3">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 font-grotesk text-4xl font-bold sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
            >
              Let&apos;s <span className="text-primary">Talk</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-gray-600 sm:text-lg"
            >
              Ready to start your project? We&apos;re here to help bring your vision to life. Drop
              us a message and let&apos;s create something amazing together.
            </motion.p>
          </div>

          {/* Form Section - full width on mobile, 2/3 width on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-grotesk lg:w-2/3"
          >
            <form
              data-netlify="true"
              name="contact"
              method="POST"
              className="space-y-6 rounded-lg bg-gradient-to-tr from-primary/10 via-transparent to-primary/5 p-4 sm:space-y-8 sm:p-6 md:p-8"
            >
              {/* Hidden input for Netlify Forms */}
              <input type="hidden" name="form-name" value="contact" />

              {/* Name and Email fields - stack on mobile, side by side on tablet+ */}
              <div className="flex w-full flex-col gap-6 sm:flex-row">
                <div className="mb-6 w-full sm:mb-0 sm:w-1/2">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="w-full border-b border-primary/40 bg-transparent px-4 py-3 outline-none transition-colors duration-300 placeholder:text-primary focus:border-primary"
                    required
                  />
                </div>

                <div className="w-full sm:w-1/2">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full border-b border-primary/40 bg-transparent px-4 py-3 outline-none transition-colors duration-300 placeholder:text-primary focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  className="w-full resize-none border-b border-primary/40 bg-transparent px-4 py-3 outline-none transition-colors duration-300 placeholder:text-primary focus:border-primary"
                  required
                />
              </div>

              <div className="flex justify-center sm:justify-end">
                <button className="group relative flex items-center overflow-hidden rounded-b-lg border-2 border-primary bg-transparent px-4 py-3 text-base font-semibold text-primary transition-all hover:text-backgroundary sm:px-6 sm:text-lg md:px-8 md:py-4 md:text-xl">
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 translate-y-full transform bg-primary transition-transform duration-300 ease-out group-hover:translate-y-0"></div>
                  <svg
                    className="relative z-10 ml-2 h-4 w-4 sm:ml-3 sm:h-5 sm:w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
