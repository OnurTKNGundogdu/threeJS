import { MailOutlined, DesktopOutlined, PieChartOutlined } from '@ant-design/icons';

export const sidebarMenuItem = [
  { key: '1', icon: <PieChartOutlined />, label: 'Foods' },
  {
    key: '3',
    label: 'Drinks',
    icon: <MailOutlined />,
    children: [
      { key: '5', label: 'Cold drinks' },
      { key: '6', label: 'Cocktails' },
      { key: '7', label: 'Mocktails' },
      { key: '8', label: 'Wines' },
    ],
  },
  { key: '2', icon: <DesktopOutlined />, label: 'Deserts' },
];
