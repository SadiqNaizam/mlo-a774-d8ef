import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: string;
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, className }) => (
  <Card className={cn('bg-card', className)}>
    <CardHeader className="pb-2 pt-4">
      <CardTitle className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="pb-4">
      <div className="text-4xl font-bold text-foreground">{value}</div>
    </CardContent>
  </Card>
);

const MetricCardGrid: React.FC = () => {
  const metrics: MetricCardProps[] = [
    { title: 'Revenue', value: '$92,463' },
    { title: 'Production Output', value: '315' },
    { title: 'Customer Satisfaction Score', value: '91%' },
    { title: 'Employee Attendance', value: '96%' },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <MetricCard key={metric.title} title={metric.title} value={metric.value} />
      ))}
    </div>
  );
};

export default MetricCardGrid;
