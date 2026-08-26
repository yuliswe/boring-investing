import { Text } from '@/design-system/Text';

type StatProps = {
  label: string;
  value: string;
  changePct?: number;
};

export function Stat({ label, value, changePct }: StatProps) {
  const hasChange = typeof changePct === 'number';
  const changeColor =
    hasChange && changePct! >= 0 ? 'text-positive' : 'text-negative';
  const changeSign = hasChange && changePct! >= 0 ? '+' : '';
  return (
    <div className='flex flex-col gap-1'>
      <Text variant='caption'>{label}</Text>
      <Text variant='subheading'>{value}</Text>
      {hasChange ? (
        <span className={`text-sm font-medium ${changeColor}`}>
          {changeSign}
          {changePct!.toFixed(1)}%
        </span>
      ) : null}
    </div>
  );
}
