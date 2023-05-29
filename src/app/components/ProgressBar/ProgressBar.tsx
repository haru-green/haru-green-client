import classNames from 'classnames';

interface ProgressBarProps {
  className?: string;
  height?: string;
  total?: number;
  value?: number;
}

function ProgressBar({ className, height, total, value }: ProgressBarProps) {
  const percent = Math.ceil((value / total) * 100);

  return (
    <div
      className={classNames(className, 'bg-[#f2f2f2] text-4xl')}
      style={{ height }}
    >
      <div
        className={classNames(
          'bg-[#34aa70] h-full',
          percent < 100 && 'rounded-[0_10px_10px_0]'
        )}
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}

export default ProgressBar;
