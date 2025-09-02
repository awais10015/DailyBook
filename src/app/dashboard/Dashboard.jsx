"use client";

import React from "react";
import { motion } from "framer-motion";



import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { ChartBarMultiple } from "@/components/charts/ChartBar";
import { ChartPieLegend } from "@/components/charts/ChartPie";
import { CustomerTable } from "@/components/table/Table";

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15, // stagger animations of children
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Dashboard = () => {
  return (
    <motion.div
      className="w-full p-4 md:p-6 space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
   
      <motion.div
        className="w-full flex flex-wrap gap-4 items-center justify-center"
        variants={containerVariants}
      >
        
          <motion.div className="flex gap-2 flex-wrap">
            <Card className=" w-[200px] rounded-md bg-[#f0790f]/15">
              <CardHeader>
                <CardTitle>
                  <div className="text-center">
                    <h1 className="font-semibold text-sm">Total Invoices</h1>
                    <p className="text-lg font-bold">0</p>
                  </div>
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className=" w-[200px] rounded-md bg-[#53b700]/15">
              <CardHeader>
                <CardTitle>
                  <div className="text-center">
                    <h1 className="font-semibold text-sm">
                      Completed Invoices
                    </h1>
                    <p className="text-lg font-bold">0</p>
                  </div>
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className=" w-[200px] rounded-md bg-[#a8c5da]/15">
              <CardHeader>
                <CardTitle>
                  <div className="text-center">
                    <h1 className="font-semibold text-sm">Pending Invoices</h1>
                    <p className="text-lg font-bold">0</p>
                  </div>
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className=" w-[200px] rounded-md bg-[#ef1775]/15">
              <CardHeader>
                <CardTitle>
                  <div className="text-center">
                    <h1 className="font-semibold text-sm">Canceled Invoices</h1>
                    <p className="text-lg font-bold">0</p>
                  </div>
                </CardTitle>
              </CardHeader>
            </Card>
          </motion.div>
        
      </motion.div>

      <motion.div className="flex flex-col gap-4" variants={sectionVariants}>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">Welcome to DailyBook</h1>
          <p className="text-sm text-gray-500">
            Get the seamless, secure and swift payments made simple
          </p>
        </div>
        <div className="w-full">
          <ChartBarMultiple />
        </div>
      </motion.div>

    
      <motion.div
        className="flex flex-col lg:flex-row gap-6 w-full"
        variants={sectionVariants}
      >
        <div className="w-full lg:w-1/2">
          <ChartPieLegend />
        </div>
        <div className="w-full lg:w-1/2 overflow-x-auto">
          <CustomerTable />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
