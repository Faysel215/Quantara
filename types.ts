import React from 'react';

export type Page = 'HOME' | 'QVAL' | 'REGUSIM' | 'SUKUK' | 'WAD' | 'WAD_MULTILEG' | 'WAD_PATH' | 'WAD_INFINITE';

export interface NavItem {
  label: string;
  id: Page;
}

export interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtext?: string;
  trend?: string;
  trendUp?: boolean;
}