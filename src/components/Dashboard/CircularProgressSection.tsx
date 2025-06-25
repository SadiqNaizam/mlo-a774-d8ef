import React from 'react';
import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';

interface ScoreData {
  name: string;
  value: number;
}

const scoresData: ScoreData[] = [
  { name: 'SCORE #1', value: 85 },
  { name: 'SCORE #2', value: 73 },
  { name: 'SCORE #3', value: 92 },
  { name: 'SCORE #4', value: 54 },
  { name: 'SCORE #5', value: 75 },
];

interface CircularProgressIndicatorProps {
  score: ScoreData;
}

const CircularProgressIndicator: React.FC<CircularProgressIndicatorProps> = ({ score }) => {
  const data = [{ name: score.name, value: score.value, fill: 'hsl(var(--primary))' }];

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="w-32 h-32 relative">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="75%"
            outerRadius="95%"
            barSize={12}
            data={data}
            startAngle={90}
            endAngle={-270}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              background={ { fill: 'hsl(var(--secondary))' } }
              dataKey="value"
              cornerRadius={10}
              className="stroke-transparent"
            />
             <text 
                x="50%" 
                y="50%" 
                textAnchor="middle" 
                dominantBaseline="middle" 
                className="fill-primary font-bold text-3xl"
            >
                {score.value}
            </text>
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-sm font-medium tracking-wider text-muted-foreground">{score.name}</p>
    </div>
  );
};

const CircularProgressSection: React.FC = () => {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardContent className="pt-6">
        <div className="flex flex-wrap items-center justify-around gap-4">
          {scoresData.map((score) => (
            <CircularProgressIndicator key={score.name} score={score} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CircularProgressSection;
