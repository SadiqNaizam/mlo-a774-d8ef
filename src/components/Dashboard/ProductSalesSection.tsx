import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LabelList } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Boxes } from 'lucide-react';

const salesData = [
  { name: 'Region 1', sales: 70 },
  { name: 'Region 2', sales: 103 },
  { name: 'Region 3', sales: 116 },
  { name: 'Region 4', sales: 35 },
  { name: 'Region 5', sales: 40 },
];

const ProductSalesSection: React.FC = () => {
  return (
    <Card className="col-span-1">
      <CardHeader className="pb-4">
        <CardTitle className="text-base font-medium uppercase tracking-wider text-muted-foreground">Product Sales</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={salesData.slice().reverse()} // Reverse for top-to-bottom display
                layout="vertical"
                margin={{ top: 0, right: 30, left: 10, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  axisLine={false} 
                  tickLine={false}
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 14 }}
                  width={80}
                />
                <Tooltip
                  cursor={{ fill: 'hsl(var(--secondary))' }}
                  contentStyle={{
                    backgroundColor: 'hsl(var(--background))',
                    borderColor: 'hsl(var(--border))',
                    color: 'hsl(var(--foreground))'
                  }}
                />
                <Bar dataKey="sales" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]}>
                   <LabelList dataKey="sales" position="right" offset={8} style={{ fill: 'hsl(var(--foreground))', fontSize: 14 }} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
             <div>
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Total Products Sold</p>
                <p className="text-6xl font-bold text-primary">364</p>
             </div>
             <Boxes className="h-20 w-20 text-primary opacity-80" />
             <p className="text-xs text-muted-foreground">06/19/2024 - 06/25/2024</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductSalesSection;
