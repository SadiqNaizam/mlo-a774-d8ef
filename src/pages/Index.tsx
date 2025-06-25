import React from 'react';

// Import layout and dashboard components
import MainAppLayout from '../components/layout/MainAppLayout';
import DashboardHeader from '../components/Dashboard/DashboardHeader';
import MetricCardGrid from '../components/Dashboard/MetricCardGrid';
import ProductSalesSection from '../components/Dashboard/ProductSalesSection';
import WebsiteTrafficChart from '../components/Dashboard/WebsiteTrafficChart';
import CircularProgressSection from '../components/Dashboard/CircularProgressSection';

/**
 * The main dashboard page for the Weekly Status Dashboard.
 * This page composes all the major dashboard organisms into a cohesive layout,
 * following the structure defined in the project requirements.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <div className="space-y-6">
        <DashboardHeader />
        
        {/* The main grid for dashboard widgets, responsive with a 2-column layout on large screens */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          
          {/* Full-width metric cards grid. The wrapper ensures it spans both columns on large screens. */}
          <div className="lg:col-span-2">
            <MetricCardGrid />
          </div>

          {/* Side-by-side chart and stats section. Each component takes one column on large screens. */}
          <ProductSalesSection />
          <WebsiteTrafficChart />

          {/* Full-width circular progress section. The wrapper ensures it spans both columns on large screens. */}
          <div className="lg:col-span-2">
            <CircularProgressSection />
          </div>
        </div>
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
