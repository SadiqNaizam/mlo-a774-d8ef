import React from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const trafficData = [
  { date: '06/19', visits: 65, pageViews: 30 },
  { date: '06/20', visits: 110, pageViews: 50 },
  { date: '06/21', visits: 42, pageViews: 18 },
  { date: '06/22', visits: 122, pageViews: 58 },
  { date: '06/23', visits: 105, pageViews: 40 },
  { date: '06/24', visits: 50, pageViews: 20 },
  { date: '06/25', visits: 88, pageViews: 32 },
];

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: any[]; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-card border border-border rounded-lg shadow-sm">
        <p className="label text-sm text-foreground">{`Date: ${label}`}</p>
        <p className="intro text-sm" style={{ color: payload[0].color }}>{`Website Visits : ${payload[0].value}`}</p>
        <p className="intro text-sm" style={{ color: payload[1].color }}>{`Website Page Views : ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const WebsiteTrafficChart: React.FC = () => {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle className="text-base font-medium uppercase tracking-wider text-muted-foreground">Website Traffic</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={trafficData} margin={{ top: 5, right: 5, bottom: 20, left: 0 }}>
              <defs>
                <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid stroke="hsl(var(--border))" strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="date" 
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                tickLine={false}
                axisLine={{ stroke: 'hsl(var(--border))' }}
              />
              <YAxis 
                yAxisId="left"
                orientation="left"
                stroke="hsl(var(--primary))"
                tick={{ fill: 'hsl(var(--primary))', fontSize: 12 }}
                tickLine={false}
                axisLine={false}
                domain={[0, 140]}
                ticks={[0, 20, 40, 60, 80, 100, 120, 140]}
              />
              <YAxis 
                yAxisId="right"
                orientation="right"
                stroke="hsl(var(--foreground))"
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                tickLine={false}
                axisLine={false}
                domain={[0, 60]}
                ticks={[0, 10, 20, 30, 40, 50, 60]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                verticalAlign="bottom"
                wrapperStyle={{ paddingTop: '20px' }}
              />
              <Area 
                type="monotone" 
                dataKey="visits" 
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorVisits)"
                yAxisId="left"
                name="Website Visits"
              />
              <Line 
                type="monotone" 
                dataKey="pageViews" 
                stroke="hsl(var(--foreground))"
                strokeWidth={1.5}
                dot={{ r: 3, fill: 'hsl(var(--foreground))' }}
                activeDot={{ r: 5 }}
                yAxisId="right"
                name="Website Page Views"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default WebsiteTrafficChart;
